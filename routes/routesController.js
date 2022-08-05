const controller = {};

const bd = require('../public/db/conn');
const moment = require('moment');

///////////////////////////////////////////////////////////////////////////////////////////////////////////
controller.index_GET = (req, res) => {

    //res.render('index.ejs');
    res.render('login.ejs', { message: req.flash('loginMessage') });
}//////////////////////////////////////////////////////////////////////////////////////////////////////////

controller.login_GET = (req, res) => {

    res.render('login.ejs', { message: req.flash('loginMessage') });
}//////////////////////////////////////////////////////////////////////////////////////////////////////////

controller.register_GET = (req, res) => {

    res.render('register.ejs', { message: req.flash('signupMessage') });
}//////////////////////////////////////////////////////////////////////////////////////////////////////////

controller.profile_GET = (req, res) => {
    console.log(req.user);
    // res.render('Inicio.ejs', { user: req.user });
    usuario = req.user.username;
    bd.query('SELECT * FROM viajes where username=?', ["usuariooo"], (err, viaje) => {
        if (err) {
            res.json(err);
        }

        res.render('Inicio.ejs', {

            user: req.user,
            data: viaje,
            moment: moment
        });

    })

}
controller.Administrador = (req, res) => {//me manda a la pagina donde estan los usuarios
    usuario = req.user.username;
    bd.query('SELECT * FROM viajes where username=?', [usuario], (err, viaje) => {
        if (err) {
            res.json(err);
        }
        bd.query('SELECT * FROM Diesel where username=?', [usuario], (err, Diesel) => {

        res.render('Admin.ejs', {
            user: req.user,
            data: viaje,
            data1: Diesel,
            moment: moment
        });

    }) })



};
controller.RegistrarPago = (req, res) => {//me manda a la pagina donde estan los usuarios
    usuario = req.user.username;
    bd.query('SELECT * FROM Pagos where Estado=?', ["Pendiente"], (err, Tabla) => {
        if (err) {
            res.json(err);
        }
     

        res.render('AñadirPago.ejs', {
            user: req.user,
            PagoDatos: Tabla,
           
            moment: moment
        });

   })



};
controller.PagosPendientes = (req, res) => {//me manda a la pagina donde estan los Pagos pendientes
    usuario = req.user.username;
    bd.query('SELECT * FROM Pagos where Estado=?', ["Pendiente"], (err, Tabla) => {
        if (err) {
            res.json(err);
        }
     

        res.render('PagosPen.ejs', {
            user: req.user,
            PagoDatos: Tabla,
           
            moment: moment
        });

   })



};
controller.PagosRealizados = (req, res) => {//me manda a la pagina donde estan los Pagos pendientes
    usuario = req.user.username;
    bd.query('SELECT * FROM Pagos where Estado=?', ["Pagado"], (err, Tabla) => {
        if (err) {
            res.json(err);
        }
     

        res.render('PagosRealizados.ejs', {
            user: req.user,
            PagoDatos: Tabla,
           
            moment: moment
        });

   })



};
controller.Consultas = (req, res) => {
    console.log(req.user);
    res.render('Consultas.ejs', { user: req.user });
}
controller.Diesel = (req, res) => {//me manda a la pagina donde estan los usuarios
    usuario = req.user.username;
    bd.query('SELECT * FROM Diesel where username=?', ["usuariooo"], (err, viaje) => {
        if (err) {
            res.json(err);
        }

        res.render('Diesel.ejs', {
            user: req.user,
            data1: viaje,
            moment: moment
        });

    })



};
controller.save = (req, res) => {//Aqui mandamos llamar al metodo guardar
    semana = req.body.week;
    usuario = req.user.username;
    const data = req.body;
    bd.query('INSERT INTO viajes set ?', [data], (err, viajes) => {
        console.log(viajes);
        if (err) {

            res.json("Viaje duplicado, porfavor verifique el BOL");
        }

    })

    bd.query('SELECT * FROM viajes where username=? and week=?', [usuario, semana], (err, viaje) => {
        if (err) {
            res.json(err);
        }

        res.render('Inicio.ejs', {
            user: req.user,
            data: viaje,
            moment: moment
        });

    })
};

