
//Lecture variables
/* const name = ' Travis';
console.log(name);

const lastName = ' Batts ';
console.log(name + lastName)

const age = ' 31 ';

console.log ("I'm" + name + lastName + "and I'm" + age + "years old");

var fullAge = true;

console.log(fullAge);
*/


// Lecture: variables continue

// var name = ' Travis ';
// var age = 32;

// console.log(name + age);

//
// var job, isMarried;

// console.log(job);

/* job = 'teacher';

isMarried = true;

console.log( name + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);

age = 'thirty six';

job ='driver';

console.log( name + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);

var lastName = prompt("What is your last name?");
console.log(lastName);


alert(lastName + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);
*/

//Lecture: operations
/* var now = 2017
var birthYear = now - 26;

birthYear = now - 26 * 2;

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;
console.log(ageMark);
console.log(ageJohn);
console.log(birthYear);
*/

// Lecture on If/else statements
/*
var name = 'Travis';
var age = 31;
var isMarried = 'yes';

if (isMarried === 'yes') {
   console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon');
}

isMarried = false;

if (isMarried) {
  console.log('Yes');
} else {
  console.log("No");
}

if(isMarried) {
  console.log('yes');
}


if (23 === "23") {
  console.log("something to print....")
} else {
  console.log('false');
}
*/

// Lecture: Boolean logic and Switch statements


// var age = 20;
//
// if (age >= 20 && age <= 30) {
//     console.log("John is a young man")
// } else if ( age < 20) {
//   console.log("John is a teenager")
// } else {
//   console.log('John is a man');
// }

// var job = 'teacher';
//
// job = prompt("what does John do?");
//
// switch (job) {
//   case 'teacher':
//     console.log('John teaches kids');
//     break;
//   case 'driver':
//    console.log("John drives a cab in Lisbon");
//     break;
//   case "cop":
//     console.log("John helps fight crime");
//     break;
//   default:
//     console.log("john does something else");
// }


/*
var firstPlayer = 'John ';
var secondPlayer = 'Corbin ';
var thirdPlayer = 'Travis ';

var johnHeight = 76 * 2.54;
var friendHeight = 60 * 2.54;
var thirdHeight = 53 * 2.54;

var johnAge = 30 * 5;
var friendAge = 29 * 5;
var thirdAge = 31 * 5;


var johnScore = johnHeight + johnAge;
var friendScore = friendHeight + friendAge;
var thirdScore = thirdHeight + thirdAge;

if (thirdScore > johnScore && thirdScore > friendScore) {
  console.log(thirdPlayer + 'WINS!!! with ' + thirdScore);
} else if (friendScore > johnScore && friendScore > thirdScore) {
  console.log(secondPlayer + "WINS!! with " + friendScore);
} else if (johnScore > friendScore && johnScore > thirdScore) {
  console.log(firstPlayer + "WINS! with " + johnScore);
} else {
  console.log('It\'s a draw!');
}
*/



// Lecture dealing with functions::::



// var ageTravis = calculateAge(1986);
// var ageMike = calculateAge(1969);
// var ageMarry = calculateAge(1948);
// console.log(ageMike);

/*
function calculateAge(yearOfBirth) {
     var age = 2016 - yearOfBirth;
    return age;
}

function yearsUnitlRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
      console.log(name + ' has ' + retirement + ' years to go');
  } else {
    console.log(name + " is already retired");
  }

}

yearsUnitlRetirement('Travis', 1986);
yearsUnitlRetirement('Corbin', 2001);
yearsUnitlRetirement('Mike', 1950);
*/


// Lecture: functions and statements

// function someFun(par) { /*statement */
//
// }
//
// var someFun = function(par) {  /*expression */
//
// }



/* Lecture: Arrays */

// var names = ["Travis","Bob","Brandon"];
// var years = new Array(1999,1976,1953);
//
// console.log(names[2]);
// names[1] = "Ben";
// console.log(years);
//
// var john = ["John", "Smith", 1990, "teacher", true];
//
// john.push("blue");
// john.pop();
// john.unshift("Mr");
// john.shift();
// console.log(john);
//
// john.indexOf("Smith");
//
// if (john.indexOf('teacher') === -1) {
//   console.log("John is a fake! He is not a teacher");
// } else {
//   console.log("John is a great teacher!");
// }




