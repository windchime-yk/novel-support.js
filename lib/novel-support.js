export default class novelSupport {
  constructor(elem) {
    this.elem = elem;
  }
  replace() {
    const txtBase = '<p class="ns_indent">$1</p>';
    const rubyBase = '<ruby>$1<rt>$2</rt></ruby>';
    const emphasisBase = '<strong class="ns_emphasis">$1</strong>';

    const obj = document.getElementById(this.elem).innerHTML;
    const prop = obj.replace(/[\|｜](.+?)《(.+?)》/g, rubyBase)
                    .replace(/[\|｜](.+?)（(.+?)）/g, rubyBase)
                    .replace(/[\|｜](.+?)\((.+?)\)/g, rubyBase)
                    .replace(/([一-龠]+)《(.+?)》/g, rubyBase); //ここまでがルビ変換
    document.getElementById(this.elem).innerHTML = prop;
  }
  styling() {
    const txtIndent = this.elem.getElementsByClassName('ns_indent');
    const txtEmphasis = this.elem.getElementsByClassName('ns_emphasis');
    for (let i = 0; i < txtIndent.length; i++) {
      txtIndent[i].style.textIndent = "7rem";
    }
    for (let i = 0; i < txtEmphasis.length; i++) {
      txtEmphasis[i].style.textIndent = "7rem"; //仮打ち
    }
  }
}