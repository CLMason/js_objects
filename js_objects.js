//Challenge 1-write a function that accepts an array of student objects and print all of the students' names and their cohorts.
let students = [
    {name:'Remy', cohort: 'Jan'},
    {name:'Genevieve', cohort: 'March'},
    {name:'Chuck', cohort: 'Jan'},
    {name:'Osmund', cohort: 'June'},
    {name:'Candace', cohort: 'Jul'},
    {name:'Boris', cohort: 'Aug'}
];

for (let i = 0; i <students.length; i++){
    let str = "Name: " + students[i].name + ", Cohort : " + students[i].cohort;
    // console.log(str);
}

// Challenge 2- write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name. 

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (let group in users){
     console.log(group.toUpperCase());
     for (let person in users[group]){
        let counter =1; 
        let firstName = users[group][person].first_name.toUpperCase();
        let lastName = users[group][person].last_name.toUpperCase();
		let nameCount = firstName.length + lastName.length;
		console.log(`${counter} - ${firstName}, ${lastName} - ${nameCount}`);
        counter++;
     }
 }