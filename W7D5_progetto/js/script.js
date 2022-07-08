let url = "users.json";
let users = []
var userArea = document.querySelector('#userArea')

async function getUsers() {

    await fetch(url).then(res => res.json()).then((res) => {
        users = res.users;
    })

    users.forEach((e) => {
        var UserCard = document.createElement("div");
        userArea.appendChild(UserCard);
        UserCard.classList.add('box')

        if (e.gender == "m") {
            let icon = document.createElement("p");
            icon.innerHTML = '<ion-icon name="male"></ion-icon>';
            UserCard.appendChild(icon);
        } else {
            let icon = document.createElement("p");
            icon.innerHTML = '<ion-icon name="female"></ion-icon>';
            UserCard.appendChild(icon);
        }
        var username = document.createElement("p");
        username.innerHTML = e.name;
        UserCard.appendChild(username);

        var mail = document.createElement("p");
        mail.innerHTML = e.email;
        UserCard.appendChild(mail);

        var info = document.createElement("div");
        UserCard.appendChild(info);
        info.classList.add('info')
        let phone = document.createElement("p");
        let site = document.createElement("p");
        phone.innerHTML = "Phone: " + e.phone;
        site.innerHTML = "Website: " + e.website;
        info.appendChild(site);
        info.appendChild(phone);

        UserCard.addEventListener("click", showInfo)
        function showInfo() {
            info.classList.toggle("seetrow")
        }
    })

}

getUsers();



// ! inserimento

let nav = document.querySelector('nav')
let addUser = document.querySelector('.addUser')

function showAddUser() {
    addUser.classList.toggle("visible")
}

nav.addEventListener('click', showAddUser)

//! update json

const radioButtons = document.querySelectorAll('input[name="gender"]');
btn.addEventListener("click", () => {
    let selectGender;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectGender = radioButton.value;
            break;
        }
    }
})

let form = document.querySelector("form")
form.addEventListener("submit", addUser)

let postOption = {
    method: "POST",
        headers: {
        'Accept': 'Application/json',
            'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: document.getElementById('name').value, email: document.getElementById('name').value, gender: selectGender })
}
function addUser(id) {
    fetch("http://localhost:3000/users", postOptions)
}