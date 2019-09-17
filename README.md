# novel-support.js
<!-- badge area -->
[![npm version](https://img.shields.io/npm/v/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![npm license](https://img.shields.io/npm/l/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![npm downloads - month](https://img.shields.io/npm/dm/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![npm downloads - total](https://img.shields.io/npm/dt/novel-support.js.svg?style=flat-square)](https://www.npmjs.com/package/novel-support.js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/novel-support.js/badge)](https://www.jsdelivr.com/package/npm/novel-support.js)
[![Maintainability](https://api.codeclimate.com/v1/badges/2f3d7a337ed46acbc2eb/maintainability)](https://codeclimate.com/github/windchime-yk/novel-support.js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2f3d7a337ed46acbc2eb/test_coverage)](https://codeclimate.com/github/windchime-yk/novel-support.js/test_coverage)
<!-- /badge area -->
## 概要
このパッケージは、Webサイト上で小説投稿サイトの独自記法を使うために開発されました。  
最終目標は、このパッケージを使うだけで、小説投稿サイトからコピペした文章をそれっぽく表示させられるようにすることです。

## 特徴
* jQuery不要
* class属性で一括指定可能
* Sassでスタイル管理しているためCSSの変更が容易
* 小説投稿サイトにあるような独自記法をHTMLに変換
  * 字下げつき段落づけ：卵かけご飯 => `<p class="ns_indent">卵かけご飯</p>`
  * ルビ記法（|《》｜《》）：|卵《たまご》かけご|飯《はん》 => `<ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby>`
  * 圏点記法：《《卵かけご飯》》 => `<strong class="ns_emphasis">卵かけご飯</strong>`

## 使用方法
### npmの場合
#### インストール
``` powershell
npm i novel-support.js
```

#### 動作準備
``` scss
@import "node_modules/novel-support.js/dist/css/_novel-support.scss"
```
```javascript
import novelSupport from "novel-support.js";

novelSupport('idName or className', {content: 'html'}); // contentがtextの場合は省略可能（詳しくは後述）
```

### CDNの場合
unpkgとjsDelivrにて提供。どちらを使っても問題ない。

#### CDN設置
``` html
<link rel="stylesheet" href="https://unpkg.com/novel-support.js/dist/css/novel-support.css">

<script src="https://unpkg.com/novel-support.js/dist/js/novel-support.js"></script>
```
または
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/novel-support.js/dist/css/novel-support.css">

<script src="https://cdn.jsdelivr.net/npm/novel-support.js/dist/js/novel-support.js"></script>
```

#### 動作準備
```javascript
novelSupport('idName or className', {content: 'html'});
```

### オプション
`novelSupport()`の第二引数ではオプションを指定する。デフォルト引数で問題ない場合は、`idName`か`className`だけで問題ない。  
現在、設定できるオプションは以下。

#### content
`novelSupport()`の第一引数で指定されたタグ内に入っているのが単なる文字列の場合は`text`、タグを含むHTMLなら`html`と記述する。  
`text`と記述した場合はすべての変換処理が行なわれるが、`html`の場合は字下げつき段落づけが行なわれない。  
デフォルト引数：`text`

## 過去の変更点
[CHANGELOG.md](./CHANGELOG.md)

## ライセンス
[MIT](./LICENSE)

## リンク
* [CDNテストページ](https://windchime-yk.github.io/novel-support.js/)
* [バグ報告](https://github.com/windchime-yk/novel-support.js/issues)