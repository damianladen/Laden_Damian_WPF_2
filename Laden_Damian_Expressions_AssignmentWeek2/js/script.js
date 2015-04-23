// Damian Laden
// 4/15/15
// Assignment Week 2

var bananas = prompt("We are calculating how many bananas to use for how many smoothies. \nPlease enter the numbers of bananas"); //this line is prompting for the number of bananas that will be used
var numberOfSmoothies = prompt("Please enter the number of smoothies."); // this line is prompting for smoothies to be made
var fruit = 1; //this line converts the data to a number thus telling us how much fruit there is
var healthy = bananas * fruit / numberOfSmoothies;//this line will multiply bananas with number of fruit and divide the number of smoothies made thus calculating the info

var result = "The amount of bananas to use is "+ healthy + " for the desired amount of smoothies."; // This line gives the string output
alert(result); // This line posts the desired result

console.log("The amount of bananas to use is "+ healthy + " for the desired amount of smoothies."); // This line gives the console output

/* I typed in 20 for number of bananas, 5 for number of smoothies, and my calculator gave me 5 needed for the desired amount of smoothies. */
/* I typed in 21 for number of bananas, 7 for number of smoothies, and my calculator gave me 3 needed for the desired amount of smoothies. */
/* I typed in 65 for number of bananas, 4 for number of smoothies, and my calculator gave me 16.25 needed for the desired amount of smoothies. */