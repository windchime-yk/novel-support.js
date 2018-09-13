# novel-support.js
<!-- badge area -->
[![npm version](https://img.shields.io/npm/v/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![npm license](https://img.shields.io/npm/l/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![npm downloads - month](https://img.shields.io/npm/dm/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![npm downloads - total](https://img.shields.io/npm/dt/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/novel-support.js/badge)](https://www.jsdelivr.com/package/npm/novel-support.js)
<!-- /badge area -->
## 概要
このパッケージは、小説投稿サイトで一般に使われているルビ記法や圏点記法をWebサイト上でも使用するために作られました。VanillaJSを使用しており、jQueryは必要ありません。  
最終目標は、`novelSupport()`で指定したエリアに小説投稿サイトで書いた文章をコピペするだけで、それっぽく表示されることです。

利用可能な記法は以下。
* 字下げつき段落づけ：卵かけご飯\n => `<p class="ns_indent">卵かけご飯</p>`
* ルビ記法（"|《》"のみ）：|卵《たまご》かけご|飯《はん》 => `<ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby>`
* 圏点記法：《《卵かけご飯》》 => `<strong class="ns_emphasis">卵かけご飯</strong>`

今後の実装で変更になる可能性がありますが、字下げのあるなしや圏点の種類についてはCSSで定義しています。使用する際は**インストール方法**を参考にCSSないしSassファイルを指定してください。  
現状、LESSやStylusに対応する予定はありません。

## インストール方法
### npm
``` powershell
npm i novel-support.js
```
### CDN
``` html
<link rel="stylesheet" href="https://unpkg.com/novel-support.js/dist/css/novel-support.css">

<script src="https://unpkg.com/novel-support.js/dist/js/novel-support.js"></script>
```
または
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/novel-support.js/dist/css/novel-support.css">

<script src="https://cdn.jsdelivr.net/npm/novel-support.js/dist/js/novel-support.js"></script>
```
## 使用方法
### npm
``` scss
@import "node_modules/novel-support.js/dist/css/_novel-support.scss"
```
```javascript
import novelSupport from "novel-support.js";

novelSupport('idName', {content: 'text'});
```

### CDN
```javascript
novelSupport('idName', {content: 'text'});
```
用例のidNameは任意、第二引数はデフォルト値  
変換箇所の指定はidで行ないます（classは対応していません）  
`novelSupport('idName')`を複数置いてそれぞれにidを割り振ることで、複数指定も可能です。  
optionに関しては下記に。

### オプション
関数式の第二引数にはObjectが入っています。  
現在、設定されているオプションは以下になります。
デフォルト引数で問題ない場合は、`idName`だけで問題ないです。

#### content
パッケージの関数が指定したタグ内に入っているのが単なる文字列の場合は`text`、タグを含むHTMLなら`html`と記述します。`text`と記述した場合は全ての変換処理が行なわれますが、`html`の場合は字下げつき段落づけは行なわれません。  
デフォルト引数：`text`

## 過去の変更点
* v0.0.3
* v0.0.4
* v1.0.0
  * メンテナンス環境を整備
* v1.0.1
  * README.mdのURLのユーザー名を変更
* v1.1.0
  * TypeScriptで再記述
  * パッケージのexportの方法を変更
  * MITライセンスに変更
  * git tagの追加

## リンク
* [CDNテストページ](https://windchime-yk.github.io/novel-support.js/)
* [バグ報告](https://github.com/windchime-yk/novel-support.js/issues)