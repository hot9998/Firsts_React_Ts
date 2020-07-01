export default function pratice() {
  let count: number = 0;
  count += 1;
  // count = "문자열";

  const message: string = "hello world";

  const done: boolean = true;

  const numbers: number[] = [1, 2, 3];
  const messages: string[] = ["hello", "world"];

  // messages.push(1);

  let mightBeUndefined: string | undefined = undefined; // string or undefined
  let nullableNumber: number | null = null; // number or null

  let color: "red" | "orange" | "yellow" = "red";
  color = "yellow";
  // color = "green";

  function sum(x: number, y: number): number {
    return x + y;
    // return null;
  }
  sum(1, 2);

  interface Shape {
    getArea(): number;
  }

  class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    getArea() {
      return this.radius * this.radius * Math.PI;
    }
  }

  class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

  shapes.forEach((shape) => {
    console.log(shape.getArea());
  });
}
