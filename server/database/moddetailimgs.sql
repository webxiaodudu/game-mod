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

 Date: 05/02/2021 01:22:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for moddetailimgs
-- ----------------------------
DROP TABLE IF EXISTS `moddetailimgs`;
CREATE TABLE `moddetailimgs`  (
  `pid` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'mod游戏id',
  `imgname` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '焦点图名字'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of moddetailimgs
-- ----------------------------
INSERT INTO `moddetailimgs` VALUES ('2021119', '211400359.png');
INSERT INTO `moddetailimgs` VALUES ('2021219', '1505385113.png');
INSERT INTO `moddetailimgs` VALUES ('2021220', '102356789.png');
INSERT INTO `moddetailimgs` VALUES ('2021221', '20181205053106814.png');
INSERT INTO `moddetailimgs` VALUES ('2021222', '584_2020050663222682.png');
INSERT INTO `moddetailimgs` VALUES ('2021223', '584_20210118111508613.jpg');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113641769.png');
INSERT INTO `moddetailimgs` VALUES ('2021119', '211715759.png');
INSERT INTO `moddetailimgs` VALUES ('2021219', '1505395213.png');
INSERT INTO `moddetailimgs` VALUES ('2021220', '102402889.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113646499.png');
INSERT INTO `moddetailimgs` VALUES ('2021119', '211719509.png');
INSERT INTO `moddetailimgs` VALUES ('2021219', '1505404213.png');
INSERT INTO `moddetailimgs` VALUES ('2021220', '102440459.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113710269.png');
INSERT INTO `moddetailimgs` VALUES ('2021119', '211719509.png');
INSERT INTO `moddetailimgs` VALUES ('2021220', '102454999.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113715179.png');
INSERT INTO `moddetailimgs` VALUES ('2021119', '211736659.png');
INSERT INTO `moddetailimgs` VALUES ('2021220', '102503669.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113837789.png');
INSERT INTO `moddetailimgs` VALUES ('2021119', '211756329.png');
INSERT INTO `moddetailimgs` VALUES ('2021220', '102450919.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113840979.png');
INSERT INTO `moddetailimgs` VALUES ('2021119', '211807659.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113843289.png');
INSERT INTO `moddetailimgs` VALUES ('2021224', '113845409.png');

SET FOREIGN_KEY_CHECKS = 1;
