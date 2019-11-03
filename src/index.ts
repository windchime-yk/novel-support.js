/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができるパッケージ
 * @param {string} elem 代替記号の入った文章を入れるタグ
 * @param {string} [content=text] 代替記号の入った文章にHTMLタグが入っていればhtml、なければtext（デフォルトはtext）
 */
interface Option {
  content?: string
}

const novelSupport = (elem: string, {content = 'text'}: Option = {}) => {

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

  const elemList = document.querySelectorAll(elem);

  for (const element of elemList) {
    let obj: string;
    let replaceBody: string;

    if (content === 'text') {
      obj = element.textContent;
      replaceBody = obj.replace(Reg.txt, Base.txt)
                       .replace(Reg.ruby, Base.ruby)
                       .replace(Reg.emphasis, Base.emphasis);
    }
    else if(content === 'html') {
      obj = element.innerHTML;
      replaceBody = obj.replace(Reg.ruby, Base.ruby)
                       .replace(Reg.emphasis, Base.emphasis);
    }

    element.innerHTML = replaceBody;
  }
}

export default novelSupport
