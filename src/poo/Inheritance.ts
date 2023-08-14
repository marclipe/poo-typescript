import { Person } from "./Class";

class Student extends Person {
  constructor(
    name: string,
    job: string,
    age: number,
    public studentId: number
  ) {
    super(name, job, age);
  }

  study() {
    console.log(`${this.name} is studying, your id is ${this.studentId}!`);
  }
}

console.log(
  `=======//=======//=======//=======//=======//=======//=======//=======//=======//`
);

const student = new Student("Jola", "Soccer Player", 14, 2);
student.greet();
student.study();

const professor = new Student("Jack", "Professor", 30, 1);
professor.greet();
professor.study();
