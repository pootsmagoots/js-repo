
//Lecture varianbles
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

/*
var age = 20;

if (age >= 20 && age <= 30) {
    console.log("John is a young man")
} else if ( age < 20) {
  console.log("John is a teenager")
} else {
  console.log('John is a man');
}

var job = 'teacher';

job = prompt("what does John do?");

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
   console.log("John drives a cab in Lisbon");
    break;
  case "cop":
    console.log("John helps fight crime");
    break;
  default:
    console.log("john does something else");
}
*/

var firstPlayer = 'John ';
var secondPlayer = 'Corbin ';
var thirdPlayer = 'Travis ';

var johnHeight = 56 * 2.54;
var friendHeight = 60 * 2.54;
var thirdHeight = 63 * 2.54;

var johnAge = 30 * 5;
var friendAge = 29 * 5;
var thirdAge = 31 * 5;


var johnScore = johnHeight + johnAge;
var friendScore = friendHeight + friendAge;
var thirdScore = thirdHeight + thirdAge;

if (thirdScore > johnScore && thirdScore > friendScore) {
  console.log(thirdPlayer + 'WINS!!!');
} else if (friendScore > johnScore && friendScore > thirdScore) {
  console.log(secondPlayer + "WINS!!");
} else {
  console.log(firstPlayer + "WINS!!!!");
}
