class Person {
    name;
    age;
    isStudent;
    course;

    constructor(name, age, isStudent, course) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.course = course;
    }

    isAdult(){
        return this.age >= 18;
    }
}

const person = new Person("Patriks", 18, true);
person.course = "PT2023";

console.log(person.name);
console.log(person['name']);

console.log("isAdult: " + person.isAdult());
console.log("isStudent: " + person.isStudent);

console.log("course: " + person.course);