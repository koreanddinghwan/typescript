//함수표현식(함수이름을 제외한 인자,몸체)은 익명함수이다.

//아래식은 바로 값이 저장된다.
let value = (function (a: any, b: any) {
  return a + b;
})(1, 2);
