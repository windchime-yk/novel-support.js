# novel-support.js
Japanese:  
このパッケージは『小説家になろう』のルビ記法や、『カクヨム』の圏点記法を再現するために作られました。VanillaJSを使用しており、jQueryは必要ありません。  
今後、可能な限り他の小説投稿サイトの特殊記法を加える予定です。  
**現在、npmとCDNには公開していません。今しばらくお待ち下さい。**  
よりよいパッケージを目指しておりますので、なにか問題や改善点などありましたら、[Issues](https://github.com/windChimeYK/replaceRuby/issues)までお願いいたします。 

English:  
This package was made to easily reproduce the ruby notation and "Deep Furigana". Since we are using VanillaJS, jQuery is not necessary.  
**I have not released it to npm and CDN yet. Just a moment, please.**

## Usage
``` JavaScript
new replaceRuby('idName');
```
変換箇所の指定はidでおこなってください（classは対応していません）  
関数を複数置いてそれぞれにidを割り振ることで、複数指定も可能です。  
**npmとCDNでの実装を想定しているので、そちらで公開されていない現在はご利用できません。**
あらかじめご了承ください。

## Inspire
[各種小説投稿サイトのルビ記法をJavaScriptで実現する](https://qiita.com/8amjp/items/d7c46d9dee0da4d530ef)