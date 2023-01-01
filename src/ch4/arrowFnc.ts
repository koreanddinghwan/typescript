//화살표함수로 함수를 만들면 표현식문으로 함수를 만들 수 있다.
//표현식문은 값을 바로 리턴한다.(명시적 return호출없이)

const NotArrow = (a: number, b: number) => {
  //복합실행문
  return a + b;
};

const arrow = (a: number, b: number) => a + b;

const isGreater = (a: number, b: number): boolean => a > b;
