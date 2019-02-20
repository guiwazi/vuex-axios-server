'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 注册
  router.post('/reg', controller.user.reg);
  // 登陆
  router.post('/login', controller.user.login);
  // 获取用户信息
  router.get('/userInfo/:id', controller.user.userInfo);
  // 修改用户信息
  router.put('/editUserInfo', controller.user.editUserInfo);
  // 增加物流信息
  router.post('/addInfo', controller.table.addInfo);
  // 查询物流信息列表
  router.post('/getTableList', controller.table.getTableList);
  // 修改物流信息
  router.put('/modifyInfo', controller.table.modifyInfo);
  // 删除物流信息searchInfo
  router.delete('/deleteInfo/:id', controller.table.deleteInfo);
  // 条件查询
  router.post('/searchInfo', controller.table.searchInfo);
};
	