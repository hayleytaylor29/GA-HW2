//1. A parameter is the name that is passed into the function, and an argument is the actual value
// that you are passing through the function
//2. Return will show the value on the page, console.log will only show you in the console

//Palindrome -- I understand what needs to be done, but having trouble
//executing it. I know that we need to compare the first and last characters,
//and then continue comparing, if they don't match, it's not a palindrome. If
//the input only has 1 character, it is true, and if the string is odd, we
//can ignore the middle character all together.
//I researched and found that slice is used to extract parts of a string that
//that can then be returned, but again, not sure we went over this in class
//and having a hard time figuring it out. Getting "undefined".
function checkPalindrome(str){
 //create a variable that converts the string to uppercase   
    const upper = str.toUpperCase();
    let i = 0;
 //check if the length is even or odd
    if ((upper.length) % 2 === 0) {
        i = (upper.length) / 2;
    } else {
        //if the string is only 1 character, it is a palindrome
        if (upper.length === 1) {
            // console.log(true);
        } else {
            // if the string is odd, ignore the middle character
            i = (upper.length - 1) / 2;
        }
    }
// loop through the string to check the first character to the last, and 
// then move to the next
    for (let x = 0; x < i; x++) {
        //compare characters and drop them if they don't match
        if (upper[x] != upper.slice(-1-x)[0]){
            // console.log(false)
        }
    }
    // console.log(true);
}
console.log(checkPalindrome("Hi"));  



// SUM ARRAY --  in doing research in trying to figure out how to solve
// this question, a lot of the resources said to use "reduce", but am 
// having a difficult time grasping that concept and I don't believe
// we went over this in class. 
function sumArray(arr){
    let sum=0;
    for (let i of arr) {
        sum += i;
    }
     console.log(sum);
}
sumArray ([1, 2, 3, 4, 27]);

// PRIME NUMBERS -- I couldn't get this to work, I get what needs to 
//  happen, tried using the comments to walk through each step but am
//  getting stuck. I understand that we can use the math.sqrt to easily 
//  weed out the numbers that have a square root, therefore are not prime
//  numbers. We're checking if the number is less than 1 or even, so neither
//  of these would be prime. 

function checkPrime(num) {
//check if number is negative
if (num <= 1){
    console.log(false);
}
//check for even numbers
if (num % 2 == 0 && num > 2) {
    console.log(false);
}
//create a variable to store the square root of the num
const root = Math.sqrt(num);
//start from 3 and stop at the square, increase each loop by 2(even numbers
// can not be primes)
for (let i = 2; i <= root; i += 2){
    //use a modulo operator to see if there is a remainder
    if(num % i === 0) {
        console.log(false);
    }
        console.log(true);
    }
}
checkPrime("7");


//ROCK PAPER SCISSOR -- was using my pre-course work as a reference,
//I know we need to list out all the possibilities and compare, with the
//options in an array but I'm running into a problem with the else if 
//statements. Not sure what I'm doing wrong, I tried to play around
//with the else and if's and couldn't get the error to go away. It says
//declaration of statement expected and don't know how to fix.
function randomMove(choice) {
//create variables for the computer's and the user's random move
let computersMove = randomMove();
let usersMove = randomMove();
//create a function for rock paper scissor
function rockPaperScissor(){
//create a variable to hold the choices
let choice = ["rock", "paper", "scissor"];{
for (let i = 0; i < choice.length; i++) {
    //if the computers move and the user move match, it's a tie
    if(computersMove===usersMove);
    console.log("it's a tie");
    //if the computer chooses rock and user chooses paper, user wins- I'm
    //getting an error on line 102 and not sure why.
} else if (computersMove===choice[0] && usersMove===choice[1]){
    console.log("the user wins");
    //if the computer chooses paper and the user chooses rock, the
    //computer wins
} else if (computersMove===choice[1] && usersMove===choice[0]){
    console.log("the computer wins");
    //if the computer chooses scissors and the user chooses paper,
    //the computer wins
} else if (computersMove===choice[2] && usersMove===choice[1]){
    console.log("the computer wins");
    //if the computer chooses scissor and the user chooses rock, the user
    //wins
} else if (computersMove===choice[2] && usersMove===choice[0]){
    console.log("the user wins");
    //if the computer chooses paper and the user chooses scissor, user wins
} else if (computersMove===choice[1] && usersMove===choice[2]){
    console.log("the user wins");
    //if the computer chooses rock and the user chooses scissor, the
    //computer wins
} else if (computersMove===choice[0] && usersMove===choice[2]){
    console.log("The computer wins")
}
}
}
}
rockPaperScissor(computersMove, usersMove);