// (Javascript)  

const fetchAPIData = async () => {

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // API URL goes into the brackets

const result = await response.json();

const data = result.data;

console.log( data) // Output the data of the API to the console.

}

// Call the function
