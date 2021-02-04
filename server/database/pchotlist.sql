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

 Date: 05/02/2021 01:23:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pchotlist
-- ----------------------------
DROP TABLE IF EXISTS `pchotlist`;
CREATE TABLE `pchotlist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键\r\n',
  `proId` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏id',
  `cover` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏封面图片',
  `star` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '这个游戏星星数量',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏名',
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏简短介绍',
  `company` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '出品公司名',
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '上市时间',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏类型 \r\n1-射击\r\n2-动作冒险\r\n3-角色扮演\r\n4-即时战略\r\n5-竞速\r\n6-体育\r\n7-模拟\r\n8-策略',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pchotlist
-- ----------------------------
INSERT INTO `pchotlist` VALUES (1, '10001', 'origin_202101071552231242.jpg', '5', '赛博朋克', '由CD PROJEKT RED 公司制作的角色扮演游戏', 'CD PROJEKT RED', '2020-12-30', '1');
INSERT INTO `pchotlist` VALUES (2, '10002', '0.jpg', '3', '反恐起源', 'cs射击竞赛', 'EAGame', '1999-02-11', '3');
INSERT INTO `pchotlist` VALUES (3, '10003', '8.jpg', '2', '测试数剧', '啥啥哈哈哈', '我的公司', '2005-01-01', '4');
INSERT INTO `pchotlist` VALUES (4, '10004', '2.jpg', '1', '就叫忍者吧', '随便写点啥Asdasd按说的地方搞搞撒大声地', '二狗子公司', '2021-12-12', '2');
INSERT INTO `pchotlist` VALUES (5, '10005', '7.jpg', '4', '幕府将军2', 'SAGA出品的第二代幕府全面战争，已日本战国为背景的题材战略游戏', 'SAGA', '2005-02-11', '8');
INSERT INTO `pchotlist` VALUES (6, '10006', '4.jpg', '3', '蝙蝠侠', '嚓冠状病毒就你丫闹得！！', '冠状病毒公司嚓', '2020-01-22', '3');
INSERT INTO `pchotlist` VALUES (7, '10007', '5.jpg', '5', '指环王吧', '破公司出品的一个什么玩意儿', '破公司', '1998-09-06', '3');
INSERT INTO `pchotlist` VALUES (8, '10008', '3.jpg', '4', '忘记这个游戏是啥了', '好像是个打怪的游戏角色扮演的', '小日本的一个游戏公司', '1996-08-12', '3');
INSERT INTO `pchotlist` VALUES (9, '10009', '1.jpg', '3', '孤岛惊魂', '一个第一人称射击的游戏，但我没玩过', '豆豆游戏公司', '2000-12-03', '2');
INSERT INTO `pchotlist` VALUES (10, '10010', '6.jpg', '5', '图片小哥挺酷', '随便网上找的游戏图片', 'MY_NIUBI', '2010-05-01', '1');

SET FOREIGN_KEY_CHECKS = 1;
