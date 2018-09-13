/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができるパッケージ
 * @param {string} elem 代替記号の入った文章を入れるタグ
 * @param {object} option パッケージに指定するオプション（[詳細はREADME参照]{@link https://github.com/windchime-yk/novel-support.js#readme}）
 */
const novelSupport = (elem: string, option: object = {}) => {
  const optionContent: string = option.content || 'text';

  const txtBase: string = '<p class="ns_indent">$1</p>';
  const txtReg: RegExp = /(.+?)[\n\r]/g;
  const rubyBase: string = '<ruby class="ns_ruby">$1<rt>$2</rt></ruby>';
  const rubyReg: RegExp = /[|｜](.+?)《(.+?)》/g;
  const emphasisBase: string = '<strong class="ns_emphasis">$1</strong>';
  const emphasisReg: RegExp = /《《(.+?)》》/g;

  let obj: string;
  let replaceBody: string;
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