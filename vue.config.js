module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  outputDir: "docs",
  publicPath: "/modcom2019-homepage",
};
