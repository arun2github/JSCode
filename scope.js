function x(){
    let a = 10;
    {
        let a = 20
        //console.log(b);
        console.log(a);
    }
    console.log(a);
}
//console.log(a);
x()