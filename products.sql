-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` varchar(255) NOT NULL,
  `price_product` int(11) NOT NULL,
  `stock_product` int(11) NOT NULL,
  `status_product` tinyint(1) NOT NULL DEFAULT '0',
  `image_product` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `products` (`id`, `name_product`, `price_product`, `stock_product`, `status_product`, `image_product`, `createdAt`, `updatedAt`) VALUES
(3,	'Lenovo',	12000000,	16,	0,	'http://localhost:3000/public/produk-1.jpg',	'2022-01-26 15:27:17',	'2022-01-26 15:27:17'),
(5,	'Lenovo',	12000000,	16,	0,	'http://localhost:3000/public/produk-1.jpg',	'2022-01-26 15:28:07',	'2022-01-26 15:28:07'),
(8,	'Lenovo 513',	1350000,	10,	1,	'http://localhost:3000/public/produk-1.jpg',	'2022-01-26 15:30:41',	'2022-01-26 16:31:43');

-- 2022-02-02 07:42:02
