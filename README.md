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
このパッケージは、小説投稿サイトにある独自記法をWebサイト上で気軽に使うためのパッケージです。  
最終目標は、このパッケージを使うだけで、小説投稿サイトからコピペした文章をそれっぽく表示させられるようにすることです。

## 特徴
- jQuery不要
- class属性で一括指定可能
- Sassでスタイル管理しているためCSSの変更が容易
- 小説投稿サイトにあるような独自記法を含んだテキストを下記のように変換
  - 字下げつき段落づけ：卵かけご飯 => `<p class="ns_indent">卵かけご飯</p>`
  - ルビ記法（|《》｜《》）：|卵《たまご》かけご|飯《はん》 => `<ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby>`
  - 圏点記法：《《卵かけご飯》》 => `<strong class="ns_emphasis">卵かけご飯</strong>`

## 使用方法
### yarn（またはnpm）の場合
#### インストール
```
yarn add novel-support.js
```
または
```
npm i novel-support.js
```

#### 動作準備
``` scss
@import "node_modules/novel-support.js/dist/css/_novel-support.scss"
```
```javascript
import novelSupport from "novel-support.js";

novelSupport('#id', {content: 'html'});
// または
novelSupport('.class', {content: 'html'});

// {content: 'html'}は省略可能（オプションで詳述）
```

### CDNの場合
unpkgとjsDelivrにて提供。

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
novelSupport('#id', {content: 'html'});
// または
novelSupport('.class', {content: 'html'});
```

### オプション
`novelSupport()`の第二引数には、`{content}`を指定できます。

変換対象がHTMLタグを含むなら`{content: 'html'}`と記述。何も記述しない場合は、デフォルト引数の`{content: 'text'}`が適用されます。  
`{content: 'text'}`の場合はすべての変換処理が行なわれ、`{content: 'html'}`の場合は字下げつき段落づけが行なわれません。

## 動作確認ブラウザ（npmのみ）
### macOS Mojave v10.14.6
- Google Chrome v78
- Mozilla Firefox Quantum v70
- Apple Safari v13
- Microsoft Edge Chromium Beta v78
- Opera v64

## テスト
```
yarn
yarn test
```
または
```
npm i
npm test
```

## 過去の変更点
[CHANGELOG.md](./CHANGELOG.md)

## ライセンス
[MIT](./LICENSE)

## リンク
* [CDNテストページ](https://windchime-yk.github.io/novel-support.js/)
* [バグ報告](https://github.com/windchime-yk/novel-support.js/issues)