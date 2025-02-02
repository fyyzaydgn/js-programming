class Person {
  //attributes: name, age
  //methods: eat()
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Student extends Person {
  //attributes: grade
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  //methods: study()
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  //attributes: salary

  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  //methods: teach()
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

let student = new Student("Feyyaz", 38, "Master Degree");
console.log(student);

student.study();
student.eat();

let teacher = new Teacher("Sheldon Ross", 60, 160_000);
console.log(teacher);

teacher.eat();
teacher.teach();
