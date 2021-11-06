//for get request

const call_api1 = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    

    //extract JSON from the http response
    
    const myJson = await response.json(); 
    
    console.log(myJson)
    let table = 
        `
            <h4>Users</h4>
            <ul>
                
            </ul>
        `;
    
    
    
    
    for (let r of myJson) {
        table +=`
        <li><b> ${r.name}</b>
            <ul>
                <li>id: ${r.id}</li>
                <li>phone: ${r.phone}</li>
                <li>username: ${r.username}</li>
                <li>website: ${r.website}</li>
                <li>email: ${r.email}</li>
                <li>Address
                    <ul>
                        <li>city: ${r.address['city']}</li>
                        <li>geo: (lat: ${r.address['geo']['lat'] } and lng: ${r.address['geo']['lng'] })
                            
                        </li>
                        <li>street : ${r.address['street']}</li>
                        <li>suite : ${r.address['suite']}</li>
                        <li>zipcode : ${r.address['zipcode']}</li>
                    </ul>

                </li>
                <li> Company
                    <ul>
                        <li>bs : ${r.company['bs']}
        
                        </li>
                        <li>
                            catchPhrase : ${r.company['catchPhrase']}
                        </li>
                        <li>name : ${r.company['name']}</li>
                    </ul>
                </li>    
            </ul>
        </li>
        `
        
    }
    document.getElementById('demo').innerHTML = table;
    
    
};


function toggle(state) {
    if (state == 'day') {
        document.getElementById('api-result').style.backgroundColor = 'white'
        document.getElementById('api-result').style.color = 'black'
        document.getElementById('day').style.display = 'none'
        document.getElementById('night').style.display = 'block'
    }
    else if (state == 'night') {
        document.getElementById('api-result').style.backgroundColor = 'black'
        document.getElementById('api-result').style.color = 'white'
        document.getElementById('day').style.display = 'block'
        document.getElementById('night').style.display = 'none'
    }
}