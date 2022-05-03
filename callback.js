let mycallback = (data)=>{
    console.log('got data : ' + data);
}
let useItNow = (cb)=>{
    cb('got it')
}
useItNow(mycallback)
