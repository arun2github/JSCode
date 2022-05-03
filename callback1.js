let myname = (name)=>{
    console.log('My name is ' + name);

}
let useThisname = (cb)=>{
    cb('Arun')
}
useThisname(myname)