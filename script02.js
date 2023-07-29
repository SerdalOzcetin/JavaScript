// operatorler

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;


// 1- Aritmetik operatorler

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;
val = ++d;
val = --d;
val = d--;

// 2- Atama operatorleri
val = a;
val += a; // val = val + a;
val -= a; // val = val - a;
val *= a; // val = val * a;
val /= a; // val = val / a;
val %= a; // val = val % a;

// 3- Karşılaştırma opertorleri

val = a==b;
val = b==c;
val = a===b; // değer & type kontrolü
val = b!==c;
val = a <=b;

// 4- Mantıksal Operatorler

  // &&(and)

  val = (a>b) && (a>c) ;
   
  // ||(or)

  val = (a>b) || (a<c);

  // !(Not)



console.log(val);
console.log(typeof val);

// dateserdal

let date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay());

let birthday = new Date(1991,9,21);
console.log(birthday);
console.log(date.getFullYear()-birthday.getFullYear());

var prompt = prompt("please enter your name!");
console.log(prompt);