/* Write a program, which chooses either rock, paper or scissors randomly
each time it is run. 
If you want an extra challenge with that, you can use the prompt() 
function to get an input from the user and compare his input
to what the program chose and display who is the winner.*/

const options = ['rock', 'paper', 'scissors'];
const robotChoice = options[Math.floor(Math.random() * Math.floor(3))];
let userInput;

while(userInput < 1 || userInput > 3 || isNaN(userInput)){
	userInput = Math.ceil(Number(prompt("Pick:\n(1) rock\n(2) paper\n(3) scissors")));
}

const userChoice = options[userInput - 1]; 

console.log(`Playing rock, paper, scissors:\n
	Player: ${userChoice}\n
	Robot: ${robotChoice}\n`);

if (userChoice === robotChoice){
	console.log("Noone wins this time!");
	}
else ((userChoice === options[0] && robotChoice === options[2]) || 
	(userChoice === options[1] && robotChoice === options[0]) ||
	(userChoice === options[2] && robotChoice === options[1])){
	console.log('Congratulations you won!');
}
console.log('Sorry, bro! Robots taking over humanity this time!');


/*Write a program, which uses the prompt() function 
to get an input from the user. 
We want this input to represent the age of the user, 
so if he provides an input with incorrect format, 
the code should ask him until he provides a valid option 
(a number which is more than zero and less than 130).*/

let userAge;

while(userAge < 1 || userAge > 130 || isNaN(userAge)){
	userAge = Math.ceil(Number(prompt('How old are you?')));
}

/*Write a program, which calculates the area of a circle 
(check google for the formula). 
You'll need only the radius as a variable, your choice whether you take 
the radius as an input from the user or hardcode it.*/

let radius;

while(radius <= 0 || isNaN(radius)){
	radius = Number(prompt('Radius (in cm):'));
}

const circleArea = Math.PI*Math.pow(radius,2);
console.log(`Area of a circle with radius of ${radius} is: ${circleArea}`);
