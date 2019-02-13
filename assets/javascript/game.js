/*
1. Create a variable that will hold the random number
2. Create a variable that will hold the user's input
3. Create the 4 buttons
4. Add the crystal image to the buttons
5. Create onclick function that will calculate a random number and display the random number
6. Assign the random number to the user input variable
7. Create a function that will add the user inputs and assign it to the variable
8. if(addition of user input === computer generated random number) {
  player wins
}
else {
  player loses
}
9. reset game
10. new random number generated
*/

//Computer generated random number
$("#compGuess").append(Math.floor(Math.random() * 120) + 19);

// Set each button equal to a random number between 1 and 12
$("#crystal1").append(userNumber).text(Math.floor(Math.random() * 12) + 1);
$("#crystal2").append(userNumber).text(Math.floor(Math.random() * 12) + 1);
$("#crystal3").append(userNumber).text(Math.floor(Math.random() * 12) + 1);
$("#crystal4").append(userNumber).text(Math.floor(Math.random() * 12) + 1);

// Create a div to take the User's random number
var userNumber = $("<div>");
userNumber.html("<p>Your score is: </p> <h1>0</h1>");
$("#gameholder").append(userNumber);


$("button").click(function() {
  //$("random number button value").appendTo(userNumber);
})
