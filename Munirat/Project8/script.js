function fetchData(api) {
    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const userinfo = data.map(user => {
                return `
                
                 <li> ID : ${user.id}</li>
                 <li> Name : ${user.name} </li>
                 <li> Username : ${user.username} </li>
                 <li> Email : ${user.email} </li>
                <li> Address :  Street: ${user.address.street}, Suite: ${user.address.suite}, City: ${user.address.city}, 
                     Zipcode: ${user.address.zipcode}
                     
                </li>
                <li> Phone: ${user.phone} </li>
                <li> Website : ${user.website} </li>
                <li> Company : ${user.company.name} </li>

                
                `
            })
            document.getElementById("userinfo").innerHTML = userinfo
            // Handle response we get from the API
        })
        .catch(function(error){
            console.log(error)
        })
}

fetchData('https://jsonplaceholder.typicode.com/users') 


