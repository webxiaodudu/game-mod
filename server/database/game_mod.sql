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

 Date: 12/01/2021 22:01:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bannerlist
-- ----------------------------
DROP TABLE IF EXISTS `bannerlist`;
CREATE TABLE `bannerlist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `img` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sub_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bannerlist
-- ----------------------------
INSERT INTO `bannerlist` VALUES (1, '10001', 'bg-epic-battles.jpg', '罗马全战', '罗马全战的小标题', '这是一个测试的数据', '');
INSERT INTO `bannerlist` VALUES (2, '10002', '0159.jpg', '王牌军抗美援朝', '雄赳赳气昂昂，跨过鸭绿江！', '今日开始出售', NULL);
INSERT INTO `bannerlist` VALUES (3, '10003', '0082.jpg', '大秦赋', '开启统一六国的征途！', '即将公测', NULL);
INSERT INTO `bannerlist` VALUES (4, '1003', '0149.jpg', '大明抗倭', '回归大明，扫清倭寇！', '独立的将军模型，可diy定制', '');
INSERT INTO `bannerlist` VALUES (5, '10004', '0199.jpg', '水浒英雄传', '大河向东流哇，你有我有他也有啊', '自制水浒英雄', '');

-- ----------------------------
-- Table structure for pc_hot_list
-- ----------------------------
DROP TABLE IF EXISTS `pc_hot_list`;
CREATE TABLE `pc_hot_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键\r\n',
  `proId` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏id',
  `cover` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏封面图片',
  `star` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '这个游戏星星数量',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏名',
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏简短介绍',
  `company` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '出品公司名',
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '上市时间',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏类型 \r\n1-角色扮演\r\n2-即时战略\r\n3-第一人称射击\r\n4-第三人称射击\r\n5-战略游戏',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pc_hot_list
-- ----------------------------
INSERT INTO `pc_hot_list` VALUES (1, '10001', 'origin_202101071552231242.jpg', '5', '赛博朋克', '由CD PROJEKT RED 公司制作的角色扮演游戏', 'CD PROJEKT RED', '2020-12-30', '1');
INSERT INTO `pc_hot_list` VALUES (2, '10002', '0.jpg', '3', '反恐起源', 'cs射击竞赛', 'EAGame', '1999-02-11', '3');
INSERT INTO `pc_hot_list` VALUES (3, '10003', '8.jpg', '2', '测试数剧', '啥啥哈哈哈', '我的公司', '2005-01-01', '4');
INSERT INTO `pc_hot_list` VALUES (4, '10004', '2.jpg', '1', '就叫忍者吧', '随便写点啥Asdasd按说的地方搞搞撒大声地', '二狗子公司', '2021-12-12', '2');
INSERT INTO `pc_hot_list` VALUES (5, '10005', '7.jpg', '4', '幕府将军2', 'SAGA出品的第二代幕府全面战争，已日本战国为背景的题材战略游戏', 'SAGA', '2005-02-11', '2');
INSERT INTO `pc_hot_list` VALUES (6, '10006', '4.jpg', '3', '蝙蝠侠', '嚓冠状病毒就你丫闹得！！', '冠状病毒公司嚓', '2020-01-22', '3');
INSERT INTO `pc_hot_list` VALUES (7, '10007', '5.jpg', '5', '指环王吧', '破公司出品的一个什么玩意儿', '破公司', '1998-09-06', '3');
INSERT INTO `pc_hot_list` VALUES (8, '10008', '3.jpg', '4', '忘记这个游戏是啥了', '好像是个打怪的游戏角色扮演的', '小日本的一个游戏公司', '1996-08-12', '3');
INSERT INTO `pc_hot_list` VALUES (9, '10009', '1.jpg', '3', '孤岛惊魂', '一个第一人称射击的游戏，但我没玩过', '豆豆游戏公司', '2000-12-03', '2');
INSERT INTO `pc_hot_list` VALUES (10, '10010', '6.jpg', '5', '图片小哥挺酷', '随便网上找的游戏图片', 'MY_NIUBI', '2010-05-01', '1');

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
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '1608793582979', 'webxiaodudu', 'zlw198526', '15321573907', '1', 'web_hello@sina.com', 'web小肚肚', '2020-12-24', '20', '我是作者');
INSERT INTO `users` VALUES (2, '1608793679475', '豆豆', '123456', '15321573102', '2', 'doudou@qq.com', '串串', '2020-12-01', '1', '我是一条dog');
INSERT INTO `users` VALUES (3, '1608794651762', '张三', '20201224', '15321553102', '2', '1243@qq.com', '测试', '2020-12-23', '25', NULL);
INSERT INTO `users` VALUES (4, '1608794755434', 'hello', 'hello123', '15321573945', '1', 'web_hello2@sina.com', 'nick', '2020-12-08', '41', NULL);
INSERT INTO `users` VALUES (5, '1609256754887', 'enen', '123', '13146055798', '2', 'as2dasd@qq.com', 'laohu', '2020-12-29', '88', '我是母夜叉');
INSERT INTO `users` VALUES (6, '1609779947940', '李小龙', 'lixiaolong', '13146055790', '1', 'ttyyad@qq.com', 'Kongfu小子', '2021-01-05', '23', '我是很牛逼的');
INSERT INTO `users` VALUES (7, '1609811910600', '郑大审', '1866', '15321576901', '2', 'zhengdashen@qq.com', '大老虎', '2021-01-05', '80', '我是一只大老虎');
INSERT INTO `users` VALUES (8, '1609812049326', '秀娜', '356789', '15321573903', '2', 'hhhsaa@qq.com', '小马宝莉', '2021-01-05', '6', '我啥都不想说');
INSERT INTO `users` VALUES (9, '1610280836318', '刘江涛', '5555', '13146055791', '1', 'hhhsaaa@qq.com', '小涛涛', '2021-01-10', '21', 'asdas');

SET FOREIGN_KEY_CHECKS = 1;
