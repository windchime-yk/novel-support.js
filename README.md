# novel-support.js
このパッケージは、小説投稿サイトで一般に使われているルビ記法や圏点記法を再現するために作られました。VanillaJSを使用しており、jQueryは必要ありません。  
今後、Webサイトで小説を執筆するにあたって便利になりそうな短縮記法を追加していく予定です。  
**現在、npmとCDNには公開していません。今しばらくお待ち下さい。**  
よりよいパッケージを目指しておりますので、なにか問題や改善点などありましたら、[Issues](https://github.com/windChimeYK/novel-support.js/issues)までお願いいたします。

現在検討している変換は以下になります。
* [[卵かけご飯]] => `<p class="ns_indent">卵かけご飯</p>`
* |卵《たまご》かけご|飯《はん》 => `<ruby>卵<rt>たまご</rt></ruby>かけご<ruby>飯<rt>はん</rt></ruby>`
* 《《卵かけご飯》》 => `<strong class="ns_emphasis">卵かけご飯</strong>`  
それぞれ、上からインデントつき段落づけ（インデントあるなし設定可能）、ルビ記法（"|《》"のみ）、圏点記法（圏点選択可能）となっています。

## Usage
``` JavaScript
new novelSupport('idName');
```
変換箇所の指定はidでおこなってください（classは対応していません）  
`new novelSupport('idName')`を複数置いてそれぞれにidを割り振ることで、複数指定も可能です。  
**npmとCDNでの実装を想定しているので、そちらで公開されていない現在はご利用できません。**
あらかじめご了承ください。

## Inspire
[各種小説投稿サイトのルビ記法をJavaScriptで実現する](https://qiita.com/8amjp/items/d7c46d9dee0da4d530ef)