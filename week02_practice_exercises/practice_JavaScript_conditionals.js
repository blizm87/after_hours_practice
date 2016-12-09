/*
  1. Write a JavaScript program that accept two integers and display the larger.
     Hint: if/else loops
*/
    var largerFunc = function(a,b){
      if (a<b){
        console.log(b);
        return b;
      } else {
          console.log(a);
          return a;
      }
    }
/*
  2. Write a JavaScript conditional statement to find the product of three numbers.
      Hint: if/else loops
*/
    var a; var b; var c;
    if (a * b){
        var result = a*b;
    } else if (b * c) {
        var result = b*c;
      } else {
          var result= a*c;
      }
/*
  3. Write a JavaScript conditional statement to find sort three numbers.
*/
      var sortFunc = function(a,b,c){
        if((a > b) && (a > c)){
          return a;
          } else if ((b > a) && (b > c)){
            return b;
            } else if ((c > a) && (c > b)){
                return c;
              } else if ((a > b) && (a < c)) {
                return c;
                } else if ((a < b) && (a > c)){
                  return b;
                  } else {
                      return a;
                    }

      }
/*
  4. Write a JavaScript programm that uses nested for loops to create this pattern
      *
      * *
      * * *
      * * * *
      * * * * *

      Hint: nested for loops
*/
    for (var count=0;count<5;count++){
      for(var num=0;num<1;num++){
        var star;
        console.log(star+= '*');
      }
    }

