// DOM - Document Object Model -> div, span, input 등 (html 내용들)
// API - Application Programming Interface -> 웹사이트가 동작하기 위해 입력하는 프로그래밍 명령
// DOM API - JS에서 HTML을 제어하는 여러가지 명령들 

/*
//Html 요소(element) 1개 검색/찾기
let boxEl = document.querySelector('.box');

console.log(boxEl);

//boxEl.addEventListener(이벤트이름, 일어날 행동);
boxEl.addEventListener('click', function() {
    console.log('click!!');
    boxEl.classList.add('active');
    console.log(
        boxEl.classList.contains('active') // true
    );
    boxEl.classList.remove('active');
    console.log(
        boxEl.classList.contains('active') // false
    );
}); 
*/

/*
const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function(boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`); //보간법 `${들어가게 하고픈 내용}` -> 문자데이터
    console.log(index, boxEl);
});
*/

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'HEROPY';
console.log(boxEl.textContent);


