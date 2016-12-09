var randomName = function() {
      var name = ['George', 'Mike', 'Joe', 'Natalie'];
      var count = Math.random()*4;
      if (count < 1 && count >0){
          return name[0];
      } else if (count >= 1 && count < 2){
          return name[1];
        } else if (count >= 2 && count < 3){
            return name[2];
          } else {
              return name[3];
            }

   }

    var say = function(saysomething) {
      console.log('Say ' + saysomething);
    }
    var yell = function(yellsomething) {
      console.log('Yell ' + yellsomething);
    }
    var eat = function(eatsomething) {
      console.log('Eat ' + eatsomething);
    }

    var roll = function(rollsomething) {
      console.log ('Roll ' + rollsomething);
    }

    function random_function(a, x, y, z, f) {     //the parameters can be anything, as long as they are used within the function
      //x,y,z,f parameters are FUNCTIONS, call these functions using a as parameter. LOOK AT EXAMPLE BELOW
      console.log(a);
    }
    random_function('Possible results include:' ,say(randomName()),yell(randomName()),eat(randomName()),roll(randomName()));

    //random_function(randomName, say, yell, eat, roll);    //When you call the function make sure to use the correct function name. IMP!
    // Possible results include:
    // Roll George
    // Eat Ninja
    // Say Mike
    // Eat George
