// console.log("Session 1");

// class Car -> {
//     brand,
//     color,
//     mileage,
//     fuelVariant,
// }

// firstCarObj => 'Hyundai', 'Black', '12+', 'Petrol'
// secondCarObj => 'BMW', 'Red', '10+', 'Petrol'

// Object -> Template -> Factory -> Object

// ES6 -> class keyword got introduced -> synatactic sugar coat around what was already available in JS.

function Car(color, company, mileage) {
  this.color = color;
  this.company = company;
  this.mileage = mileage;
  this.drive = function () {
    console.log("Driving the car");
  };
}

function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x: x,
    y: y,
  };
  this.draw = function () {
    console.log("Current location: ", this.location);
  };
  this.move = function (nextX, nextY) {
    this.location.x = nextX;
    this.location.y = nextY;
  };
}

// new => 3 things
// 1. {} objects -> Memory location 200
// 2. `this` keyword to refer to newly created empty object
// 3. return this object

const firstCircleObj = new Circle(10, 0, 0);
// console.log(firstCircleObj);

// const secondCircleObj = new Circle(5, 1, 1);
// console.log(secondCircleObj);

// for (let index = 0; index <= 10; index++) {
//   firstCircleObj.move(index, index);
//   firstCircleObj.draw();
// }

const person = {
  name: "Alok",
  class: "B.Tech",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    printName: function () {
      console.log(this);
    },
  },
  greet: function () {
    console.log(this);
    console.log(this.name);
  },
};

// person.greet();
// person.address.printName();

function hello() {
  console.log(this);
}
// hello();

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    console.log("friends", this.friendList);
  };
  this.findMutual = function (userObj) {
    const mutualFriends = this.friendList.filter((friend) =>
      userObj.friendList.includes(friend)
    );
    console.log("Mutual friends", mutualFriends);
  };
}
//
const vivek = new User("Vivek Kumar");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Ajay");

// vivek.printFriendList();
// console.log("-------------------");
const varun = new User("Varun");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Harish");

// vivek.findMutual(varun);

const student = {
  fullName: "Alok",
  greet: function () {
    console.log(this);
    console.log("Hello " + this.fullName);
  },
};

const customObj = {
  fullName: "Custom",
  dept: "IT",
};

// student.greet();

const greetFn = student.greet.bind(student);

function executor(callback) {
  //   console.log(this);
  callback();
}

// executor(greetFn);

const timer = {
  currentTime: 0,
  showTime: function () {
    console.log("from here", this.currentTime);
  },
  addTen: function () {
    this.currentTime += 10;
    this.showTime();
  },
};

// timer.addTen();
const bindTimer = timer.addTen.bind(timer);
// setTimeout(bindTimer, 2000);

function CarConstructor(color, company, mileage) {
  this.color = color;
  this.company = company;
  this.mileage = mileage;
  this.drive = function () {
    console.log("Driving the car");
  };
}

const firstCar = new CarConstructor("Black", "Hyundai", "12+");
console.log(firstCar);

class CarClass {
  constructor(color, company, mileage) {
    this.color = color;
    this.company = company;
    this.mileage = mileage;
  }

  drive() {
    console.log("Driving the car");
  }
}

const secondCarObject = new CarClass("Red", "BMW", "5+");
console.log(secondCarObject);

secondCarObject.drive();
