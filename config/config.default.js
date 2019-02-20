'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547003614386_4630';

  // add your config here
  config.middleware = [];

  // db配置
  config.mongoose = { // mongodb配置
    client: {
      url: 'mongodb://127.0.0.1:27017/aoteman',
      options: {}
    }
  }
  //跨域配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8080'], //配置白名单
  };

  config.cors = {
    origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    /**
     * 客户端请求如果需要保存本地凭条（cookie），则会带有特别的请求字段 withCredentials
     * 服务端需要同样开启这个字段才能响应这些请求
     * 本质上应该是在响应头里增加了这个字段: Access-Control-Allow-Credentials: true
     * 这里应该是全局设置，单独在响应头里加这个字段好像不行。应该是这个框架问题
     */
    credentials: true
  }
  return config;
};
