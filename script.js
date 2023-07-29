// alert("Merhaba");
// console.log([1,2,3]);
// console.error("hata oluştu!!!");
// console.warn("bir uyari oluştu!!");

// ctrl + k + c

// var age;
// console.log(age);

// age = 20;
// console.log(age);

// var fullName = 'serdal';
// console.log(fullName);

// fullName = 'samet';
// console.log(fullName);

// // degısken tanımlama kuralları

// // sayısal ıfade ıle baslayamaz
// //  ama $ ve _ ıle baslayabılır

// var $variable = 12;
// var _variable = 13;

// // var, let, const
// let city = 'balikseir';

// const email = 'abc@gmail.com';
// email = 'acd';
// // console.log(email);

// *********************************************************

// Ders:3 DEğişken tipleri

// primitive

  //String
//   let firstName = 'Serdal';
//   console.log(typeof firstName);

//   //Number
//   let age = 14;
//   let money = 50.8;
//   console.log(typeof money);

//   //Boolean
//   let isActive = true;
//   console.log(typeof isActive);

//   //null
//   let job = null;
//   console.log(typeof null);

//   //undefined 
//   let car;
//   console.log(typeof car);

// // reference types - objects

//   //Array
//   let names = ['ali','ahmet','can'];
//   console.log(typeof names);

//   //object

//   let address = {
//     city: 'izmir',
//     country: 'Turkey'
//   };
// console.log(typeof address);

// //function

// var calculateAge = function(){
//   return 0;
// }
// console.log(typeof calculateAge);

// Ders:+ Tür dönüşümü

//String To number

  let num01 = '5';
  let num02 = '10';

  console.log(num01+num02);

  num01 = Number('5');
  num02 = Number('10');

  console.log(num01+num02);

  // number to string 

  let val;
  val = String(10);
  console.log(typeof val);

  //bool to string

  val = String(true);
  console.log(typeof val);
  console.log(val.length);

  // DAte to String

  val = new Date();
  console.log(typeof val);

  val = String(new Date().getHours());
  console.log(val);

  val = String(typeof new Date().getMinutes);
  console.log(typeof val);

  // array to string

  val = String([1,2,3,4,5]);
  console.log(val);
  console.log(typeof val);
  console.log(val.length);

  // String to number

  val = Number('10');
  val = Number(true);
  val = Number(false);
  val = Number(null);
  val = Number('a');
  val = Number([1,2,3,4]);

  console.log(val);
  console.log(typeof val);
  console.log(val.toFixed(3));

  // parseInt
  val = parseInt('10');
  val = parseInt('10.5');
  val = parseFloat('10.5');


  console.log(val);
  console.log(typeof val);
  console.log(val.toFixed(3));

  //example01

  const yearofBirth = 1986;

  console.log(new Date().getFullYear()-yearofBirth);