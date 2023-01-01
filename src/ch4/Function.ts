//js에서 함수는 객체.Function이라는 클래스의 인스턴스.

//add가 함수이름, Function의 인자는 함수표현식이다.
let add = new Function("a", "b", "return a+ b");
let result = add(1, 2);
console.log(result);
