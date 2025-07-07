const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = (str, fn) => {
  console.log(`orginal string ${str}`);
  console.log(`transformed string ${fn(str)}`);
};
transformer("sonu s nair", upperFirstWord);
