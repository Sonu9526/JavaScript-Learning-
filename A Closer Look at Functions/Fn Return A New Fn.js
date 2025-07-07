const greeting = (greetings) => {
  return (name) => console.log(`${greetings} ${name}`);
};
const A = greeting("hey");
// console.log(A);
A("Sonu");
