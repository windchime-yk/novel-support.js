export default class novelSupport {
  constructor(elem) {
    this.elem = elem;
  }
  replace() {
    const rubyBase = '<ruby>$1<rt>$2</rt></ruby>';
    const emphasisBase = '<>$1</>';

    const obj = document.getElementById(this.elem).innerHTML;
    const prop = obj.replace(/[\|｜](.+?)《(.+?)》/g, rubyBase)
                    .replace(/[\|｜](.+?)（(.+?)）/g, rubyBase)
                    .replace(/[\|｜](.+?)\((.+?)\)/g, rubyBase)
                    .replace(/([一-龠]+)《(.+?)》/g, rubyBase); //ここまでがルビ変換
    document.getElementById(this.elem).innerHTML = prop;
  }
}