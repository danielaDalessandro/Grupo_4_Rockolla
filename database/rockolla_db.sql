CREATE DATABASE  IF NOT EXISTS `rockolla_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rockolla_db`;
-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: rockolla_db
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20200926202533-create-product.js'),('20200926210453-create-format.js'),('20200926210513-create-artist.js'),('20200926210526-create-label.js'),('20200926210535-create-genre.js'),('20200926210840-create-cart.js'),('20200926210929-create-cart-states.js'),('20200926211010-create-user-tokens.js'),('20200926211143-create-user.js'),('20200926211204-create-user-role.js'),('20200926211251-create-shipping.js'),('20200926222740-associate-cart-product.js'),('20200926223136-associate-product-format.js'),('20200926223144-associate-product-label.js'),('20200926223202-associate-product-genre.js'),('20200926223211-associate-product-artist.js'),('20200926223221-associate-cart-shipping.js'),('20200926223249-associate-cart-user.js'),('20200926223254-associate-cart-state.js'),('20200926223304-associate-user-token.js'),('20200926223308-associate-user-role.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Oasis','2020-09-27 21:32:10','2020-09-27 21:32:10'),(2,'Red Hot Chily Peppers','2020-09-27 21:32:10','2020-09-27 21:32:10'),(3,'The Rolling Stones','2020-09-27 21:32:10','2020-09-27 21:32:10'),(4,'Charly Garcia','2020-09-27 21:32:10','2020-09-27 21:32:10'),(5,'Pescado Rabioso','2020-09-27 21:32:10','2020-09-27 21:32:10'),(6,'Almendra','2020-09-27 21:32:10','2020-09-27 21:32:10'),(7,'The Beatles','2020-09-27 21:32:10','2020-09-27 21:32:10'),(8,'The Who','2020-09-27 21:32:10','2020-09-27 21:32:10'),(9,'Coldplay','2020-09-27 21:32:10','2020-09-27 21:32:10'),(10,'The Jimmy Hendrix Experience','2020-09-27 21:32:10','2020-09-27 21:32:10'),(11,'Blur','2020-09-27 21:32:10','2020-09-27 21:32:10'),(12,'Arctic Monkeys','2020-09-27 21:32:10','2020-09-27 21:32:10'),(13,'Pink Floyd','2020-09-27 21:32:10','2020-09-27 21:32:10'),(14,'David Bowie','2020-09-27 21:32:10','2020-09-27 21:32:10'),(15,'Queen','2020-09-27 21:32:10','2020-09-27 21:32:10'),(16,'Led Zepelin','2020-09-27 21:32:10','2020-09-27 21:32:10');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ammount` int DEFAULT '1',
  `price` int NOT NULL,
  `cart_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_product_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `cart_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_states`
--

DROP TABLE IF EXISTS `cart_states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_states`
--

LOCK TABLES `cart_states` WRITE;
/*!40000 ALTER TABLE `cart_states` DISABLE KEYS */;
INSERT INTO `cart_states` VALUES (1,'Pending','2020-09-27 21:32:11','2020-09-27 21:32:11'),(2,'Paid','2020-09-27 21:32:11','2020-09-27 21:32:11');
/*!40000 ALTER TABLE `cart_states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `total` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `shipping_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_shipping_id_foreign_idx` (`shipping_id`),
  KEY `carts_user_id_foreign_idx` (`user_id`),
  KEY `carts_state_id_foreign_idx` (`state_id`),
  CONSTRAINT `carts_shipping_id_foreign_idx` FOREIGN KEY (`shipping_id`) REFERENCES `shippings` (`id`),
  CONSTRAINT `carts_state_id_foreign_idx` FOREIGN KEY (`state_id`) REFERENCES `cart_states` (`id`),
  CONSTRAINT `carts_user_id_foreign_idx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formats`
--

DROP TABLE IF EXISTS `formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `diameter` int NOT NULL,
  `rpm` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formats`
--

