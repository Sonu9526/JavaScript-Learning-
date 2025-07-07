const flight = "lh123";
const sonu = {
  name: "Sonu s nair",
  passport: 1243232332,
};
const checkIn = (flightNum, passenger) => {
  flightNum = "bhs231";
  passenger.name = `Mr ${passenger.name}`;
  if (passenger.passport == 1243232332) {
    alert("check in");
  } else {
    alert("wrong passport");
  }
};

checkIn(flight, sonu);
console.log(flight);
console.log(sonu);
