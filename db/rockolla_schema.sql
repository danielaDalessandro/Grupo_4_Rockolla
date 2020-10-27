CREATE DATABASE  IF NOT EXISTS `rockolla` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `rockolla`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: rockolla
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Artists`
--

DROP TABLE IF EXISTS `Artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Artists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Artists`
--

LOCK TABLES `Artists` WRITE;
/*!40000 ALTER TABLE `Artists` DISABLE KEYS */;
/*!40000 ALTER TABLE `Artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cart_state`
--

DROP TABLE IF EXISTS `Cart_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cart_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart_state`
--

LOCK TABLES `Cart_state` WRITE;
/*!40000 ALTER TABLE `Cart_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cart_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Carts`
--

DROP TABLE IF EXISTS `Carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Carts` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `total` int(11) NOT NULL,
  `shipping_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`shipping_id`),
  KEY `fk_cart_users_idx` (`users_id`),
  KEY `fk_cart_state_idx` (`state_id`),
  CONSTRAINT `fk_cart_shipping` FOREIGN KEY (`shipping_id`) REFERENCES `Shipping` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_state` FOREIGN KEY (`state_id`) REFERENCES `Cart_state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_users` FOREIGN KEY (`users_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Carts`
--

LOCK TABLES `Carts` WRITE;
/*!40000 ALTER TABLE `Carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Formats`
--

DROP TABLE IF EXISTS `Formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Formats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `inches` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Formats`
--

LOCK TABLES `Formats` WRITE;
/*!40000 ALTER TABLE `Formats` DISABLE KEYS */;
/*!40000 ALTER TABLE `Formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Genres`
--

DROP TABLE IF EXISTS `Genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genres`
--

LOCK TABLES `Genres` WRITE;
/*!40000 ALTER TABLE `Genres` DISABLE KEYS */;
/*!40000 ALTER TABLE `Genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Label`
--

DROP TABLE IF EXISTS `Label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Label`
--

LOCK TABLES `Label` WRITE;
/*!40000 ALTER TABLE `Label` DISABLE KEYS */;
/*!40000 ALTER TABLE `Label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `price` int(11) NOT NULL,
  `publishing_date` date NOT NULL,
  `description` varchar(500) NOT NULL,
  `views` int(11) NOT NULL,
  `cover` varchar(150) NOT NULL,
  `stock` int(11) NOT NULL,
  `format_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `label_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `products_state_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_format_products_idx` (`format_id`),
  KEY `fk_artist_products_idx` (`artist_id`),
  KEY `fk_label_products_idx` (`label_id`),
  KEY `fk_genre_products_idx` (`genre_id`),
  KEY `fk_state_products_idx` (`products_state_id`),
  CONSTRAINT `fk_artist_products` FOREIGN KEY (`artist_id`) REFERENCES `Artists` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_format_products` FOREIGN KEY (`format_id`) REFERENCES `Formats` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_genre_products` FOREIGN KEY (`genre_id`) REFERENCES `Genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_label_products` FOREIGN KEY (`label_id`) REFERENCES `Label` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_state_products` FOREIGN KEY (`products_state_id`) REFERENCES `Products_state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products_cart`
--

DROP TABLE IF EXISTS `Products_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products_cart` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_products_idx` (`product_id`),
  KEY `fk_productscart_cart_idx` (`cart_id`),
  CONSTRAINT `fk_cart_products` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_productscart_cart` FOREIGN KEY (`cart_id`) REFERENCES `Carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products_cart`
--

LOCK TABLES `Products_cart` WRITE;
/*!40000 ALTER TABLE `Products_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `Products_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products_state`
--

DROP TABLE IF EXISTS `Products_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products_state`
--

LOCK TABLES `Products_state` WRITE;
/*!40000 ALTER TABLE `Products_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `Products_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shipping`
--

DROP TABLE IF EXISTS `Shipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Shipping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `precio` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shipping`
--

LOCK TABLES `Shipping` WRITE;
/*!40000 ALTER TABLE `Shipping` DISABLE KEYS */;
/*!40000 ALTER TABLE `Shipping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) NOT NULL,
  `f_name` varchar(150) NOT NULL,
  `l_name` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `street` varchar(150) NOT NULL,
  `number` int(11) NOT NULL,
  `city` varchar(150) NOT NULL,
  `department` varchar(150) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `province` varchar(150) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `state_id_idx` (`state_id`),
  CONSTRAINT `fk_users_state` FOREIGN KEY (`state_id`) REFERENCES `Users_state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users_state`
--

DROP TABLE IF EXISTS `Users_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_state`
--

LOCK TABLES `Users_state` WRITE;
/*!40000 ALTER TABLE `Users_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users_token`
--

DROP TABLE IF EXISTS `Users_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(150) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_userToken_idx` (`user_id`),
  CONSTRAINT `fk_users_userToken` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_token`
--

LOCK TABLES `Users_token` WRITE;
/*!40000 ALTER TABLE `Users_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users_token` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-19 19:34:22
