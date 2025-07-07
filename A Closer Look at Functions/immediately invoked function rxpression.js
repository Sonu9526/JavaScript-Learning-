(() => {
  console.log("This arrow fn does not run again");
})();
//calling the function;

(function () {
  console.log("This fn cannot run again");
})();
//calling the function;
