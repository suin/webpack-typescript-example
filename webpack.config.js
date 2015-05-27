module.exports = {
    entry: "./assets/javascripts/entry.js",
    output: {
        path: "./public/javascripts",
        filename: "bundle.js"
    },
    devtool: "source-map", // source-mapを生成する
    module: {
        preLoaders: [
            // TypeScriptで使ってない変数などを警告してくれる
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],
        loaders: [
            // requireでcssが読み込める
            {
                test: /\.css$/,
                loader: "css?minimize"
            },
            // jadeファイルを読み込んだ場合にjade-loaderを使用する。
            {
                test: /\.jade$/,
                loader: 'jade'
            },
            // requireでtsが読み込める
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader?emitRequireType=false&library=es6"
            }
        ]
    }
};
