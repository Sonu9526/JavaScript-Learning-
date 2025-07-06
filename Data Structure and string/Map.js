const ques = new Map([
  ["question", "what is most popular programming lang"],
  [1, "C"],
  [2, "javaScript"],
  [3, "java"],
  ["correct", 2],
  [true, "You are crct 😍"],
  [false, "try again"],
]);

console.log(ques);

// loop throug map
for (const [k, v] of ques) {
  if (typeof k == "number") {
    console.log(`Answer is ${k}:${v}`);
  }
}

const ans = Number(prompt("Enter your answer"));
console.log(ques.get(ques.get("correct") === ans));

// Convert an object to Map
const addres = {
  name: "sonu",
  age: 22,
};
const addresMap = new Map(Object.entries(addres));

console.log(addresMap);

// convert map to array
const qusArray = [...ques];
console.log(qusArray);
