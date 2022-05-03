// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }
// let x  =fib(5)
// console.log(x)

// var fib = function(n) {
//     if (n === 1) {
//       return [0, 1];
//     } else {
//       var arr = fib(n - 1);
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//       return arr;
//     }
//   };
  
  

  function fib(n){
      if(n===1){
          return [0,1]
      }else{
          let arr = fib(n-1)
          arr.push(arr[arr.length-1]+ arr[arr.length-2])
          return arr
      }
  }
  console.log(fib(5));