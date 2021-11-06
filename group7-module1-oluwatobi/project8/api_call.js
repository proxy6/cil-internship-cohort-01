const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    if(request.status === 200){
        console.log(JSON.parse(request.response));
        var arrayValue = JSON.parse(request.response);
        var targetHTML = document.getElementById('target');
        var items = "";
        
        //Loop anduse arrayValue values
        for (i = 0; i <= arrayValue.length - 1; i++) {
            items += `<li> Name: ${arrayValue[i].name}; Username: ${arrayValue[i].username}; Email: ${arrayValue[i].email}; Phone Number: ${arrayValue[i].phone} </li>`; 

        targetHTML.innerHTML = "<ul>" + items + "</ul>";
        }
    } else {
        console.log(`error ${request.status}`);
    }
}

