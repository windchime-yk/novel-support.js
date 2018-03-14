/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができる関数式です。contentStyleにはデフォルトでtextが代入されており、第二引数にhtmlと記述することでHTML形式でコンテンツを取得できます。
 * @param {string} elem 
 * @param {string} contentStyle 
 */
const novelSupport = (elem, contentStyle = 'text') => {
  const txtBase = '<p class="ns_indent">$1</p>';
  const rubyBase = '<ruby>$1<rt>$2</rt></ruby>';
  const emphasisBase = '<strong class="ns_emphasis">$1</strong>';
  console.log(`現在のnovel-support.jsのコンテンツ変換は${contentStyle}です`);
  
  let obj;
  let replaceBody;
  if (contentStyle === 'text') {
    obj = document.getElementById(elem).textContent;
    replaceBody = obj.replace(/(.+?)[\n\r]/g, txtBase) //これが改行検知pタグ挿入
                     .replace(/[\|｜](.+?)《(.+?)》/g, rubyBase) //これがルビ変換
                     .replace(/《《(.+?)》》/g, emphasisBase); //これが圏点変換
  }
  else if(contentStyle === 'html') {
    obj = document.getElementById(elem).innerHTML;
    replaceBody = obj.replace(/[\|｜](.+?)《(.+?)》/g, rubyBase) //これがルビ変換
                     .replace(/《《(.+?)》》/g, emphasisBase); //これが圏点変換
  }
  const reg = /(.+?)[\n\r]/g;
  console.log(obj.match(reg));
  document.getElementById(elem).innerHTML = replaceBody;
}

novelSupport('replace', 'html');
novelSupport('ruby');