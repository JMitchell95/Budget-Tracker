const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: {
    app: "/public/assets/js/index.js",
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "app.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker",
      short_name: "Budget Tracker",
      description: "Simple Easy to use Budget Tracker",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("public/assets/images/icons/icon-192x192.png"),
        sizes: [92 ,512],
        destination: path.join("assets", "icons")
      }]
    })
  ],
};
module.exports = config;