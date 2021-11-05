const fetchAPIData = async () => {

    const response = await fetch( API URL);
    
    const result = await response.json()
    
    const data = result.data;
    
    console.log( data) // Output the data of the API to the console.
    
    }
    
    // Call the function
    
    fetchAPIData()