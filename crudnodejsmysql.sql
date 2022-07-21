-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-07-2022 a las 18:11:31
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudnodejsmysql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

DROP TABLE IF EXISTS `cita`;
CREATE TABLE IF NOT EXISTS `cita` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha` date NOT NULL,
  `Lugar` varchar(100) NOT NULL,
  `Hora` varchar(100) NOT NULL,
  `Actividades` varchar(100) NOT NULL,
  `Op` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `Fecha`, `Lugar`, `Hora`, `Actividades`, `Op`) VALUES
(1, '2022-07-10', 'donde quiera :p', 'como quiera', 'cuando quiera ', 'value1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`) VALUES
(1, 'Alex@gmail.com', '7112'),
(2, 'jesus@gmail.com', '7112'),
(4, 'LAN@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios2`
--

DROP TABLE IF EXISTS `usuarios2`;
CREATE TABLE IF NOT EXISTS `usuarios2` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios2`
--

INSERT INTO `usuarios2` (`Id`, `Nombre`, `Apellidos`, `Correo`, `Contraseña`) VALUES
(2, 'alex', 'saenz saldivar', '2', '7112');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

DROP TABLE IF EXISTS `viajes`;
CREATE TABLE IF NOT EXISTS `viajes` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `bol` varchar(30) NOT NULL,
  `weight` float NOT NULL,
  `type` varchar(30) NOT NULL,
  `miles` double NOT NULL,
  `load_facility` varchar(30) NOT NULL,
  `week` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`Id`, `username`, `date`, `bol`, `weight`, `type`, `miles`, `load_facility`, `week`) VALUES
(3, 'Alex@gmail.com', '2022-07-03', 'Nabz', 22.6, 'value1', 66, 'Mexico', 26);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
