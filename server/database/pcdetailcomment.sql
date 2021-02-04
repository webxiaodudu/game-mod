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

 Date: 05/02/2021 01:23:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pcdetailcomment
-- ----------------------------
DROP TABLE IF EXISTS `pcdetailcomment`;
CREATE TABLE `pcdetailcomment`  (
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'userid',
  `proId` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '单机游戏对应的proId\r\n单机游戏对应的proId',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '评论内容',
  `commentId` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '评论id',
  `parentId` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '评论父级id',
  `commentDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '评论发起时间',
  `goodCount` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '获赞数量',
  `badCount` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '踩数量'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pcdetailcomment
-- ----------------------------
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '草拟吗真他妈累', '1612456779229', '0', '2021-2-5 0:39:39', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793679475', '10008', '为啥嘞啊？？？？', '1612456812856', '1612456779229', '2021-2-5 0:40:12', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '写代码太难了', '1612456837498', '1612456812856', '2021-2-5 0:40:37', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1609256754887', '10008', '雷你妹', '1612456877815', '1612456779229', '2021-2-5 0:41:17', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1609256754887', '10008', '这是什么游戏', '1612456897553', '0', '2021-2-5 0:41:37', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793679475', '10008', '我也想玩', '1612457114748', '0', '2021-2-5 0:45:14', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '这是一个自制的游戏哦', '1612457142670', '0', '2021-2-5 0:45:42', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793679475', '10008', '收费吗？', '1612457174709', '1612457142670', '2021-2-5 0:46:14', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '不收费', '1612457186025', '1612457174709', '2021-2-5 0:46:26', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '这是测试', '1612457249704', '0', '2021-2-5 0:47:29', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '再来一下', '1612457266468', '0', '2021-2-5 0:47:46', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '前端做的假分页', '1612457322265', '0', '2021-2-5 0:48:42', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793679475', '10008', '假就假点呗，反正也不知道改怎么设计那个数据库的表合理', '1612457375505', '1612457322265', '2021-2-5 0:49:35', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1612422688299', '10008', '我是米小圈', '1612457526972', '0', '2021-2-5 0:52:06', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '天天爆笑乐翻天', '1612457569749', '1612457526972', '2021-2-5 0:52:49', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1612422688299', '10008', '你好啊串串', '1612457791970', '1612457114748', '2021-2-5 0:56:31', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1612422688299', '10008', '你好老虎', '1612457823125', '1612456897553', '2021-2-5 0:57:03', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10008', '作业写了吗', '1612457939476', '1612457791970', '2021-2-5 0:58:59', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10010', '这样是我的游戏', '1612458726585', '0', '2021-2-5 1:12:06', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1612422688299', '10010', '牛逼', '1612458746212', '1612458726585', '2021-2-5 1:12:26', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1612422688299', '10009', '这又是个啥', '1612458812181', '0', '2021-2-5 1:13:32', '0', '0');
INSERT INTO `pcdetailcomment` VALUES ('1608793582979', '10009', '你说是啥就是啥', '1612458906640', '1612458812181', '2021-2-5 1:15:06', '0', '0');

SET FOREIGN_KEY_CHECKS = 1;
