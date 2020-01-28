/*https://github.com/BagerManBG/Coding-Girls-JS-2020/tree/master/lesson_2
Create one function for each task and test with multiple values 
if task allows it.
*/

/*
1. (Task #1) Write a JavaScript program to calculate the factorial of a number. 
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120.
*/

const factorial = (n, sum = n) =>{
	if (n === 0)
		return 1;
	else if (n < 0)
		return 0;
	else if (n === 1)
		return sum;

	sum *= (n - 1);
	n--;

	factorial(n, sum);
};

console.log(factorial(6)); //result is undefined why?

const a = 5 + factorial(3);
console.log(a);


/*
//https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
console.log(factorialize(5));
*/


/*
2. (Task #8) Write a JavaScript program to find the most frequent item of an array. 
Sample array: const arr1=[3, 'a', 'a', 'a', 2,2, 2, 2, 3, 'a', 3, 'a', 2, 4, 9, 'b','b','b','b','b','b','b','b', 3]; 
Sample Output: a ( 5 times )
*/

const frequent = (array) =>{
	let counter = {};
	let max = 0;
	let maxValue = '';
	for (let i = 0; i < array.length; i++){
		if (counter[array[i]])
			counter[array[i]] ++;
		else
			counter[array[i]] = 1;

		if (max < counter[array[i]]){
			max = counter[array[i]];
			maxValue = array[i];
		}
	}
	console.log(counter);
	console.log(`Most frequent: ${maxValue}: ${max} times!`);

}
const array = [3, 'zaza', 'a', 2, 2, 3, 'a', 3, 'a', 2, 4, 3, 9,'b','b','b','b','b', 19];

frequent(array);

/*
3. (Task #9) Write a JavaScript program to find the armstrong numbers of 3 digits. 
Note: An Armstrong number of three digits is an integer 
such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
Search for those numbers from 100 to 999 inclusive.
*/

const isArmstrong = () =>{
	for (i = 100; i <= 999; i++){
		let buffer = Array.from(String(i));
		let sum = 0;
		for (const index in buffer){
			sum += buffer[index]**3;
		}
		if (sum === i)
			console.log(`${i}`);
	}

}

isArmstrong();
/*
4. (Task #10) Write a JavaScript program to construct the following pattern, 
using a nested for loop. 
Output should differ depending on user input 
(if function is called with 5 as a parameter, do 5 lines)
*
* *
* * *
* * * *
* * * * *
*/

const staircase = (height) =>{
	for (let row = 1; row <= height; row++){
		let aRow = "";
		for (let i = 0; i < row; i++){
			aRow += "*";
		}
		console.log(`${aRow}\n`);
	}
	

}

let userPrompt = '';

while (userPrompt < 1 || isNaN(userPrompt)){
	userPrompt = parseInt(prompt("I will build a staircase for you! What height do you want it to be?"));
}

staircase(userPrompt);