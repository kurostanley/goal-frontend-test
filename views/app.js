// fetch('http://localhost:3000/api/user/2/goals/3')
//     .then(res => res.json())
//     .then(data => console.log(data))

var headers = {
    "Content-Type": "application/json",                                                                                                
    "Access-Control-Origin": "*",
 }
 

var data = {
	"userName" : "linz",
	"userEmail" : "aab@aaa",
	"userPassword" : "1234567"
}

fetch("https://localhost:3000/api/login", {
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

// fetch("http://localhost:3000/api/user/1/goals", {
//     credentials: 'include',
//     method: "get",
//     headers: headers,
// })
// .then(function(response){ 
//     return response.json(); 
// })
// .then(function(data){ 
//     console.log(data)
// });


// var data = JSON.stringify({
//     "userName": "linz",
//     "userEmail": "aab@aaa",
//     "userPassword": "1234567"
//   });
  
//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
  
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       console.log(this.responseText);
//     }
//   });
  
//   xhr.open("POST", "http://localhost:3000/api/login");
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.setRequestHeader("cache-control", "no-cache");
//   xhr.setRequestHeader("postman-token", "785c8a63-bba8-af9a-a0b0-15a6635dc9fa");
  
//   xhr.send(data);
