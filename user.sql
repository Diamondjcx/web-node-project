/*
SQLyog Professional v12.09 (64 bit)
MySQL - 5.5.20-log 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `users` (
	`id` int (1),
	`password` varchar (48),
	`username` varchar (48)
); 
insert into `users` (`id`, `password`, `username`) values('1','10','张三');
insert into `users` (`id`, `password`, `username`) values('2','10','李四');
