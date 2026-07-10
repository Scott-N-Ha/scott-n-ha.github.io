const path = require("path");

module.exports = (_env, argv = {}) => {
  const isProd = argv.mode === "production";

  return {
    context: __dirname,
    entry: "./lib/index.js",
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", "*"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            query: {
              presets: ["@babel/env"],
            },
          },
        },
      ],
    },
    devtool: isProd ? false : "source-map",
    optimization: {
      minimize: isProd,
    },
  };
};
