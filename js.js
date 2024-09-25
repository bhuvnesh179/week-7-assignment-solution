fetch("https://api.github.com/users/bhuvnesh179")
        .then(async function(res){
            const response = await res.json();
           console.log(response);
        })