/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができる関数式。
 * @param {string} elem
 * @param {object} option
 */
const novelSupport = (elem, option = {}) => {
  const optionContent = option.content === undefined ? 'text' : option.content;
  const optionRewrite = option.rewrite === undefined ? false : option.rewrite;

  const txtBase = '<p class="ns_indent">$1</p>';
  const rubyBase = '<ruby class="ns_ruby">$1<rt>$2</rt></ruby>';
  const emphasisBase = '<strong class="ns_emphasis">$1</strong>';

  let obj;
  let replaceBody;
  if (optionContent === 'text') {
    obj = document.getElementById(elem).textContent;
    replaceBody = obj.replace(/(.+?)[\n\r]/g, txtBase)
                     .replace(/[\|｜](.+?)《(.+?)》/g, rubyBase)
                     .replace(/《《(.+?)》》/g, emphasisBase);
  }
  else if(optionContent === 'html') {
    obj = document.getElementById(elem).innerHTML;
    replaceBody = obj.replace(/[\|｜](.+?)《(.+?)》/g, rubyBase)
                     .replace(/《《(.+?)》》/g, emphasisBase);
  }

  document.getElementById(elem).innerHTML = replaceBody;
}

export {novelSupport};