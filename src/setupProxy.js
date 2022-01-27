const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://10.0.0.100:9000', // 后端地址 如"http://10.0.0.100:9000"
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
