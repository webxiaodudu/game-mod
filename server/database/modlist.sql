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

 Date: 05/02/2021 01:22:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for modlist
-- ----------------------------
DROP TABLE IF EXISTS `modlist`;
CREATE TABLE `modlist`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏mod唯一标识',
  `modname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏名称',
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'mod封面',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT ' 游戏类型：\r\n\'1\':\'射击\',\r\n\'2\':\'动作冒险\',\r\n\'3\':\'角色扮演\',\r\n \'4\':\'即时战略\',\r\n \'5\':\'竞速\',\r\n \'6\':\'体育\',\r\n \'7\':\'模拟\',\r\n \'8\':\'策略\'',
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'mod游戏作者',
  `original` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏本体名字',
  `uptime` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '游戏发布时间',
  `download` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '下载地址',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '下载链接密码',
  `star` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '1' COMMENT 'mod的星星分数，1-5',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of modlist
-- ----------------------------
INSERT INTO `modlist` VALUES (47, '2021119', '南明悲歌全面战争完结版 (整合版)', '214119669.png', '8', '北来制作组', '中世纪2全面战争', '2020-12-05', 'https://pan.baidu.com/share/init?surl=KNU8WKLCICBTBzXK7xutcA', 'a6e5', '2');
INSERT INTO `modlist` VALUES (48, '2021219', '侠盗猎车5 福特蒙迪欧Estate旅行商务车MOD', '1505328413.png', '2', '阿瓦隆的迷雾', '侠盗飞车5', '2020-05-23', 'https://pan.baidu.com/share/init?surl=LDwxKDcc9ukJOR1VKbVN-Q', '9bjk', '3');
INSERT INTO `modlist` VALUES (49, '2021220', '风云南北朝v2.06全面战争 终极版（整合版）', '102332499.png', '8', '华胥刀笔吏', '中世纪2全面战争', '2020-08-28', 'https://pan.baidu.com/share/init?surl=Hh5e2R9vzrYo67yY1rq2DA', 'ztkg', '3');
INSERT INTO `modlist` VALUES (50, '2021221', '战地2MOD：维和行动2 v0.42', '20181205053106814.png', '1', 'Schuldi', '战地2', '2020-03-28', 'https://pan.baidu.com/s/1c25lJKO', '', '5');
INSERT INTO `modlist` VALUES (51, '2021222', '《生化危机3：重制版》吉尔魅力紫色蒂法服装MOD', '584_2020050663222682.png', '3', '未知', '生化危机3：重制版', '2021-01-21', 'https://pan.baidu.com/share/init?surl=LRuXsCxuoccMggMu6-afog', 'cqef', '2');
INSERT INTO `modlist` VALUES (52, '2021223', '《仙剑奇侠传7》光腿清凉MOD', '2016091911152020.jpg', '3', '未知', '仙剑奇侠传7', '2021-01-18', 'https://pan.baidu.com/share/init?surl=tVCCHV9Vvmf8S9wZ0QagBA', 'k8sy', '2');
INSERT INTO `modlist` VALUES (53, '2021224', '大唐天下：安史之乱v0.6全面战争 整合版', '110515369.png', '8', '北洋制作组', '中世纪2全面战争', '2020-09-01', 'https://pan.baidu.com/share/init?surl=J18cEI6MXWYiwP3x1QKa8A', 'g0q6', '4');

SET FOREIGN_KEY_CHECKS = 1;
