const createBooking = (
  flightnum,
  passengersNum = 1,
  price = 21 * passengersNum
) => {
  const booking = {
    flightnum,
    passengersNum,
    price,
  };
  console.log(booking);
};
createBooking("lh321");

const add = (num1 = 5, num2 = 10) => {
  console.log(num1 + num2);
};
add();
add(21);
add(4, 6);
