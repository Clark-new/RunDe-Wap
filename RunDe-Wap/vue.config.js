module.exports = {
  lintOnSave: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "runde/"
      : "/",
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        images: "@/assets/images",
        styles: "@/assets/styles",
        common: "@/common",
        components: "@/common/components",
        views: "@/views"
      }
    }
  }
};
