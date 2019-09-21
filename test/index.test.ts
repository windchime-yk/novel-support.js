import { novelSupport } from '../src/index';


describe('novelSupport', () => {
  test('idでの指定で動作するか', () => {
    document.body.innerHTML = `
    <div id="novel">
      |卵《たまご》かけご|飯《はん》
    </div>
    `;
  
    novelSupport('#novel');
  
    expect(document.querySelector('#novel').innerHTML).toEqual('\n<p class="ns_indent">      <ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby></p>    ');
  })

  test('classでの指定で動作するか', () => {
    document.body.innerHTML = `
    <div class="novel">
      |卵《たまご》かけご|飯《はん》
    </div>
    `;
  
    novelSupport('.novel');
  
    expect(document.querySelector('.novel').innerHTML).toEqual('\n<p class="ns_indent">      <ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby></p>    ');
  })

  test('content: text', () => {
    document.body.innerHTML = `
    <div class="novel">
      |卵《たまご》かけご|飯《はん》
      《《なんということでしょう》》
    </div>
    `;
  
    novelSupport('.novel');
  
    expect(document.querySelector('.novel').innerHTML).toEqual('\n<p class="ns_indent">      <ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby></p><p class="ns_indent">      <strong class="ns_emphasis">なんということでしょう</strong></p>    ');
  })

  test('content: html', () => {
    document.body.innerHTML = `
    <div class="novel">
      |卵《たまご》かけご|飯《はん》
      《《なんということでしょう》》
    </div>
    `;
  
    novelSupport('.novel', {content: 'html'});
  
    expect(document.querySelector('.novel').innerHTML).toEqual('\n      <ruby class="ns_ruby">卵<rt>たまご</rt></ruby>かけご<ruby class="ns_ruby">飯<rt>はん</rt></ruby>\n      <strong class="ns_emphasis">なんということでしょう</strong>\n    ');
  })
})