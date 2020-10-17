//Assignment 6 – JavaScript Programs
/* 
1.Create an array with 10 String elements and write a script that will display only those names from the array that starts with “A” or “F”. Your script should display “No Result” in case there is no element starting with “A” or “F
*/

var arr = [
  "Fransis",
  "Samuel",
  "Andrew",
  "Ann",
  "Richmond",
  "Pakyah",
  "Folly",
  "Army",
  "John",
  "Larry",
];
function arrayOfAandF(array) {
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === "F" || array[i][0] === "A") {
      newArr.push(array[i]);
    }
  }
  if (newArr.length > 0) {
    return newArr;
  } else {
    return "No Result";
  }
}

arrayOfAandF(arr);
