const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"cart",
            filename: "remoteEntry.js",
            exposes: {
                "./cartShow": "./src/index"
            },
            shared: ['faker'],
            // shared: {
            //     faker: {
            //         singleton: true,
            //     }
            // }
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]

}