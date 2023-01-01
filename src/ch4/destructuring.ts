export type Person = { name: string; age: number };

const printPerson = ({ name, age }: Person): void => {
  console.log(name, age);
};

printPerson({ name: "test", age: 25 });
