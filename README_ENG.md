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
  - Ruby notation `(| 《》 | 《》): |egg<rt>egg</rt></ruby>, rice</rt></ruby> => <ruby class="ns_ruby">egg<rt>egg<rt>egg</rt></ruby>, rice<rt>egg</rt></ruby>`.
  - Circle point notation: `《《egg-over-egg rice》 => <strong class="ns_emphasis">egg-over-egg rice</strong>`


## Usage.
### yarn (or npm)
#### Installation

```bash
yarn add novel-support.js
```

or

```bash
npm i novel-support.js
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

## Verified Browser (npm only)
### macOS Mojave v10.14.6
- Google Chrome v78
- Mozilla Firefox Quantum v70
- Apple Safari v13
- Microsoft Edge Chromium Beta v78
- Opera v64

### Windows 10 Home v1903
- Google Chrome v78
- Mozilla Firefox Quantum v70
- Microsoft Edge v44 (*1)
- Microsoft Internet Explorer v11 (*1)


1: Only ruby notation is supported.

## Test.

```bash
yarn
yarn test
```

or

```bash
npm i
npm test
```

## Past Changes.
[CHANGELOG.md](. /CHANGELOG.md)

## License.
[MIT](. /LICENSE)

## Link.
* [CDN Test Page](https://windchime-yk.github.io/novel-support.js/)
* [bug report](https://github.com/windchime-yk/novel-support.js/issues)

Translated with www.DeepL.com/Translator (free version)