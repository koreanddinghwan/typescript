export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log("value");
  };
}

export class B {
  constructor(public value: number = 1) {}
  method(): void {
    console.log(this.value);
  }
}

export class C {
  static whoAreYou(): string {
    return "i am c";
  }
}

export class D {
  static whoAreYou(): string {
    return "i am d";
  }
}
