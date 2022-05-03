//Initailize array of objects.

  //Find index of specific object using findIndex method.    
//   objIndex = myArray.filter((obj => obj.bit == false || true));
//   console.log(objIndex);
  
  //Log object to Console.
  
//   //Update object's name property.
//   myArray[objIndex].name = "Laila"
  
//   //Log object to console again.
//   console.log("After update: ", myArray[objIndex])
const state = [
    {
        userId: 1,
        id: 100,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 101,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 102,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 103,
        title: "et porro tempora",
        completed: true
    }]
    
    const newState = state.map(obj =>
        obj.id === "101" ? { ...obj, completed: true } : obj
    );
    console.log(newState);