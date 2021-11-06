function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then(data => {
            const users = data.map(user => {
                return `<h4> ${user.id})    Name: ${user.name} Email: ${user.email} Address: ${user.address.city}</h4>`
            })
            document.querySelector("#display").innerHTML = users
        })
        .catch(err => {
            console.log(err)
        })
}

fetchData()