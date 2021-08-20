const ENV = process.env.NODE_ENV;

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: ENV === "development" ? "" : "/home_page/", // 关键代码
}