controller.GuardarPago = (req, res) => {//Aqui mandamos llamar al metodo guardar
   
    
    const PagoDatos = req.body;
    bd.query('INSERT INTO Pagos set ?', [PagoDatos], (err, Pagos) => {
        console.log(Pagos);
        if (err) {

            res.json("Ha ocurrido un error");
        }

    })

    bd.query('SELECT * FROM Pagos where Estado=? ', ["Pendiente"], (err, Pagos) => {
        if (err) {
            res.json(err);
        }

        res.render('AñadirPago.ejs', {
            user: req.user,
            PagoDatos: Pagos,
            moment: moment
        });

    })
};
controller.saveDiesel = (req, res) => {//Aqui mandamos llamar al metodo guardar
    semana = req.body.week;
    usuario = req.user.username;
    const data1 = req.body;
    bd.query('INSERT INTO Diesel set ?', [data1], (err, viajes) => {
        console.log(viajes);
        if (err) {

            res.json("Invoice duplicado, porfavor verifique el invoice");
        }

    })

    bd.query('SELECT * FROM Diesel where username=? and week=?', [usuario, semana], (err, Diesel) => {
        if (err) {
            res.json(err);
        }

        res.render('Diesel.ejs', {
            user: req.user,
            data1: Diesel,
            moment: moment
        });

    })
};
controller.list2 = (req, res) => {//me manda a la pagina donde estan los usuarios
    usuario = req.user.username;
    bd.query('SELECT * FROM viajes where username=?', ["usuariooo"], (err, viaje) => {
        if (err) {
            res.json(err);
        }
        bd.query('SELECT * FROM Diesel where username=?', ["usuariooo"], (err, Diesel) => {
        res.render('Consultas.ejs', {
            user: req.user,
            data: viaje,
            data1:Diesel,
            moment: moment
        });

    })})



};

controller.Delete = (req, res) => {
    const idd = req.params.Id;
    bd.query('Delete from viajes where Id=?', [idd], (err, rows) =>
        res.redirect('/ver'));
};
controller.DeleteDiesel = (req, res) => {
    const idd2 = req.params.Id;
    bd.query('Delete from Diesel where Id=?', [idd2], (err, rows) =>
        res.redirect('/ver'));
};
controller.DeletePago = (req, res) => {
    const id = req.params.Id;
    bd.query('Delete from Pagos where Id=?', [id], (err, rows) =>
        res.redirect('/RegistrarPago'));
};

controller.Edit = (req, res) => {//Me consulta el id en la base de datos y me trae todos los datos
    const idd = req.params.Id;
    bd.query('Select * from viajes where Id=?', [idd], (err, viajes) => {
        res.render('Modificar.ejs', {
            data: viajes[0],
            moment: moment
        });
    }
    );
};
controller.EditDiesel = (req, res) => {//Me consulta el id en la base de datos y me trae todos los datos
    const idd2 = req.params.Id;
    bd.query('Select * from Diesel where Id=?', [idd2], (err, Diesel) => {
        res.render('ModificarDiesel.ejs', {
            data1: Diesel[0],
            moment: moment
        });
    }
    );
};
controller.EditPagos = (req, res) => {//Me consulta el id en la base de datos y me trae todos los datos
    const idd2 = req.params.Id;
    bd.query('Select * from Pagos where Id=?', [idd2], (err, Datos) => {

        if(err){

        } else
        bd.query('UPDATE Pagos set Estado=? where Id=?', ["Pagado", idd2], (err, usuarios) => {
            res.redirect('/PagosPendientes');
    
        });
        
    }
    );
};
controller.UpdateDiesel = (req, res) => {//me actualizsa
    const idd2 = req.params.Id;
    const newUsuario2 = req.body;
    bd.query('UPDATE Diesel set ? where Id=?', [newUsuario2, idd2], (err, usuarios) => {
        res.redirect('/ver');

    });
};
controller.Update = (req, res) => {//me actualizsa
    const idd = req.params.Id;
    const newUsuario = req.body;
    bd.query('UPDATE viajes set ? where Id=?', [newUsuario, idd], (err, usuarios) => {
        res.redirect('/ver');

    });
};

controller.buscar = (req, res) => {//me manda a la pagina donde estan los usuarios
    semana = req.body.txtBuscar;
    usuario = req.user.username;
    bd.query('SELECT * FROM viajes where username=? and week=?', [usuario, semana], (err, viaje) => {
        if (err) {
            res.json(err);
        }
        bd.query('SELECT * FROM Diesel where username=? and week=?', [usuario, semana], (err, Diesel) => {
            if (err) {
                res.json(err);
            }
            res.render('Consultas.ejs', {
                user: req.user,

                data: viaje, 
                data1:Diesel,
                moment: moment
            });
        })
    })



};
controller.buscarEspecifico = (req, res) => {//me manda a la pagina donde estan los usuarios
    semana = req.body.txtBuscar;
    nombre = req.body.txtNombre;

    bd.query('SELECT * FROM viajes where username=? and week=?', [nombre, semana], (err, viaje) => {
        if (err) {
            res.json(err);
        }
        bd.query('SELECT * FROM Diesel where username=? and week=?', [nombre, semana], (err, Diesel) => {


        res.render('Admin.ejs', {
            user: req.user,

            data: viaje,
            data1: Diesel,
            moment: moment
        });

    }) })


};
controller.buscarEnInicio = (req, res) => {//me manda a la pagina donde estan los usuarios

    bd.query('SELECT * FROM viajes where username=? and week=?', [usuario, semana], (err, viaje) => {
        if (err) {
            res.json(err);
        }

        res.render('Inicio.ejs', {

            data: viaje,
            moment: moment
        });

    })



};
controller.buscarTodo = (req, res) => {//me manda a la pagina donde estan los usuarios

    usuario = req.user.username; console.log('el usuario es:', req.user.username);
    bd.query('SELECT * FROM viajes where username=?', [usuario], (err, viaje) => {
        if (err) {
            res.json(err);
        }
        bd.query('SELECT * FROM Diesel where username=?', [usuario], (err, Diesel) => {

        res.render('Consultas.ejs', {
            user: req.user,

            data: viaje,
            data1: Diesel,
            moment: moment
        });

    }) })



};

