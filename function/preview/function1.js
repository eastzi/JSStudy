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