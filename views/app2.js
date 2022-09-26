function show(){ 
    var headers = {
        "Content-Type": "application/json",                                                                                                
        "Access-Control-Origin": "*",
    }

    fetch("https://localhost:3000/api/user/1/goals", {
        credentials: 'include',
        headers: headers,
    })
    .then(function(response){ 
        return response.json(); 
    })
    .then(function(data){ 
        console.log(data)
    });
}