controller.saveViaje = (req, res) => {//Aqui mandamos llamar al metodo guardar

    const data = req.body;
    bd.query('INSERT INTO cita set ?', [data], (err, cita) => {
        console.log(cita);

        res.redirect('/profile');
    })
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.cows_GET = (req, res) => {

//     res.render('cows.ejs', { user: req.user });
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.searchcow_GET = (req, res) => {

//     user = req.user

//     functiondb.SearchCows(user)
//         .then((result) => {
//             res.render('searchcow.ejs', {
//                 user: req.user, data: result
//             });
//         })
//         .catch((err) => { res.json(err) })
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.searchcowid_GET = (req, res) => {

//     values = req.params

//     functiondb.SearchFastCow(values)
//         .then((result) => {

//             res.send(result);
//         })
//         .catch((err) => { res.json(err) })
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.insertCow_POST = (req, res) => {

//     values = req.body
//     async function waitForPromise() {

//         let insertCow = await functiondb.InsertCow(values);
//         let insertHistCow = await functiondb.InsertHistCow(values);

//             Promise.all([insertCow, insertHistCow])
//             .then(result => { res.json(result) })
//             .catch(err => { console.error(err) })

//     }
//     waitForPromise()
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.cowtable_GET = (req, res) => {

//     user = req.user

//     functiondb.SearchCows(user)
//         .then((result) => {

//             res.render('cowtable.ejs', {
//                 user: req.user, data: result
//             });
//         })
//         .catch((err) => { res.json(err) })

// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

controller.logout_GET = (req, res) => {

    req.logout();
    res.redirect('/');
}//////////////////////////////////////////////////////////////////////////////////////////////////////////

controller.login_POST = (req, res) => {

    if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
        req.session.cookie.expires = false;
    }
    res.redirect('/');

}//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.getDairys_GET = (req, res) => {

//     user = req.user

//     functiondb.getDairys(user)
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => { res.json(err) })

// }//////////////////////////////////////////////////////////////////////////////////////////////////////////


// controller.getDairyInfo_POST = (req, res) => {

//     IdDairy = req.body.IdDairy

//     async function waitForPromise() {
//         let getCowsId = await functiondb.getCowsId(IdDairy);
//         let getEstados = await functiondb.getEstados(IdDairy);
//         let getToros = await functiondb.getToros(IdDairy);
//         let getInseminador = await functiondb.getInseminador(IdDairy);
//         let getDiasConfig = await functiondb.getDiasConfig(IdDairy);
//         Promise.all([getCowsId, getEstados, getToros, getInseminador, getDiasConfig])
//             .then(result => { res.json(result) })
//             .catch(err => { console.error(err) })
//     }
//     waitForPromise()
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.getCowInfo_POST = (req, res) => {

//     IdDairy = req.body.IdDairy
//     CowId = req.body.CowId

//     functiondb.getCowInfo(IdDairy, CowId)
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => { res.json(err) })
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////



// controller.getCowHistory_POST = (req, res) => {

//     IdDairy = req.body.IdDairy
//     CowId = req.body.CowId

//     functiondb.getCowHistory(IdDairy, CowId)
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((err) => { res.json(err) })
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////


// controller.confirmBaja_POST = (req, res) => {

//     values=req.body


//     async function waitForPromise() {
//         let insertBaja = await functiondb.insertBaja(values);
//         let updateBaja = await functiondb.updateBaja(values);
//         Promise.all([insertBaja, updateBaja])
//             .then(result => { res.json(result) })
//             .catch(err => { console.error(err) })
//     }
//     waitForPromise()
// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.insertCowMedic_POST = (req, res) => {

//     values=req.body

//     functiondb.insertCowMedic(values)
//     .then((result) => {
//         res.json(result)
//     })
//     .catch((err) => { res.json(err) })

// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

// controller.getCowMedic_POST = (req, res) => {
//     IdDairy = req.body.IdDairy
//     CowId = req.body.CowId


//     async function waitForPromise() {
//         let getCowMedic = await functiondb.getCowMedic(IdDairy,CowId);
//         let getCowPartos = await functiondb.getCowPartos(IdDairy,CowId);
//         Promise.all([getCowMedic, getCowPartos])
//             .then(result => { res.json(result) })
//             .catch(err => { console.error(err) })
//     }
//     waitForPromise()

// }//////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = controller;