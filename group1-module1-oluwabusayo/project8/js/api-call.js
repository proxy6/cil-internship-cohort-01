const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    if(request.status === 200){
        console.log(JSON.parse(request.response));
        var arr = JSON.parse(request.response);
        var cont = document.getElementById('container');
        var items = "";
        
        //Loop anduse arr values
        for (i = 0; i <= arr.length - 1; i++) {
            items += `<li> Name: ${arr[i].name}, Username: ${arr[i].username}, Email: ${arr[i].email} </li>`; 

        cont.innerHTML = "<ul>" + items + "</ul>";
        }
    } else {
        console.log(`error ${request.status}`);
    }
}

