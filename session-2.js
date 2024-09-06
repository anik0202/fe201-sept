const student = {
  name: "Alok Raj",
  roll: 7,
  subject: "CSE",
  about: () => {
    console.log("I Love JS");
  },
  favColor: "black",
  address: {
    state: "Bihar",
    country: "IN",
  },
};
const student2 = {
  dept: "IT",
};

// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));

// const obj = student;
// student.name = "TEST";

const tempObj = {};
Object.assign(tempObj, student);

const tempObj2 = { ...student };

student.name = "TEST";
student.address.state = "KA";

// console.log(tempObj);
// console.log(tempObj2);

// How can I create a deep copy of an object?

const employeeData = {
  John: 100,
  Pete: 500,
  Mary: 250,
};

class Util {
  constructor(employeeData) {
    this.data = employeeData;
  }

  sumSalaries() {
    const valArr = Object.values(this.data);
    return valArr.reduce((a, b) => a + b, 0);
  }

  averageSalaries() {
    const sum = this.sumSalaries();
    const numberOfEmployee = Object.keys(this.data).length;
    return Math.round(sum / numberOfEmployee);
  }
  findSalaryRange() {
    const salaryArr = Object.values(this.data);

    return Math.max(...salaryArr) - Math.min(...salaryArr);
  }
}

const ut = new Util(employeeData);

// console.log(ut.sumSalaries());
// console.log(ut.averageSalaries());
// console.log(ut.findSalaryRange());

// Parent/Base Class
class Student {
  constructor(name, roll) {
    this.fullName = name;
    this.roll = roll;
  }

  markAttendance() {
    console.log(this.fullName, "is present");
  }
}

// Inherited/Child class
class SportsCaptain extends Student {
  playFootball() {
    console.log(this.fullName);
    console.log(this.roll);
    console.log(this.markAttendance());
    console.log("Play football");
  }
}

const stu = new Student("Abc", 10);
// console.log(stu);

const s1 = new SportsCaptain("Xyz", 7);
// s1.playFootball();

class BaseCreditCard {
  constructor(cardNumber, cardHolderName, expirationDate) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expirationDate = expirationDate;
  }

  displayDetails() {}

  makePayment(amount) {
    console.log(
      `${this.cardHolderName} has made a payment of ${amount} to ${this.cardNumber}`
    );
  }

  discount() {
    console.log("3% discount!");
  }
}

class SpecificCreditCard extends BaseCreditCard {
  constructor(brandName, cardNumber, cardHolderName, expirationDate) {
    super(cardNumber, cardHolderName, expirationDate);
    this.brandName = brandName;
  }
  discount() {
    super.makePayment("2000");
    super.discount();
    console.log("5% discount!");
  }
}

const zomatoCard = new SpecificCreditCard(
  "Zomato",
  "XXXXXXXX",
  "XYZ",
  "23 March 2028"
);
console.log(zomatoCard.discount());

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name, "is present");
  }
  getRole() {
    console.log("Employee of office");
  }
}

class Developer extends Employee {
  constructor(name, department, prefLang) {
    super(name, department);
    this.prefLang = prefLang;
  }
  submitCode() {
    console.log("Code Submitted by", this.name, "from", this.department);
  }
  getRole() {
    console.log("Works with ", this.prefLang);
  }
}

const rajesh = new Employee("Rajesh", "Design");
const alok = new Developer("Alok", "IT", "Javascript");

rajesh.getRole();
alok.getRole();
// alok.submitCode();
// alok.markPresent();
