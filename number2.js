// Anonymous functions are functions that has no function name.
// They have no name between the function keyword and the paretheses
// They are often assign to a variable or pass them as an argument in another function or invoke them immediately after creation

// assigned to a variable
var shout = function () {
  console.log("heyyyyyyyyyyyyyy");
};
shout();

// passed as argument
document.addEventListener("click", function () {
  console.log("clicked");
});

// immediately invoked
(function () {
  console.log("Immediately invoked function execution");
})();
