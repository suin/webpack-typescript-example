# WebpackとTypeScriptの組み合わせサンプル

## サンプルの試し方

このリポジトリをcloneしたら、次のコマンドで必要なnode modulesとtsdをインストールします:

```
make bootstrap
```

次のコマンドを実行すると開発モードを体験できます。
開発モードでは、ソースコードを書き換えると自動でコンパイルされ、`bundle.js`が生成されます。

```
make watch
```

ビルドモードは次のコマンドです。
このモードは、minifyしたbundle.jsを生成します。

```
make build
```
