$(function () {
    $(document).ready(function () {
        $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
           // normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#679ED8',
                },
                hover: {
                    'fill-opacity': 0.7,
                    cursor: 'pointer'
                },
            },
            series: {
                regions: [{
                    values: {
                        DE:'#83cdfc',
                        FR:'#0365A2',
                        ES:'#0365A2',
                        IT:'#0365A2',
                        CZ:'#0365A2',
                        PL:'#0365A2',
                        SK:'#0365A2',
                        GB:'#0365A2',
                        TR:'#0365A2',
                        US:'#0365A2',
                        MX:'orange',
                        BR:'#0365A2',
                        CN:'#0365A2',
                        IN:'#0365A2'
                    }
                }]
            },
            markerStyle: {
                initial: {
                    fill: '#FFD239',
                    stroke: '#111'
                }
            },
            markers: [
                { latLng: [50.058596, 8.586955], name: 'Germany GmbH, Frankfurt' },
                { latLng: [47.263106, -1.500412], name: 'France SAS, Nantes' },
                { latLng: [41.889227, -1.708757], name: 'Spain S.A.U, Tarazona' },
                { latLng: [45.209883, 7.615787], name: 'Italy S.p.A, Cirie' },
                { latLng: [50.862893, 14.847443], name: 'Czech Republic s.r.o, Hrádek nad Nisou' },
                { latLng: [50.771297, 15.055681], name: 'Czech Republic s.r.o, Liberec' },
                { latLng: [50.814497, 16.315792], name: 'Poland Sp. z o.o, Walbrzych' },
                { latLng: [48.417525, 18.653420], name: ' Slovakia spol s.r.o, Nová Baňa' },
                { latLng: [48.417525, 18.653420], name: ' Germany GmbH, Göteborg' },
                { latLng: [53.069644, -1.252045], name: 'UK Limited Pure Offices, Nottingham' },
                { latLng: [41.299161, 27.978882], name: 'Istanbul Otomotiv , Çerkezköy' },
                { latLng: [42.475298, -83.243645], name: 'USA Inc, Detroit' },
                { latLng: [28.175808, -105.441848], name: 'Mexico S de RL de CV, Delicias' },
                { latLng: [35.619396, -80.780214], name: 'USA Inc, Mooresville' },
                { latLng: [-23.550197, -46.632966], name: 'Brasil Autopeças Ltda, São Paulo' },
                { latLng: [31.360075, 120.832824], name: 'China Ltd, Suzhou' },
                { latLng: [18.732314, 73.797826], name: 'India Private Limited, Pune' },

            ]
        });

    });
});