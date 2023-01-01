//일등함수는 변수와 함수를 구분하지 않는다.
//그래서 함수형프로그래밍이다.

let a = function (a: any, b: any) {
  return a + b;
};

//컴파일러는 함수표현식을 만나면 lazy evaluation을 통해 계산을 보류한다.
//실제 호출되면 eager evaluation을적용한다
a = function (a: any, b: any) {
  return a - b;
};
