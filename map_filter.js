const numbers = [3, 4, 5, 6, 7, 9];
const output = [];
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

          //   map    //

// numbers.map(function(element, index, array){
//     console.log(element, index, array );
// });

// const result = numbers.map(function(element){
//     return element*element;
// })

// const square = element => element*element;

// const result = numbers.map(x => x * x);


          //   filter   //

const bigger = numbers.filter(x => x>5);
console.log(bigger);