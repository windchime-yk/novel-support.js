/**
 * 小説投稿サイトで記述した文章をelemで指定したタグ内に入れることで、小説投稿サイトと同じように表示することができる関数式。
 * @param {string} elem
 * @param {object} option
 */var novelSupport=function novelSupport(elem){var option=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var optionContent=option.content===undefined?'text':option.content;var txtBase='<p class="ns_indent">$1</p>';var rubyBase='<ruby class="ns_ruby">$1<rt>$2</rt></ruby>';var emphasisBase='<strong class="ns_emphasis">$1</strong>';var obj=void 0;var replaceBody=void 0;if(optionContent==='text'){obj=document.getElementById(elem).textContent;replaceBody=obj.replace(/(.+?)[\n\r]/g,txtBase).replace(/[|｜](.+?)《(.+?)》/g,rubyBase).replace(/《《(.+?)》》/g,emphasisBase);}else if(optionContent==='html'){obj=document.getElementById(elem).innerHTML;replaceBody=obj.replace(/[|｜](.+?)《(.+?)》/g,rubyBase).replace(/《《(.+?)》》/g,emphasisBase);}document.getElementById(elem).innerHTML=replaceBody;};
