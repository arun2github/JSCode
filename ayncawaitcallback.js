let posts = [
    {title: "one",body:"my 1st post"},
    {title: "two",body:"my 2nd post"}
]

function getPosts(){
    setTimeout(()=>{
        let output = ''
        posts.forEach((post,index)=>{
            output += post.title
            console.log(output);
        }) 
        return output  
    },1000)
}
    

console.log(getPosts());