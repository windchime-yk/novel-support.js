function replaceRuby(elem) {
  this.elem = elem
  const obj = document.getElementById(this.elem).innerHTML;
  const prop = obj.replace(/[\|｜](.+?)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
                  .replace(/[\|｜](.+?)（(.+?)）/g, '<ruby>$1<rt>$2</rt></ruby>')
                  .replace(/[\|｜](.+?)\((.+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>')
                  .replace(/([一-龠]+)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>');
  document.getElementById(this.elem).innerHTML = prop;
}

// export {replaceRuby}