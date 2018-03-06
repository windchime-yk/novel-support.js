const novelSupport = (elem) => {
  const txtBase = '<p class="ns_indent">$1</p>';
  const rubyBase = '<ruby>$1<rt>$2</rt></ruby>';
  const emphasisBase = '<strong class="ns_emphasis">$1</strong>';

  const obj = document.getElementById(elem).innerHTML;
  const replaceBody = obj.replace(/(.+?)[\n\r]/g, txtBase) //これが改行検知pタグ挿入（現在、誤動作してる）
                         .replace(/[\|｜](.+?)《(.+?)》/g, rubyBase)
                         .replace(/([一-龠]+)《(.+?)》/g, rubyBase) //ここまでがルビ変換
                         .replace(/《《(.+?)》》/g, emphasisBase); //これが圏点変換
  document.getElementById(elem).innerHTML = replaceBody;
}

export {novelSupport};