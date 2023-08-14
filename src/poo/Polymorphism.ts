// Polymorphism is a concept that allows objects of different classes to be treated uniformly when they share an inheritance relationship or implement the same interface.
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

function printArea(shape: Shape) {
  console.log(`Area: ${shape.calculateArea()}`);
}

const circle = new Circle(8);
printArea(circle);

const rectangle = new Rectangle(8, 4);
printArea(rectangle);

const moreExample = new Circle(2);
printArea(moreExample);