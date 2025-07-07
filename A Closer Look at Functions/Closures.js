const securebooking = () => {
  let passengerCount = 0;
  return () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = securebooking();
booker();
booker();
booker();
