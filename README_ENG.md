# novel-support.js
<!-- badge area -->
[![npm version](https://img.shields.io/npm/v/novel-support.js.svg)](https://www.npmjs.com/package/novel-support.js)
[![npm license](https://img.shields.io/npm/l/novel-support.js.svg)](https://www.npmjs.com/package/novel-support.js)
[![npm downloads - month](https://img.shields.io/npm/dm/novel-support.js.svg)](https://www.npmjs.com/package/novel-support.js)
[![npm downloads - total](https://img.shields.io/npm/dt/novel-support.js.svg)](https://www.npmjs.com/package/novel-support.js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/novel-support.js/badge)](https://www.jsdelivr.com/package/npm/novel-support.js)
[![Test Coverage](https://codecov.io/gh/windchime-yk/novel-support.js/graph/badge.svg?token=W3COE9GZ4L)](https://codecov.io/gh/windchime-yk/novel-support.js)
<!-- /badge area -->

【[日本語](./README.md) / English】

## Overview.
This package is designed to make it easy to use the proprietary notation found on novel submission sites on a website.  
The ultimate goal is to be able to make text copied and pasted from a novel submission site appear as such, just by using this package.

## Features.
- jQuery not required.
- Can be specified en masse by class attribute.
- Sass style management makes changes in CSS very easy.
- Convert text containing your own notation, as found on novel submission sites, into the following
  - Paragraphs with indentations: rice with egg on top => `<p class="ns_indent">Rice with egg on top</p>`
  - Ruby notation (| 《》 | 《》): |卵かけご飯《Rice with egg on top》 => `<ruby class="ns_ruby">卵かけご飯<rt>Rice with egg on top</rt></ruby>`
  - Circle point notation: `《《Rice with egg on top》 => <strong class="ns_emphasis">Rice with egg on top</strong>`


## Usage.
### Package manager
#### Installation

Please replace it with your preferred package manager.

```bash
pnpm i novel-support.js
```


#### Ready to operate

```scss
@import "node_modules/novel-support.js/dist/css/_novel-support.scss"
```

```javascript
import novelSupport from "novel-support.js";

novelSupport('#id', {content: 'html'});
// or
novelSupport('.class', {content: 'html'});

// {content: 'html'} is optional and can be omitted (detailed in the options)
```

### CDN.
Provided by unpkg and jsDelivr.

#### CDN installation

```html
<link rel="stylesheet" href="https://unpkg.com/novel-support.js/dist/css/novel-support.css">

<script src="https://unpkg.com/novel-support.js/dist/js/novel-support.js"></script>
```

or

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/novel-support.js/dist/css/novel-support.css">

<script src="https://cdn.jsdelivr.net/npm/novel-support.js/dist/js/novel-support.js"></script>
```

#### Ready to operate

```javascript
novelSupport('#id', {content: 'html'});
// or
novelSupport('.class', {content: 'html'});
```

### Options.
You can specify `{content}` as the second argument of `novelSupport()`.

If the target contains HTML tags, the second argument is written as `{content: 'html'}`. If you do not write anything, the default argument, `{content: 'text'}`, is applied.  
If `{content: 'text'}`, all conversions are done; if `{content: 'html'}`, no paragraphing is done with indentation.

## Test.

```bash
pnpm test
```

## Past Changes.
[CHANGELOG.md](./CHANGELOG.md)

## License.
[MIT](./LICENSE)

## Link.
* [CDN Test Page](https://windchime-yk.github.io/novel-support.js/)
* [bug report](https://github.com/windchime-yk/novel-support.js/issues)

Translated with www.DeepL.com/Translator (free version)