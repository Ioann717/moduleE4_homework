# Задание №1

function printOwnProperties(obj) {
    if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
        if (typeof obj === "object") {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let value = obj[key];
                    console.log("Key:", key, ", Value:", value);
                }
            }
        }
    } else {
        for (let key in obj) {
            if (typeof obj[key] !== "function" && !key.startsWith("__")) {
                let value = obj[key];
                console.log("Key:", key, ", Value:", value);
            }
        }
    }
}


let sampleObject = {
    name: "Ioann",
    age: 27,
    city: "Krasnodar"
};

class SampleClass {
    constructor() {
        this.property1 = "Value 1";
        this.property2 = "Value 2";
    }
}

let sampleInstance = new SampleClass();

console.log("Object properties:");
printOwnProperties(sampleObject);

console.log("Class instance properties:");
printOwnProperties(sampleInstance);



# Задание №2

function checkProperty(string, obj) {
  return obj.hasOwnProperty(string);
}

class MyClass {
  constructor() {
    this.my_property = "Hello";
  }
}

const obj = new MyClass();
console.log(checkProperty("my_property", obj));  // Output: true
console.log(checkProperty("other_property", obj));  // Output: false



# Задание №3

function createEmptyObject() {
  return Object.create(null);
}

const newObj = createEmptyObject();
console.log(Object.getPrototypeOf(newObj));