/* Lecture: Objects */
/* version 1.0
var john = {  /*Object literal
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
     return 2016 - this.yearOfBirth;
  }
};
*/

// console.log(john.calculateAge(1970));
// console.log(john.calculateAge());
//
// var age = john.calculateAge();
// john.age = age;
//
// console.log(john);

// console.log(john.lastName);
// console.log(john["name"]);

//
// var xyz = 'job';
// console.log(john[xyz]);
//
//


// john.lastName = "Miller";
// john['job'] = 'programmer';
//
// console.log(john);
//
//

//
// var jane = new Object();  /*Different way to write a object */
// jane.name = 'jane';
// jane.age = 19;
// jane.lastName = 'Smith';
// jane["happy"] = true;
// jane['job'] = 'teacher';
// jane['isMarried'] = true;
//
// console.log(jane);


// var john = {  /*Object literal*/
//   name: "John",
//   lastName: "Smith",
//   yearOfBirth: 1990,
//   job: "teacher",
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//     //  return 2016 - this.yearOfBirth;
//     this.age = 2016 - this.yearOfBirth;
//   }
// }
//
// john.calculateAge();
// console.log(john);
//

// var travis = {
//   handsome: "yes",
//   age: 31,
//   sad: false,
//   numbers: [1,2,3,4,5,6],
//   calculateAge: function () {
//     this.yearOfAge = 2017 - this.age;
//   }
// }
//
// travis.calculateAge();
// console.log(travis);


//Lecture on Loops //


// for (var i = 0; i < 2; i ++ ) {
//  var travis = {
//    handsome: "yes",
//    age: 31,
//    sad: false,
//    numbers: [1,2,3,4,5,6],
//    calculateAge: function () {
//      this.yearOfAge = 2017 - this.age;
//    }
//  }
// travis.calculateAge();
// console.log(travis);
// }

// for( var i = 0; i <= 10; i++) {
//
//  console.log(i);
// }

// var names = ["john", "jane", "mark", "marry", "bob"];
// //
// for(var i = 0; i < names.length; i ++){
//   console.log(names.reverse()[i]);
// }


// for (var i = names.length - 1; i >= 0; i--) {
// console.log(names[i])
// }


//while Loops//
// var names = ["john", "jane", "mark", "marry", "bob"];
// var i = 0;
// while (i < names.length)  {
//   console.log(names[i]);
//   i++;
//   }


// for (var i = 1; i <= 5; i ++) {
//
//
//   if (i === 3) {
//      continue;
//   }
//    console.log(i);
// }







function printFullAge(years) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < years.length; i++) {
    ages[i] = 2017 - years[i];
  }

  for (var i = 0; i < ages.length; i ++) {
    if (ages[i] >= 18) {
      console.log("person " + (i + 1) + " is " + ages[i] + " years old, and is full age" )
      fullAges.push(true);
    } else
      console.log("person " + (i + 1) + " is " + ages[i] + " years old, and is full age" )
      fullAges.push(false);
  }

  return fullAges;

}


var years = [2001,1985,1994,2014,1973];
var full_1 =  printFullAge(years);
var full_2 =  printFullAge([2012,2015,2018,2025]);




// var years = [1986,1999,2008,2015];
// var age = [];
// var fullAge = [];
//
// for (var i = 0; i < years.length; i ++) {
//   age[i] = 2017 - years[i]
// }
//
// console.log(age);
//
//
//
// for (var i = 0; i < age.length; i ++) {
//   if (age[i] < 18) {
//     fullAge[i] = false;
//   } else {
//     fullAge[i] = true;
//   }
// }
//
// console.log(fullAge);
//
// function printFullAge (fullAge) {
//   if (fullAge === 18) {
//     console.log("you're of age")
//   } else {
//     console.log("you're not of age");
//   }
// }
//
// printFullAge();
