const [fname, lname] = "Sonu S Nair".split(" ", 2);
console.log(fname, lname);
const n = ["mr", fname].join("   ");
console.log(n);
const maskCreditCard = (num) => {
  const str = num + "";

  const fn = str.slice(-4).padStart(str.length, "*");
  console.log(fn);
};
maskCreditCard("12156566767676767676767432");
