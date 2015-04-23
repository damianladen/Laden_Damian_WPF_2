// Damian Laden
// 4/22/15
// Assignment Week 3

// How many hours we paid for a Uhaul rental.
var uhaulCharges = prompt("We are calculating the uhaul rental flat fee. \nPlease enter uhaul rental charge"); //this line is prompting for the uhaul rental flat fee
var perHour = prompt("Please enter the price per hour."); // this line is prompting for the price per hour
var pricePaid = prompt("Please enter the amount paid for the entire rental."); //this line is prompting for how much was paid for the total rental fee
var hours = (pricePaid - uhaulCharges)  / perHour; //this line will subtract the full amount paid with the rental and divide that with the hourly rate
