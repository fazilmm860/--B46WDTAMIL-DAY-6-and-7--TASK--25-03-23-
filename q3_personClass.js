class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setAge(age) {
        this.age = age;
    }
    setEmail(email) {
        this.email = email;
    }
    getFullName() {
        return `My full name is ${this.firstName} ${this.lastName}`
    }
    getAge() {
        return `Age:${this.age}`
    }
    getEmail() {
        return `email:${this.email}`
    }

}

person1 = new Person()

person1.setFirstName('Mohamed');
person1.setLastName('Fazil');
person1.setAge(24);
person1.setEmail('fazilmm860@gmail.com');


const fullName = person1.getFullName();
const age = person1.getAge();
const email = person1.getEmail();

console.log(`${fullName},
${age} ,
${email}`);