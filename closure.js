function x(){
    var x =5
    console.log(x);
    function y(){
        console.log(x);
    }
    y()
}
x()