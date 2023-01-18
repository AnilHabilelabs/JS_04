// 1. check the leap year and return true if input year is leap year.

let inputYear = Number(
  window.prompt("Enter Year to check if it is leap year or not ")
);
isLeap = (inputYear) => {
  if (inputYear % 4 == 0 && (inputYear % 400 == 0 || inputYear % 100 != 0)) {
    return true;
  }
  return false;
};
document.write(`${inputYear} is LeapYear ? ` + isLeap(inputYear) + "</br>");
console.log(`${inputYear} is LeapYear ? : ` + isLeap(inputYear));

// 2. write a funcition that would allow you to do this
//     var addSix = createBase(6);
//     addSix = createBase(10)-> 16
//     addSix = createBase(21)-> 27

// function createBase(base){
//     function addSix(add+base){
//       return add+six;
//     }
//     return addSix;
// }

// let addSix =createBase(6);

// 3. how would you check if a number is integer;
let inputNumber = Number(
  window.prompt("Enter a number to check it's a Integer or Not ?")
);
isInteger = (inputNumber) => {
  if (inputNumber === parseInt(inputNumber)) {
    return true;
  }
  return false;
};
document.write(
  `${inputNumber} is Integer ? ` + isInteger(inputNumber + "</br>")
);
console.log(`${inputNumber} is Integer ? ` + isInteger(inputNumber));
