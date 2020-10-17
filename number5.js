function toWord() {
  var num = prompt("please enter number less than or eqall to 50:");
  var ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  var number = Number(num);
  var word;
  if (number > 50 || number < 0) {
    return toWord();
  } else {
    if (number === 0) word= "zero";

    //the case of 1 - 20
    if (number < 20) {
      word= ones[number];
    }

    if (num.length === 2 && number > 20) {
      word= tens[num[0]] + " " + ones[num[1]];
    }
  }
  return word; // i suppose to return but i log it just to show result
}
