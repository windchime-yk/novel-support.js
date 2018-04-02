/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができる関数式。
 * @param {string} elem
 * @param {object} option
 */
const novelSupport = (elem, option = {}) => {
  // デフォルト引数（一部を上書きすると他がundefinedになるので、条件演算子で別途定義）
  const optionContent = option.content === undefined ? 'text' : option.content;
  const optionMark = option.mark === undefined ? 'dot' : option.mark;
  const optionRewrite = option.rewrite === undefined ? false : option.rewrite;
  console.log(optionContent, optionMark, optionRewrite);

  // 各変数群
  const txtBase = '<p class="ns_indent">$1</p>';
  const rubyBase = '<ruby>$1<rt>$2</rt></ruby>';
  // const rubyBase = '<ruby>$1<rt>$2</rt></ruby>';
  // unicodeで書き直す（参考：https://www.benricho.org/symbol/kigou_01.html, https://www.compart.com/en/unicode/U+FE45）
  const emphasisList = {
    'dot': '・', // ・
    'sesame': '﹅', // ﹅
  };
  const emphasisDefine = emphasisList[optionMark];
  const emphasisBase = '<strong class="ns_emphasis">$1</strong>';
  // const emphasisBase = `<ruby>$1<rt>${emphasisDefine}</rt></ruby>`;
  console.log(`現在のnovel-support.jsのコンテンツ変換は${optionContent}です`);
  
  // すべての変換処理
  let obj;
  let replaceBody;
  if (optionContent === 'text') {
    obj = document.getElementById(elem).textContent;
    replaceBody = obj.replace(/(.+?)[\n\r]/g, txtBase) //改行検知pタグ挿入
                     .replace(/[\|｜](.+?)《(.+?)》/g, rubyBase) //ルビ変換
                     .replace(/《《(.+?)》》/g, emphasisBase); //圏点変換
  }
  else if(optionContent === 'html') {
    obj = document.getElementById(elem).innerHTML;
    replaceBody = obj.replace(/[\|｜](.+?)《(.+?)》/g, rubyBase) //ルビ変換
                     .replace(/《《(.+?)》》/g, emphasisBase); //圏点変換
  }

  // 処理した内容に書き換え
  document.getElementById(elem).innerHTML = replaceBody;
}

novelSupport('replace', {'content': 'html'});
novelSupport('ruby');