var numbersArr = [];
for (var i = 0; i < 10; i++) {
  numbersArr.push(prompt("Enter a single integer below! " + (10 - i) + " more, please."))
}; //User inputs ten integers to create an array

var parseNumbersArr = numbersArr.map(function(element, index){
  return parseInt(element, 10);
})
numbersArr = parseNumbersArr // Turns numbersArr into a number value since prompt spits out a string value

console.log(numbersArr + " - You entered these special little numbers!"); // Shows number array created by prompt input after parseInt

var evenNumbersArr = numbersArr.filter(function(element, index){
  return element % 2 == 0}); // Shows array with only even numbers from numbersArr

console.log(evenNumbersArr + " - These are the even numbers from your inputs :D"); // Shows array with only even numbers

var addEvenNumbers = 0;
for (var i = 0; i < evenNumbersArr.length; i++) {
addEvenNumbers += evenNumbersArr[i]}; // Sums numbers from even number array

console.log(addEvenNumbers + " - This is the sum of the even numbers from your original inputs! WINNER"); // Shows the final product being the sum of even numbers from original input

alert("Are you aware the sum of the even numbers you entered is " + addEvenNumbers + "?"); // Popup with final sum of even numbers
