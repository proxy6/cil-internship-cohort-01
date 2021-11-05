fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => appendData(data));

function appendData(data) {
  var mainContainer = document.getElementsByClassName("wrapper");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Name: " + data[i].name;
    mainContainer.appendChild(div);
  }
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("Data");
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    var ul = document.createElement("ul");
    var div = document.createElement("div");
    div.innerHTML = " <div> Name: " + data[i].name + "</div>" + " <div> Email: " + data[i].email + "</div>";
    
    mainContainer.appendChild(ul).appendChild(li).appendChild(div);
  }
}
