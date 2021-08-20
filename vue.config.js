const ENV = process.env.NODE_ENV;

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: ENV === "development" ? "" : "/token/", // 关键代码   token就是仓库名
}
