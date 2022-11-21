const common = require("./webpack.common.config");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      // 현재 webpack.dev.config.js가 있는 디렉토리를 기준으로 정적 파일을 제공한다.
      directory: path.join(__dirname, ".."),
    },
    devMiddleware: {
      // Static 에서 폴더 path를 정의했으니 거기에 따라가는것인가?
      index: "index.html",
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    liveReload: false, // --hot 옵션이 더 좋다 (HMR)
  },
});
