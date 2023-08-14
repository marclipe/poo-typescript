// Abstraction is a concept that involves creating simplified models of real-world objects, focusing only on the features relevant to the context at hand.
export abstract class Animal {
  constructor(public name: string, public age: number) {}

  abstract makeSound(): void;
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  makeSound(): void {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Doguinho", 2);
dog.makeSound();

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  makeSound(): void {
    console.log(`The age of ${this.name} is ${this.age}!`);
  }
}

const jola = new Cat("Frajola", 1);
jola.makeSound();