LOCK TABLES `formats` WRITE;
/*!40000 ALTER TABLE `formats` DISABLE KEYS */;
INSERT INTO `formats` VALUES (1,'LP',12,33,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(2,'LP',12,45,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(3,'Double',12,33,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(4,'LP',10,33,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(5,'LP',10,45,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(6,'Single',10,33,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(7,'Single',7,45,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(8,'EP',12,33,'2020-09-27 21:32:10','2020-09-27 21:32:10'),(9,'BoxSet',12,33,'2020-09-27 21:32:10','2020-09-27 21:32:10');
/*!40000 ALTER TABLE `formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(2,'Brit Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(3,'Classic Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(4,'Rock Nacional','2020-09-27 21:32:11','2020-09-27 21:32:11'),(5,'Funk Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(6,'Classical','2020-09-27 21:32:11','2020-09-27 21:32:11'),(7,'Latin','2020-09-27 21:32:11','2020-09-27 21:32:11'),(8,'Jazz','2020-09-27 21:32:11','2020-09-27 21:32:11'),(9,'Reggae','2020-09-27 21:32:11','2020-09-27 21:32:11'),(10,'Blues','2020-09-27 21:32:11','2020-09-27 21:32:11'),(11,'Punk Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(12,'Pop','2020-09-27 21:32:11','2020-09-27 21:32:11'),(13,'Electro','2020-09-27 21:32:11','2020-09-27 21:32:11'),(14,'Rock en Español','2020-09-27 21:32:11','2020-09-27 21:32:11'),(15,'Tropical','2020-09-27 21:32:11','2020-09-27 21:32:11'),(16,'Metal','2020-09-27 21:32:11','2020-09-27 21:32:11'),(17,'Psychodelic Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(18,'Hard Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(19,'Glam Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(20,'Symph Rock','2020-09-27 21:32:11','2020-09-27 21:32:11'),(21,'Other','2020-09-27 21:32:11','2020-09-27 21:32:11');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labels`
--

DROP TABLE IF EXISTS `labels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labels`
--

LOCK TABLES `labels` WRITE;
/*!40000 ALTER TABLE `labels` DISABLE KEYS */;
INSERT INTO `labels` VALUES (1,'Universal','2020-09-27 21:32:10','2020-09-27 21:32:10'),(2,'Columbia','2020-09-27 21:32:10','2020-09-27 21:32:10'),(3,'Warner Bros','2020-09-27 21:32:10','2020-09-27 21:32:10'),(4,'Microfón','2020-09-27 21:32:10','2020-09-27 21:32:10'),(5,'EMI','2020-09-27 21:32:10','2020-09-27 21:32:10'),(6,'Sony Music','2020-09-27 21:32:10','2020-09-27 21:32:10'),(7,'Creation Records','2020-09-27 21:32:10','2020-09-27 21:32:10'),(8,'Apple Records','2020-09-27 21:32:10','2020-09-27 21:32:10'),(9,'Virgin Records','2020-09-27 21:32:10','2020-09-27 21:32:10'),(10,'Decca','2020-09-27 21:32:10','2020-09-27 21:32:10'),(11,'Capitol','2020-09-27 21:32:10','2020-09-27 21:32:10'),(12,'Track','2020-09-27 21:32:10','2020-09-27 21:32:10'),(13,'Food','2020-09-27 21:32:10','2020-09-27 21:32:10'),(14,'Atlantic','2020-09-27 21:32:10','2020-09-27 21:32:10');
/*!40000 ALTER TABLE `labels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `publish_date` date DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `stock` int NOT NULL,
  `highlight` int DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:10',
  `format_id` int DEFAULT NULL,
  `label_id` int DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_format_id_foreign_idx` (`format_id`),
  KEY `products_label_id_foreign_idx` (`label_id`),
  KEY `products_genre_id_foreign_idx` (`genre_id`),
  KEY `products_artist_id_foreign_idx` (`artist_id`),
  CONSTRAINT `products_artist_id_foreign_idx` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  CONSTRAINT `products_format_id_foreign_idx` FOREIGN KEY (`format_id`) REFERENCES `formats` (`id`),
  CONSTRAINT `products_genre_id_foreign_idx` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  CONSTRAINT `products_label_id_foreign_idx` FOREIGN KEY (`label_id`) REFERENCES `labels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Yendo de la Cama al Living',1200,'1995-10-02','Alguna descripcion...','tapa-1600989503914.jpeg',1,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,1,4,4),(2,'(Whats the story?) Morning Glory',1600,'1995-10-02','Alguna descripcion...','tapa-1600911903601.jpg',4,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,7,2,1),(3,'Let it be',1800,'1995-10-02','Alguna descripcion...','tapa-1600985609780.jpeg',2,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,8,3,7),(4,'Sticky Fingers',1700,'1995-10-02','Alguna descripcion...','tapa-1598296642968.jpeg',5,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,9,3,3),(5,'Exile on Main Street',2000,'1995-10-02','Alguna descripcion...','tapa-1598222521389.jpeg',4,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,9,3,3),(6,'White Album',1200,'1995-10-02','Alguna descripcion...','tapa-1600987832469.jpeg',1,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,8,3,7),(7,'AM',1500,'1995-10-02','Alguna descripcion...','tapa-1600989752817.jpeg',7,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,6,2,12),(8,'Stadium Arcadium (Jupiter)',1400,'1995-10-02','Alguna descripcion...','tapa-1600986189032.jpg',3,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,3,5,2),(9,'Stadium Arcadium (Mars)',1400,'1995-10-02','Alguna descripcion...','tapa-1600988438060.jpeg',5,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,3,5,2),(10,'Clics Modernos',1400,'1995-10-02','Alguna descripcion...','tapa-1600989020529.jpeg',4,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,1,4,4),(11,'Artaud',1600,'1995-10-02','Alguna descripcion...','tapa-1600989867601.jpeg',3,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,4,4,5),(12,'Definitely Maybe',1600,'1995-10-02','Alguna descripcion...','tapa-1600811872465.jpg',3,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,7,2,1),(13,'Almendra',1200,'1995-10-02','Alguna descripcion...','tapa-1600988561244.jpeg',2,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,6,4,6),(14,'My Generation',1200,'1995-10-02','Alguna descripcion...','tapa-1600988715447.jpeg',1,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,10,3,8),(15,'Viva la Vida or Death and All His Friends',1600,'1995-10-02','Alguna descripcion...','tapa-1600988785317.jpeg',2,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,11,2,9),(16,'Parachutes',1800,'1995-10-02','Alguna descripcion...','tapa-1600989133175.jpeg',2,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,11,2,9),(17,'Axis: Bold as Love',1600,'1995-10-02','Alguna descripcion...','tapa-1600985097832.jpeg',3,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,12,17,10),(18,'Blur',1200,'1995-10-02','Alguna descripcion...','tapa-1600985172540.jpeg',5,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,13,2,11),(19,'Californication',1700,'1995-10-02','Alguna descripcion...','tapa-1600912101879.jpeg',6,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,3,5,2),(20,'Dark Side of The Moon',1200,'1995-10-02','Alguna descripcion...','tapa-1600985292612.jpeg',8,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,11,17,13),(21,'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',1500,'1995-10-02','Alguna descripcion...','tapa-1600985404124.jpeg',4,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,9,19,14),(22,'A Night at The Opera',1900,'1995-10-02','Alguna descripcion...','tapa-1600985452838.jpeg',7,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,5,20,15),(23,'Queen II',1600,'1995-10-02','Alguna descripcion...','tapa-1600985500831.jpeg',4,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,5,20,15),(24,'Tattoo You',1700,'1995-10-02','Alguna descripcion...','tapa-1600984732322.jpeg',3,0,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,1,3,3),(25,'Sgt. Pepper\'s Lonely Hearts Club Band',1200,'1995-10-02','Alguna descripcion...','tapa-1600984834013.jpeg',5,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,8,3,7),(26,'Houses of The Holy',2200,'1995-10-02','Alguna descripcion...','tapa-1601183225076.jpeg',5,1,'2020-09-27 21:32:10','2020-09-27 21:32:10',1,14,18,16);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippings`
--

DROP TABLE IF EXISTS `shippings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shippings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` int NOT NULL,
  `dispatch_date` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippings`
--

LOCK TABLES `shippings` WRITE;
/*!40000 ALTER TABLE `shippings` DISABLE KEYS */;
/*!40000 ALTER TABLE `shippings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,'Clent','2020-09-27 21:32:11','2020-09-27 21:32:11'),(2,'Admin','2020-09-27 21:32:11','2020-09-27 21:32:11');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tokens`
--

DROP TABLE IF EXISTS `user_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_tokens_user_id_foreign_idx` (`user_id`),
  CONSTRAINT `user_tokens_user_id_foreign_idx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tokens`
--

LOCK TABLES `user_tokens` WRITE;
/*!40000 ALTER TABLE `user_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `updated_at` datetime NOT NULL DEFAULT '2020-09-27 21:32:11',
  `role_id` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `users_role_id_foreign_idx` (`role_id`),
  CONSTRAINT `users_role_id_foreign_idx` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'burwin0@vk.com','Aurora','Urwin','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Little Fleur',421,'Ylöjärvi','2',2485,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(2,'ffoyster1@nydailynews.com','Millard','Foyster','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Maple Wood',61,'Qiaosi','4',3021,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(3,'jgresch2@hibu.com','Evania','Gresch','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Scoville',71957,'Kanie','5',5469,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(4,'rkopfen3@bluehost.com','Chev','Kopfen','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Homewood',41255,'Tunjë','4',1175,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(5,'gmaccaffrey4@patch.com','Sheffield','MacCaffrey','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Nobel',8,'Fūman','8',6423,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(6,'kweatherdon5@cyberchimps.com','Warden','Weatherdon','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Fulton',4,'Santa Catalina','11',3226,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(7,'fmacdermid6@wordpress.org','Aguste','MacDermid','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Vahlen',67,'Sarandi','10',2631,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(8,'eaukland7@whitehouse.gov','Sarette','Aukland','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Ridgeview',85,'Jargalant','10',2817,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(9,'ndoonican8@youtu.be','Evan','Doonican','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Shasta',1,'Vrsi','11',4319,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(10,'ialsford9@home.pl','Kirsten','Alsford','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Red Cloud',20221,'Zhagang','1',1452,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(11,'dcarilloa@amazon.co.uk','Margarette','Carillo','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Washington',54155,'Chillia','1',2675,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(12,'ttoderbruggeb@a8.net','Ebonee','Toderbrugge','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Grim',57,'Stari Bar','3',5581,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(13,'cdavinetc@reddit.com','Demeter','Davinet','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Elmside',743,'Tsingoni','10',1507,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(14,'vblackied@blog.com','Erina','Blackie','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Helena',55,'Jinchuan','9',6934,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(15,'dtregunnae@jigsy.com','Drusi','Tregunna','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Duke',7957,'Qiping','7',6930,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(16,'cclohiseyf@usatoday.com','Star','Clohisey','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Caliangt',63,'Ḩalwān','12',4125,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(17,'rswalwelg@bluehost.com','Ambros','Swalwel','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Hanson',45,'Santa Cruz do Bispo','8',7181,'Porto','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(18,'ttebbetth@paginegialle.it','Harwell','Tebbett','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Delaware',6,'Beni Khiar','2',7241,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(19,'ifigurskii@technorati.com','Ignacius','Figurski','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Hovde',40937,'Detroit','4',5761,'Michigan','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(20,'mtwentymanj@rediff.com','Griffith','Twentyman','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Novick',4,'Nasīrābād','4',1357,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(21,'woculligank@answers.com','Debbi','O\' Culligan','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'West',97,'Tanda','8',6086,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(22,'ametherelll@spiegel.de','Christan','Metherell','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Forest Run',6482,'Bharatpur','10',3001,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(23,'hlowlem@java.com','Cherilyn','Lowle','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Hanson',56456,'Galatás','10',1129,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(24,'lcochetn@house.gov','Kathleen','Cochet','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Anthes',38,'Batad','7',6728,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(25,'mmacalleno@newsvine.com','Frazer','MacAllen','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Hazelcrest',8,'Caimitillo','5',4120,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(26,'ktwidlep@sciencedirect.com','Agneta','Twidle','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Delaware',3,'Tagdanua','10',7022,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(27,'tabernethyq@twitpic.com','Bald','Abernethy','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Menomonie',1526,'Chemerivtsi','10',7830,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(28,'ahulbertr@oracle.com','Issi','Hulbert','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Westridge',2,'Zaječov','12',3229,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(29,'lroarks@virginia.edu','Claudell','Roark','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Hayes',682,'Polazna','4',4369,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(30,'cmanwaringt@army.mil','Mella','Manwaring','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Kings',8,'Yŏnan-ŭp','6',6523,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(31,'jbithellu@samsung.com','Tynan','Bithell','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Westridge',4,'Ulaan Khat','7',2709,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(32,'rclemmeyv@hexun.com','Kristan','Clemmey','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Milwaukee',36,'Izobil’nyy','3',6608,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(33,'wgladdisw@house.gov','Elle','Gladdis','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Sommers',35511,'Diên Khánh','5',2769,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(34,'rtornx@ameblo.jp','Melodie','Torn','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Corben',3,'Allkaj','12',6553,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(35,'fmaydwayy@weather.com','Freeland','Maydway','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Pine View',1961,'Badou','9',1544,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(36,'mduckerinz@wufoo.com','Kin','Duckerin','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Wayridge',7,'Caeté','2',4024,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(37,'kcleevely10@disqus.com','Dre','Cleevely','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Killdeer',36,'Jatisari','1',4714,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(38,'kbilby11@latimes.com','Rainer','Bilby','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Thompson',661,'Aconibe','6',6873,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(39,'hshaudfurth12@sogou.com','Wynnie','Shaudfurth','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Lukken',15174,'Ashkāsham','3',4865,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(40,'sferrick13@boston.com','Cly','Ferrick','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Superior',6903,'Deh-e Now','3',5630,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(41,'akeith14@alexa.com','Lynnea','Keith','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Swallow',7,'Embu','3',2800,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(42,'sreeveley15@360.cn','Derek','Reeveley','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Nobel',6,'Sanom','5',1585,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(43,'mbails16@imgur.com','Maureene','Bails','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Maple',84,'Nancheng','6',3375,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(44,'lbertot17@twitter.com','Shelden','Bertot','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'American',16628,'Ibicaraí','9',4333,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(45,'npincott18@ibm.com','Druci','Pincott','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Daystar',34725,'Majiang','12',7259,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(46,'tdowker19@oaic.gov.au','Beatrix','Dowker','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Laurel',967,'Handegate','3',4584,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(47,'hkem1a@bloomberg.com','Jecho','Kem','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Pierstorff',8,'Iizuka','10',7544,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(48,'kcotherill1b@symantec.com','Syd','Cotherill','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Ramsey',522,'Ishikari','1',2331,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(49,'gdonneely1c@storify.com','Christie','Donneely','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Di Loreto',5,'Goujie','12',4080,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(50,'fboniface1d@netvibes.com','Andra','Boniface','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Michigan',539,'Erie','2',5987,'Pennsylvania','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(51,'wsoppitt1e@tripadvisor.com','Alva','Soppitt','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Onsgard',0,'Kampong Cham','4',4503,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(52,'aledbury1f@clickbank.net','Seth','Ledbury','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Fieldstone',82190,'Hobart','3',5991,'Tasmania','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(53,'ddearnaly1g@economist.com','Maurene','Dearnaly','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Vermont',6248,'Amboasary','5',3528,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(54,'mharsum1h@indiegogo.com','Gerrie','Harsum','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Esch',7,'Tandag','12',5461,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(55,'gcelez1i@sphinn.com','Zilvia','Celez','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Little Fleur',8329,'Dolavón','12',1411,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(56,'vhinkens1j@nbcnews.com','Rabbi','Hinkens','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Waywood',9,'Gaotang','1',5822,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(57,'ejellard1k@jimdo.com','Angie','Jellard','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Trailsway',6317,'Cingambul','9',4026,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(58,'ohannay1l@java.com','Edgardo','Hannay','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Bultman',71990,'Songnim','7',5575,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(59,'gmilkin1m@symantec.com','Hedwig','Milkin','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Roxbury',378,'Cigarogol','8',1337,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(60,'lrizzetti1n@freewebs.com','Deana','Rizzetti','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Canary',22,'Daur','3',3049,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(61,'moak1o@webs.com','Lynnell','Oak','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Stuart',305,'Barbaza','5',6316,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(62,'caupol1p@pinterest.com','Arney','Aupol','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Cordelia',5,'Bologna','4',2940,'Emilia-Romagna','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(63,'mmalinson1q@statcounter.com','Oberon','Malinson','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'7th',67,'Chakwāl','1',7145,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(64,'ctheobalds1r@ask.com','Alano','Theobalds','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Charing Cross',6692,'Zavolzh’ye','9',5056,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(65,'gpocke1s@lulu.com','Terry','Pocke','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Tony',1459,'Gashua','3',5863,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(66,'tgiddy1t@example.com','Guilbert','Giddy','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Gateway',1,'Qarqaraly','5',1493,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(67,'kivett1u@dailymotion.com','Asa','Ivett','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Westridge',76,'Calvaria de Baixo','1',3312,'Leiria','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(68,'rkluss1v@sakura.ne.jp','Marcelle','Kluss','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Bartillon',0,'Saltsjöbaden','9',1697,'Stockholm','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(69,'rgerlack1w@miibeian.gov.cn','Adelheid','Gerlack','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Ilene',446,'Shuangqiao','6',1466,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(70,'bcuffley1x@studiopress.com','Letty','Cuffley','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Corscot',4203,'Linxi','12',4735,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(71,'tgodart1y@aol.com','Jocelyn','Godart','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Dayton',9,'Marovoay','1',1106,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(72,'rlongo1z@bloglines.com','Iver','Longo','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Mccormick',7426,'Borovan','7',5359,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(73,'atrematick20@indiatimes.com','Bent','Trematick','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Holy Cross',87,'Świdwin','7',4596,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(74,'cdarree21@barnesandnoble.com','Yorgos','Darree','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Florence',411,'Rzhev','10',4664,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(75,'phouldey22@indiegogo.com','Silvie','Houldey','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Messerschmidt',87273,'Fasito‘outa','10',4459,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(76,'lfagan23@telegraph.co.uk','Juan','Fagan','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Orin',60,'Zhongguan','12',5335,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(77,'bwillmont24@trellian.com','Carmencita','Willmont','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Morrow',88322,'Choisy-le-Roi','7',5757,'Île-de-France','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(78,'aceschi25@so-net.ne.jp','Hi','Ceschi','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Eagle Crest',8813,'Lanjaghbyur','11',6628,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(79,'larnli26@godaddy.com','Bogey','Arnli','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Lien',99,'Falënki','11',3975,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(80,'cplaide27@i2i.jp','Joan','Plaide','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Walton',4,'Honolulu','11',3794,'Hawaii','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(81,'jlahive28@hhs.gov','Sullivan','Lahive','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Sheridan',81348,'Korsun’-Shevchenkivs’kyy','1',6804,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(82,'mkerss29@cdbaby.com','Cobby','Kerss','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Dryden',60837,'Řečany nad Labem','3',3442,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(83,'rpedrozzi2a@uiuc.edu','Doris','Pedrozzi','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'East',3506,'Villa Ascasubi','4',6668,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(84,'dplacido2b@cam.ac.uk','Malchy','Placido','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Anniversary',54463,'Padasuka','5',4177,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(85,'dbellini2c@myspace.com','Rycca','Bellini','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Roxbury',14,'Messina','3',1103,'Sicilia','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(86,'ofevers2d@zdnet.com','Oralie','Fevers','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Gerald',63,'San Diego','7',6580,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(87,'rblackeby2e@redcross.org','Clarette','Blackeby','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Lindbergh',71,'Cemplang','10',3530,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(88,'hjozefowicz2f@geocities.jp','Teri','Jozefowicz','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Sloan',96140,'Bogorodskoye','3',3357,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(89,'hnunson2g@usatoday.com','Darleen','Nunson','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'5th',2852,'Jagistay','3',7755,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(90,'dstopps2h@oaic.gov.au','Astrix','Stopps','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Springview',11,'Garcia Hernandez','6',7229,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(91,'adomleo2i@ox.ac.uk','Patricia','Domleo','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Bay',226,'Ortiga','9',4089,'Santarém','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(92,'vfrogley2j@archive.org','Sharona','Frogley','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Rigney',4,'Jiaomingsi','4',4084,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(93,'mtimewell2k@ox.ac.uk','Abbie','Timewell','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Birchwood',373,'Leeuwarden','12',6710,'Provincie Friesland','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(94,'zlutty2l@linkedin.com','Eugene','Lutty','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Atwood',9510,'Pont-Audemer','10',5455,'Haute-Normandie','2020-09-27 21:32:11','2020-09-27 21:32:11',1),(95,'ehampshire2m@tmall.com','Leela','Hampshire','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Namekagon',9675,'Nova Prata','7',5118,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(96,'lnoquet2n@europa.eu','Mei','Noquet','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Fordem',704,'Chaloem Phra Kiat','9',2014,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(97,'cwycliff2o@typepad.com','Lemar','Wycliff','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Fulton',22,'Clodomira','10',4999,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(98,'emitchelson2p@accuweather.com','Reina','Mitchelson','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am',NULL,'Scott',2123,'Yuguan','12',1372,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(99,'cosme@fulanito.com','Cosme','Fulanito','$2a$10$LkRfX8VMXzf2rbHdgkXse.CLdkkdYbJ5NMMZhF.iu6cejRrpY94Am','avatar-1601185719741.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',1),(100,'admin@mail.com','Montgomery','Burns','$2a$10$s45/l9QazbhsCp/dxIVDkuVUJ4I0L41fejOkRRxNrHVKIhAK5xkUO','avatar-1601186268777.jpeg',NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-27 21:32:11','2020-09-27 21:32:11',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-27 18:36:04
