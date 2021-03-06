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

 Date: 14/01/2021 15:07:37
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
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏类型 \r\n1-角色扮演\r\n2-即时战略\r\n3-第一人称射击\r\n4-第三人称射击\r\n5-战略游戏',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pchotlist
-- ----------------------------
INSERT INTO `pchotlist` VALUES (1, '10001', 'origin_202101071552231242.jpg', '5', '赛博朋克', '由CD PROJEKT RED 公司制作的角色扮演游戏', 'CD PROJEKT RED', '2020-12-30', '1');
INSERT INTO `pchotlist` VALUES (2, '10002', '0.jpg', '3', '反恐起源', 'cs射击竞赛', 'EAGame', '1999-02-11', '3');
INSERT INTO `pchotlist` VALUES (3, '10003', '8.jpg', '2', '测试数剧', '啥啥哈哈哈', '我的公司', '2005-01-01', '4');
INSERT INTO `pchotlist` VALUES (4, '10004', '2.jpg', '1', '就叫忍者吧', '随便写点啥Asdasd按说的地方搞搞撒大声地', '二狗子公司', '2021-12-12', '2');
INSERT INTO `pchotlist` VALUES (5, '10005', '7.jpg', '4', '幕府将军2', 'SAGA出品的第二代幕府全面战争，已日本战国为背景的题材战略游