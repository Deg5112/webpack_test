let mix = require('laravel-mix');

mix.js("resources/assets/js/app.js", "public/js")
    .options({
      postCss: [
        require("autoprefixer")({
          browsers: ["last 40 versions"],
          grid: true, // prefixes grid
          flexbox: true, // prefixes flexbox
          remove: true // remove outdated prefixes
       })
      ]
  })
  .webpackConfig({
    devtool: "inline-source-map",
    resolve: {
      alias: {
        "JsSrc"    : path.resolve(__dirname, "resources/assets/js"),
        "VueSrc"   : path.resolve(__dirname, "resources/assets/js/vue"),
        "apiRoutes": path.resolve(__dirname, "resources/assets/js/backend_api/routes.js"),
      }
    }
  })
  .sourceMaps()
  .disableNotifications();

if (mix.inProduction()) {
  mix.version();
}

if (process.env.BROWSER_SYNC === 'true') {
  mix.browserSync({
    proxy: {target: "referrals-dev.tomferry.com"},
    host: "referrals-dev.tomferry.com",
    open: "external",
    port: 3001,
    logLevel: "info",
    https: {
      key: "ssl/dev.tomferry.com.key",
      cert: "ssl/dev.tomferry.com.crt"
    }
  });
}

