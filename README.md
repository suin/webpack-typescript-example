# WebpackとTypeScriptの組み合わせサンプル


## 特徴

* jQueryがバンドルされている
* minify
* TypeScriptのincremental compile
* source map
* Makefile 💚Webpack: GulpやGruntを使わずにシンプルなタスク管理
* 本番用スクリプトのビルド時に`console.log`除去
* tslint: TypeScriptで使ってない変数や非推奨の書き方を警告してくれる
* css-loader: CSSをJSで読み込める
* jade-loader: テンプレートエンジンにjadeが使える

## サンプルの試し方

このリポジトリをcloneしたら、次のコマンドで必要なnode modulesとtsdをインストールします:

```
make bootstrap
```

次のコマンドを実行すると開発モードを体験できます。
開発モードでは、ソースコードを書き換えると自動でコンパイルされ、`bundle.js`が生成されます。

```
open public/index.html
make watch
```

ビルドモードは次のコマンドです。
このモードは、minifyしたbundle.jsを生成します。

```
make build
```
