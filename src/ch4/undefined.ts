interface INameable {
  name: string;
}

function getName(o: INameable) {
  return o.name;
}

//오류납니다.
let n = getName(undefined);
console.log(n);
