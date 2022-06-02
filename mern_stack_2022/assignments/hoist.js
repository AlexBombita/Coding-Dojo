// GIVEN
var example = "I'm the example!";
console.log(example);

// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";    

var hello = 'world'; 
console.log(hello);                                   
                                


var needle = 'haystack';
test();
function test(){
var needle = 'magnet';
console.log(needle);
}

var brendan = 'super cool';
function print(){
brendan = 'only okay';
console.log(brendan);
}
console.log(brendan);

var food = 'chicken';
console.log(food);
eat();
function eat(){
food = 'half-chicken';
console.log(food);
var food = 'gone';
}

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);






