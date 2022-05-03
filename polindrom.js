// function reverse(arr){
//     let a =[]
//     let b = []
//     for(i=arr.length-1;i>=0;i--){
//         a.push(arr[i])     
//    }
//    console.log(a);
//     if(arr === a){
//         return 'polindrom'
//     }else{
//         return 'not a polindrom'
//     }
   
// }
// let arr = [1,2,1]
// console.log(reverse(arr));

function polindrom(s){
    let len = s.length
    let mid = Math.floor(len/2)
    for(i=0;i<mid;i++){
        if(s[i] !== s[len-1-i]){
            return false
        }
    }
    return true
}
let x = polindrom('adam')
console.log(x);