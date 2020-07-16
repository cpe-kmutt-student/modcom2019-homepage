module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  outputDir: "docs",
  publicPath: "/ModCom2019-Homepage",
};
