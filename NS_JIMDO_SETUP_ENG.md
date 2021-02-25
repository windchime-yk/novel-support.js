# Jimdo Implementation Guide
【[日本語](./ns-jimdo-setup.md) / English】

Refer to [Jimdoページにjsファイルを読み込ませたい！そんなときのあるあるメモ。](https://www.aki-nagashima.name/2014/09/17/jimdo%E3%81%A7-%E5%A4%96%E9%83%A8javascript%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BE%E3%81%9B%E3%81%9F%E3%81%84/) and then add the following HTML tag to the `edit header` section

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/novel-support.js/dist/css/novel-support.css">
<script defer src="https://cdn.jsdelivr.net/npm/novel-support.js/dist/js/novel-support.min.js"></script>
<script defer src="https://resources.whyk.dev/js/ns-jimdo-setup.js"></script>
```

Update one of the ruby tags used in your post with `|《》`.  
The entire process is then completed once this part of the text appears as Ruby.

You may find it easier to understand how to rewrite rubrics by reading the section "Converting text containing your own notation, as found on novel submission sites, to the following" in the "Features" section of the document below  
https://github.com/windchime-yk/novel-support.js/#readme

Translated with www.DeepL.com/Translator (free version)