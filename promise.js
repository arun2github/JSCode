const mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('your promise is resolved')
    },4000)
    
})
mypromise
.then((resolve)=>{
    console.log(resolve);
})
.catch((err)=>{
    console.log(err);
})