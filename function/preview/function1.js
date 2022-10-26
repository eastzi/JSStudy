function helloFunc() {
    console.log(1234);
}

helloFunc();

// ================================================

function returnFunc() {
    return 123;
}

let a = returnFunc();

console.log(a);

// ================================================

function sum(a, b) {
    return a + b;
}

let b = sum(1, 2);
let c = sum(7, 12);
let d = sum(2, 4);

console.log(b, c, d); 

// ================================================

//기명함수 - 함수선언
function hello() {
    console.log('Hello');
}

//익명함수 - 함수표현
let world = function() {
    console.log('World');
}

hello();
world();

// ================================================

//객체 데이터
const heropy = {
    name: 'HEROPY',
    age: 85,
    getName: function() {
        return this.name;
    }
};

const hisName = heropy.getName();
console.log(hisName); 
console.log(heropy.getName()); 

// ================================================

//return 활용
function sum2(x, y) {
    if(x < 2) {
        return //함수종료 역할
    }
    return x + y; //함수 결과값 반환
}

console.log(sum2(1, 2)); // x < 2 이므로 if문에서 함수 종료 -> console 에서 undefined
console.log(sum2(7, 2)); // x > 2 이므로 if문 밖에서 함수종료 및 결과값 반환 -> console 에서 x + y = 9 반환

// ================================================

//매개변수가 직접 적지 못할정도로 많은 경우 - 활용도는 높지않음
function sum3() {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(sum3(7, 3));

// ================================================

//화살표 함수
//() => {} vs function () {}

const double = function (x) {
    return x * 2;
}

console.log('double: ', double(7));

/*
const doubleArrow = (x) => {
    return x * 2;
}
const doubleArrow = x => x * 2;
*/
const doubleArrow = x => ({
    name: 'Heropy',
    age: 88
})

console.log('doubleArrow: ', doubleArrow(7));

// ================================================

// 즉시실행함수
// IIFE -> Immediately-Invoked Function Expression

const e = 7;
function double2() {
    console.log(e * 2);
} 

double2(); 

//익명함수를 즉시실행하는 방법
(function () {
    console.log(e * 2);
})();

(function () {
    console.log(e * 2);
}());
