export class Person {
  constructor(public name: string, public job: string, public age: number) {}

  greet(): void {
    console.log(
      `Hello my name is ${this.name}, I am ${this.age} years old and my profession is ${this.job}!`
    );
  }
}

const person = new Person("MarLipe", "Programmer", 22);
const sousa = new Person("Sousa", "Backend Jr", 18);
person.greet();
sousa.greet();
