/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができるパッケージ
 * @param {string} elem 代替記号の入った文章を入れるタグ
 * @param {string} content 入れる文章にHTMLタグがなければtext、あればhtml
 */
const novelSupport = (elem: string, {content = 'text'}: {content?: string} = {}) => {
  const optionContent: string = content;

  const Base = {
    txt: '<p class="ns_indent">$1</p>',
    ruby: '<ruby class="ns_ruby">$1<rt>$2</rt></ruby>',
    emphasis: '<strong class="ns_emphasis">$1</strong>'
  }
  const Reg = {
    txt: /(.+?)[\n\r]/g,
    ruby: /[|｜](.+?)《(.+?)》/g,
    emphasis: /《《(.+?)》》/g
  }

  let obj: string;
  let replaceBody: string;
  if (optionContent === 'text') {
    obj = document.getElementById(elem).textContent;
    replaceBody = obj.replace(Reg.txt, Base.txt)
                     .replace(Reg.ruby, Base.ruby)
                     .replace(Reg.emphasis, Base.emphasis);
  }
  else if(optionContent === 'html') {
    obj = document.getElementById(elem).innerHTML;
    replaceBody = obj.replace(Reg.ruby, Base.ruby)
                     .replace(Reg.emphasis, Base.emphasis);
  }

  document.getElementById(elem).innerHTML = replaceBody;
}

export {novelSupport}