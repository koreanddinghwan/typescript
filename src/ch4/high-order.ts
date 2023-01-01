//고차함수.함수를 리턴하는 함수이다.
const add1 =
  (a: number): ((number: number) => number) =>
  (b: number): number =>
    a + b;

//반환하는 함수의 type을 정의해서 아래처럼 간단하게 정의할 수 있다.
type numberToNumber = (arg0: number) => number;

const add2 =
  (a: number): numberToNumber =>
  (b: number): number =>
    a + b;
