//1. let and const
const hubby = 'Omor sani';
let phone = 'iphone 15';
//2. defult
//5. spread or three dots (... )
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
//console.log(biggest);
//3. templete string
const myNotes = `I am a coder ${hubby}`

//4. arrow function
//function square(x) {
//    return x * x;
//}
const square = x => x * x;
console.log(square(8));
