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

 Date: 05/02/2021 01:22:23
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

SET FOREIGN_KEY_CHECKS = 1;
