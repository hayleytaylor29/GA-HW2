//1. A parameter is the name that is passed into the function, and an argument is the actual value
// that you are passing through the function
//2. Return will show the value on the page, console.log will only show you in the console

//Write a function called checkPalindrome that returns a boolean
// function checkPalindrome(str){
// //change the string to lowercase
// const lower = str.toLowerCase();
// }
// for (let i = 0; i < str.lower; i++)
//     if (str[i] !== ) {
//         return false;
//     }
//         return true;
// }


function sumArray(arr){
    let sum=0;
    for (let val of arr) {
        sum += val;
    }
     console.log(sum);
}
sumArray ([1, 2, 3, 4, 27]);