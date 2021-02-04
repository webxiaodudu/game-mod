/*
 Navicat Premium Data Transfer

 Source Server         : webxiaodudu
 Source Server Type    : MySQL
 Source Server Version : 50645
 Source Host           : localhost:3306
 Source Schema         : game_mod

 Target Server Type    : MySQL
 Target Server Version : 50645
 File Encoding         : 65001

 Date: 05/02/2021 01:23:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `gender` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `nickname` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `birthday` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `age` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `desinfo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '',
  `avater` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '1608793582979', 'webxiaodudu', 'zlw198526', '15321573907', '1', 'web_hello@sina.com', 'web小肚肚', '2020-12-24', '20', '我是作者', '');
INSERT INTO `users` VALUES (2, '1608793679475', '豆豆', '123456', '15321573102', '2', 'doudou@qq.com', '串串', '2020-12-01', '1', '我是一条dog', '');
INSERT INTO `users` VALUES (3, '1608794651762', '张三', '20201224', '15321553102', '2', '1243@qq.com', '测试', '2020-12-23', '25', NULL, '');
INSERT INTO `users` VALUES (4, '1608794755434', 'hello', 'hello123', '15321573945', '1', 'web_hello2@sina.com', 'nick', '2020-12-08', '41', NULL, '');
INSERT INTO `users` VALUES (5, '1609256754887', 'enen', '123', '13146055798', '2', 'as2dasd@qq.com', 'laohu', '2020-12-29', '88', '我是母夜叉', '');
INSERT INTO `users` VALUES (6, '1609779947940', '李小龙', 'lixiaolong', '13146055790', '1', 'ttyyad@qq.com', 'Kongfu小子', '2021-01-05', '23', '我是很牛逼的', '');
INSERT INTO `users` VALUES (7, '1609811910600', '郑大审', '1866', '15321576901', '2', 'zhengdashen@qq.com', '大老虎', '2021-01-05', '80', '我是一只大老虎', '');
INSERT INTO `users` VALUES (8, '1609812049326', '秀娜', '356789', '15321573903', '2', 'hhhsaa@qq.com', '小马宝莉', '2021-01-05', '6', '我啥都不想说', '');
INSERT INTO `users` VALUES (9, '1610280836318', '刘江涛', '5555', '13146055791', '1', 'hhhsaaa@qq.com', '小涛涛', '2021-01-10', '21', 'asdas', '');
INSERT INTO `users` VALUES (10, '1612422688299', '米小圈', 'mixiaoquan', '13811564479', '1', 'mixiaoquan@qq.com', '小圈', '2021-06-01', '8', '我是米小圈哈哈哈哈', '');

SET FOREIGN_KEY_CHECKS = 1;
