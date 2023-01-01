interface IAgeable {
  age?: number;
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}

//오류납니다.
console.log(getAge(null));
console.log(getAge(undefined));
