const path = require("path");

module.exports = {
    entry: path.join(__dirname, "/src/app.js"),
    output: {
        path: path.join(__dirname, "/public/"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            include: path.join(__dirname, "/src/"),
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015"]
            }
        }],
    },
    watch: true,
    devtool: "eval-source-map"
};