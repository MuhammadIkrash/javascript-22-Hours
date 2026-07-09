// let randomNumber = 0

// while (randomNumber < 0.5){
//     randomNumber = Math.random()
// }
// console.log(randomNumber);

// let todo = ["make dinner" , 'watch movie' , 'complete working']
// for (index = 0 ; index < todo.length ; index++){
// // todo.push("Hmm") 
//     const value = todo[index]
//     console.log(value);


// }

const arrOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let total = 0;
for (let i = 0; i < arrOfNumber.length; i++) {
    const num = arrOfNumber[i];
    total += num
}

console.log(total);
