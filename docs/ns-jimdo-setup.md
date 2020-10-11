# Jimdoでの導入手引書
【日本語 / [English](./ns-jimdo-setup_ENG.md)】

[Jimdoページにjsファイルを読み込ませたい！そんなときのあるあるメモ。](https://www.aki-nagashima.name/2014/09/17/jimdo%E3%81%A7-%E5%A4%96%E9%83%A8javascript%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BE%E3%81%9B%E3%81%9F%E3%81%84/)を参考にしながら、`headerを編集`に下記のHTMLタグを追加してください

``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/novel-support.js/dist/css/novel-support.css">
<script defer src="https://cdn.jsdelivr.net/npm/novel-support.js/dist/js/novel-support.min.js"></script>
<script defer src="https://resources.whyk.dev/js/ns-jimdo-setup.js"></script>
```

そのあと、投稿内容で使われているルビタグの一つを|《》に書き換えて更新をしてください  
その部分がルビとして表示されれば導入は完了です

ルビの書き換え方は、下記ドキュメントの『特徴』にある『小説投稿サイトにあるような独自記法を含んだテキストを下記のように変換』の項を読んでもらうとわかりやすいかもしれません  
https://github.com/windchime-yk/novel-support.js/#readme