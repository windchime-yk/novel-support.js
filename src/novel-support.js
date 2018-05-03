/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができる関数式。
 * @param {string} elem
 * @param {object} option
 */
const novelSupport = (elem, option = {}) => {
  // デフォルト引数（一部を上書きすると他がundefinedになるので、条件演算子で別途定義）
  const optionContent = option.content === undefined ? 'text' : option.content;
  const optionRewrite = option.rewrite === undefined ? false : option.rewrite;

  // 各変数群
  const txtBase = '<p class="ns_indent">$1</p>';
  const rubyBase = '<ruby class="ns_ruby">$1<rt>$2</rt></ruby>';
  const emphasisBase = '<strong class="ns_emphasis">$1</strong>';
  
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

export {novelSupport};