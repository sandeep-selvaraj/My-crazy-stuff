var fname = prompt("Please enter your First Name:");
var lname = prompt("Please enter your Last Name:");
var age =  prompt("How old are you?");
var ht =  prompt("How tall are you in centimetres");
var pet =  prompt("What is the name of your pet?");
var ackn = alert("Thank you so much for your information!");

pet_name_lt = pet.length

if((fname[0] == lname[0]) && (age <=30 && age > 20) && (ht >= 170) && (pet[pet_name_lt - 1] == 'y')){
    console.log("Welcome Comrade! You've passed the Spy Test");
}
else{
    console.log("Nothing to see here!");
}

