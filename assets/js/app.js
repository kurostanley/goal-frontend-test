// fetch('http://localhost:3000/api/user/2/goals/3')
//     .then(res => res.json())
//     .then(data => console.log(data))

var headers = {
    "Content-Type": "application/json",                                                                                                
 }
 

var data = {
	"userName" : "linz",
	"userEmail" : "aab@aaa",
	"userPassword" : "1234567"
}

fetch("https://goalapi222.herokuapp.com/api/login", {
    withCredentials: true,
    credentials: 'include',
    method: "POST",
    headers: headers,
    body:  JSON.stringify(data)
})
    .then(function(response){ 
        return response.json(); 
    })
    .then(function(data){ 
        console.log(data)
    });


// fetch("https://localhost:3000/api/login", {
//     withCredentials: true,
//     credentials: 'include',
//     method: "POST",
//     headers: headers,
//     body:  JSON.stringify(data)
// })
//     .then(function(response){ 
//         return response.json(); 
//     })
//     .then(function(data){ 
//         console.log(data)
//     });
