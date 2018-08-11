/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができる関数式。
 * @param {string} elem
 * @param {object} option
 */
const novelSupport = (elem, option = {}) => {
  const optionContent = option.content || 'text';

  const txtBase = '<p class="ns_indent">$1</p>';
  const txtReg = /(.+?)[\n\r]/g;
  const rubyBase = '<ruby class="ns_ruby">$1<rt>$2</rt></ruby>';
  const rubyReg = /[|｜](.+?)《(.+?)》/g;
  const emphasisBase = '<strong class="ns_emphasis">$1</strong>';
  const emphasisReg = /《《(.+?)》》/g;

  let obj;
  let replaceBody;
  if (optionContent === 'text') {
    obj = document.getElementById(elem).textContent;
    replaceBody = obj.replace(txtReg, txtBase)
                     .replace(rubyReg, rubyBase)
                     .replace(emphasisReg, emphasisBase);
  }
  else if(optionContent === 'html') {
    obj = document.getElementById(elem).innerHTML;
    replaceBody = obj.replace(rubyReg, rubyBase)
                     .replace(emphasisReg, emphasisBase);
  }

  document.getElementById(elem).innerHTML = replaceBody;
}

export {novelSupport};