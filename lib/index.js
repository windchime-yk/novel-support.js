function replaceRuby(elem) {
  const obj = document.querySelector(elem).innerHTML;
  const prop = obj.replace(/[\|｜](.+?)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
                  .replace(/[\|｜](.+?)（(.+?)）/g, '<ruby>$1<rt>$2</rt></ruby>')
                  .replace(/[\|｜](.+?)\((.+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>').replace(/([一-龠]+)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>');
  document.querySelector(elem).innerHTML = prop;
}

export {replaceRuby}