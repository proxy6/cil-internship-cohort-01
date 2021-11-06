function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => (res.json()))
        .then(data => {
            const users = document.querySelector('.users')
            for (const user of data) {
                console.log(user.name, user.email)
                const userDiv = document.createElement('div')
                userDiv.className = `user_${user.id}`
                const nameDiv = document.createElement('div')
                nameDiv.className = 'name'
                nameDiv.innerText = user.name
                const emailDiv = document.createElement('div')
                emailDiv.className = 'email'
                emailDiv.innerText = user.email
                userDiv.appendChild(nameDiv)
                userDiv.appendChild(emailDiv)
                users.appendChild(userDiv)
            }
        })
        .catch(err => console.log(err.message))
}

getUsers()
