//Task1
function sayHello(){
console.log("Hello after 2 seconds");
}
setTimeout(sayHello, 2000);

//Task2
console.log("A")
setTimeout(()=>{
console.log("B")
}, 0);
console.log("C")

//Task3
function loadData(callback){
return new Promise(resolve =>{
setTimeout(()=> {
resolve("Data loaded")
}, 1000);
});
}
loadData().then(data=> console.log(data));

//Task4
function getUser() {
   return new Promise(resolve => {
       setTimeout(() => resolve("User"), 1000);
    });
}

function getPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${user}'s posts`), 1000);
    });
}
getUser()
.then(user=>{
console.log("User:",user);
return getPosts(user);
})
.then(posts=>{
console.log("Posts:",posts);
})

//Task5

async function fetchData(){
try {
const user = await getUser();
console.log("User:",user);

const posts= await getPosts(user);
console.log("Posts:", posts);
}
catch (error){
console.error("Error:", error);
}
}
fetchData();