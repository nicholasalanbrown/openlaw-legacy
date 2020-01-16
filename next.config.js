const webpack = require("webpack");
const path = require("path");
require("dotenv").config();

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    /**
     * Returns environment variables as an object
     */
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    /** Allows you to create global constants which can be configured
     * at compile time, which in our case is our environment variables
     */
    config.plugins.push(new webpack.DefinePlugin(env));

    /** Add aliases */
    config.resolve.alias.layouts = path.join(__dirname, "layouts");
    config.resolve.alias.components = path.join(__dirname, "components");
    config.resolve.alias.queries = path.join(__dirname, "queries");
    config.resolve.alias.mutations = path.join(__dirname, "mutations");

    return config;
  }
};
