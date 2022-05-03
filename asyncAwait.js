let doSomethingAsync = () =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('you are done')
        },4000)
    })
}
const doSomething = async ()=>{
    console.log(await doSomethingAsync());
}
console.log('before');
doSomething()
console.log('after');