// Pure Function? In simple terms, pure functions do not have an external state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.

let count = 0;

num = 15;

function mult(a) {
  const c = a * count;
  return c;
}

function sum(a, b) {
  mult(a);
  const c = a + b;
  return c;
}

sum(2, 3); //15
sum(2, 3); //20
sum(2, 3); //5
sum(2, 3); //5
sum(2, 3); //5
sum(2, 3); //5

/**
 * Advantages of pure functions:
 * A pure function works as an independent function that gives the same output for the same inputs.
 * Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug.
 * You can clone an external state into a pure function, but it does not change the purity of the function. // ON HOLD
 */

//Impure Function: An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.

// mutation -> changing

function test(obj) {
  const cloneObj = { ...obj };
  cloneObj.name = "Crio";

  return cloneObj;
}

const tempObj = {
  dept: "IT",
};

test(tempObj); // {dept: 'IT', name: 'Crio'}

/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */

function addProperty(obj, property, value) {
  const test = { ...obj };
  test[property] = value;
  return test;
}

const obj = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "IN",
  },
};

// const copy = {
//   name: "Test",
//   roll: 7,
//   address: {...obj.address},
// };

const copy = { ...obj, address: { ...obj.address } };

const sample = {
  name: "test",
  address: {
    address01: { name: "Place01" },
    address02: { name: "Place02" },
  },
};

const sampleClone = {
  ...sample,
  address: {
    ...sample.address,
    address01: { ...sample.address.address01 },
    address02: { ...sample.address.address02 },
  },
};

// test -> Higher order function in what condition?
function test() {
  return () => {
    console.log("Hey There");
  };
}

function test2(cb) {
  cb();
}

function test3(cb) {
  cb();
  return () => {
    console.log("Hey There");
  };
}

const sample1 = test();
sample1();

// const num = sum(2,3);
