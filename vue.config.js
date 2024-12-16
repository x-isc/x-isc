module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/x-isc/'  // 这里改成 x-isc，因为这是您的仓库名
    : '/'
};
