<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    CALLING AN API
https
    <SCript>
    const fetchAPIData = async () => {

const response = await fetch("https://jsonplaceholder.typicode.com/users");

const result = await response.json()

const data = result.data;

console.log( data) // Output the data of the API to the console.

}

// Call the function

fetchAPIData()

    </SCript>
</body>
</html>












