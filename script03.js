// Prompt usage

// var val = prompt("please enter your name!");
// var val02 = prompt("please enter your surname!");

// console.log(val);
// console.log(val02);

// loops

// let val03 = '';

// for(let i = 10; i >= 0; i--){

//   for(let j = 0; j <= i; j++){
//     val03 += '*';
//   }

//   val03 += '\n'; 

// }

// console.log(val03);

// loops ın arrays and Objects

let cars = ['Bmv', 'Mercedes', 'Toyota'];
let people = [
  {firstName : 'Serdal', lastName : 'Özçetin'},
  {firstName : 'Senem', lastName : 'Özçetin'},
  {firstName : 'Samet', lastName : 'Özçetin'}
]


// for-in

// for (let i in cars) {
  
//     console.log(`index : ${i} value : ${cars[i]}`);

  
// }

// for each

cars.forEach(function(item){
console.log(item);
});

for (let i in people) {
  console.log(`index : ${i} value : ${people[i].firstName}`);
}

people.forEach(function(item){

console.log(item.firstName)

});