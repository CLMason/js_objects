//1
// console.log(hello);                                   
// var hello = 'world';   
//===========PREDICTION OUPUT==========
    //undefined
//===========ACTUAL OUPUT==============
    //undefined

//2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
//===========PREDICTION OUPUT==========
    // magnet
//===========ACTUAL OUTPUT=============
    // magnet

// 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
//===========PREDICTION OUPUT==========
    // super cool 
//===========ACTUAL OUTPUT=============
    // super cool

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
//===========PREDICTION OUPUT==========
    // chicken      half-chicken       
//===========ACTUAL OUTPUT=============
    // chicken      half-chicken

// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//===========PREDICTION OUPUT==========
    //    chicken   fish    fish    fish
//===========ACTUAL OUTPUT=============
    // Typeerror-mean is not a function. The variable name mean got hoisted to the top, and we tried to invoke it before we assigned the function to it. 


// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
//===========PREDICTION OUPUT==========
    //undefined     type error 
//===========ACTUAL OUTPUT=============
    // undefined    rock    r&b     disco

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
//===========PREDICTION OUPUT==========
    // san jose     seattle     burbank     san jose
//===========ACTUAL OUTPUT=============
    // san jose     seattle     burbank     sane jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//===========PREDICTION OUPUT==========
    // name: Chicago, students: 65, hiring: true
//===========ACTUAL OUTPUT=============
    //  name: Chicago, students: 65, hiring: true
    // error-assignment to constant variable