<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>API</title>
</head>
<body>



<script type="text/javascript">
// using default browser fetch api

fetch('https://jsonplaceholder.typicode.com/users')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => {
            json.forEach( (data) => {
                document.write(
                    '<ul>',
                    list('Id',data.id),
                    list('Name',data.name),
                    list('Username',data.username),
                    list('Email',data.email),
                    list('Username',data.username),
                    '<li> <b> Address : </b>', 
                        '<ul>',
                        list('Street',data.address.street),
                        list('Suite',data.address.suite),
                        list('City',data.address.city),
                        list('Zip Code',data.address.zipcode),
                        '<li> <b> Geographical Location : </b>', '<ul>',
                            list('Latitude',data.address.geo.lat),
                            list('Longitude',data.address.geo.lng),
                        '</ul> </li>',
                    '</ul> </li>',
                    list('Phone',data.phone),
                    list('Website',data.website),
                    '<b> Company : </b>', '<ul>',
                            list('Name',data.company.name),
                            list('Catch Pharse',data.company.catchPharse),
                            list('BS',data.company.bs),
                         '</ul> </li>',   
                    '</ul>',
                    '<hr>'
                    );
            });
            // document.write(json);

    })   
    .catch(err => console.log('Request Failed', err)); // Catch errors

    var list = (name,str) => `<li> ${name}: ${str}</li>`;
</script>
</body>
</html>


