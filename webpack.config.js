module.exports = {  
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ],
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],
    },
};