
// Fizz buzz
//
// A fellow student presents you with the following code they're having problems getting to work.
//
// First, analyze the code.
//
// What misconceptions may the student have?
// Debug and fix the code.
// Given a starting number
//
// If a number is divisible by 3 log 'fizz'
// If a number is divisible by 5 log 'buzz'
// If a number is divisible by 5 AND 3 log 'fizzbuzz'
// Otherwise log the number
//
// Example: fizzbuzz up to 15 would be
// 0
// 1
// 2
// 'fizz'
// 4
// 'buzz'
// 6
// 7
// 8
// 'fizz'
// 'buzz'
// 11
// 'fizz'
// 13
// 14
// 'fizzbuzz'


var number = function(){
 for (var i = 1; i <= 15; i++){
  if ((i % 5 === 0) && (i % 3 === 0)){
     console.log ('fizzbuzz');
    } else if(i % 5 === 0){
          console.log ('buzz')
      } else if (i % 3 === 0){
            console.log ("fizz")
        } else {
              console.log(i);
          }
  }
};
