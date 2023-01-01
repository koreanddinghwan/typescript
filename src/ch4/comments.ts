//signature :(arg0: string, arg1: number) => void

let printMe: (arg0: string, arg1: number) => void = function (
  name: string,
  age: number
): void {};

type stringNumberFnc = (arg0: string, arg1: number) => void;
let f: stringNumberFnc = function (a: string, b: number): void {};
