
async function fetchlists(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`Failed to fetch posts: ${responds.status}`)
        }
        return await response.json()
    } catch(e){
        console.log(e);
    }
}
function listsUsers(listItemContainerElementId){
    const listItemContainerElement = document.getElementById(listItemContainerElementId);
    if(!listItemContainerElement){
        return;
    }

    fetchlists().then(lists => {
        if(!lists){
            listItemContainerElement.innerHTML = "No Users"
            return;
        }
        for(const list of lists){
            listItemContainerElement.appendChild(listElement(list));
        }
    }).catch(e=>{
        console.log(e)
    })
}

function listElement(list){
    const listElement =document.createElement('li');
    listElement.innerText= `Hello Name is ${list.name}, My User Name is ${list.username}`;
    return listElement;

}

// 
//    .then(response => response.json())
//    .then(users => showUsers(users.results));

// showUsers = users => {
//     const usersUl = document.querySelector('#list');
//     users.forEach(user => {
//       const userList = document.createElement('li');
//       userList.innerText = `Hello Name is ${user.name}, My User Name is ${user.username}`;
//       usersUl.append(userList);
//     });
// }
// const p = document.getElementById("list")
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then(json => console.log(json))
    // .then((data) => {
    //     p.innerText = data
    // });