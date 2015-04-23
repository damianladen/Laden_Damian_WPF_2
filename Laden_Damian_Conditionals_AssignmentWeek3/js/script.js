// Damian Laden
// 4/22/15
// Assignment Week 3

// How many hours we paid for a Uhaul rental.
var uhaulCharges = prompt("We are calculating the uhaul rental flat fee. \nPlease enter uhaul rental charge"); //this line is prompting for the uhaul rental flat fee
var perHour = prompt("Please enter the price per hour."); // this line is prompting for the price per hour
var pricePaid = prompt("Please enter the amount paid for the entire rental."); //this line is prompting for how much was paid for the total rental fee
var hours = (pricePaid - uhaulCharges)  / perHour; //this line will subtract the full amount paid with the rental and divide that with the hourly rate

var result = "I have "+ hours + " hours to move my things."; // This line gives the string output
alert(result); // This line posts the desired result

console.log("We have "+ hours + " hours to move our things."); // This line gives the console output

var uhaulCharges = 17; // This line gives the shop charge price
var perHour = 6; // This line gives the number per hour
var pricePaid = 65; // This line gives the price paid
var toManyHours; // This line gives the operator for the ternary
var theEnd = true; // This line gives the boolean for the logical operator

if(uhaulCharges > pricePaid){ // the shop charges are greater then the price paid
    console.log("You cant keep moving!"); // this prints if the shop charge is greater then the price paid

}else if(uhaulCharges < pricePaid ) { // the shop charges are less then the price paid
    console.log("We are getting things moved!"); // this prints if the other option does not work
