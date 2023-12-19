fetch("http:jsonplacdeholder.typicode.com/user/1")
 .then((response)=>{
    console.log(reponse.status);
    return response.json();
 })
 .then((data)=>{
    console.log();
 })