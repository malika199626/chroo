const usersContainer = document.querySelector(".users-container")

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((res)=> renderUsers(res))

const renderUsers = (users) =>{
    usersContainer.innerHTML=""
    users.forEach(
        ({id, name, username,email, phone,website})=>{

            const cardOne=document.createElement("div")
            cardOne.classList.add("card", "w-75", "mb-3")

            const cardTwo = document.createElement("div")
            cardTwo.classList.add("card-body")
            cardOne.append(cardTwo)

            const nameq = document.createElement("h5")
            nameq.classList.add("card-title")
            nameq.innerText=name
            cardTwo.append(nameq)

            const usernameq = document.createElement("p")
            usernameq.classList.add("card-text", "username")
            usernameq.innerText=username

            cardTwo.append(usernameq)

            const emailq = document.createElement("p")
            emailq.classList.add("card-text", "email")
            emailq.innerText = email

            cardTwo.append(emailq)
                        
            const phoneq = document.createElement("p")
            phoneq.classList.add("card-text", "phone")
            phoneq.innerText=phone

            cardTwo.append(phoneq)
     
            const websiteq = document.createElement("p")
            websiteq.classList.add("card-text", "website")
            websiteq.innerText=website

            cardTwo.append(websiteq)

            const link = document.createElement("a");
            link.href = `pages/user.html?id=${id}`;
            link.classList.add("btn", "btn-primary");
            link.textContent = "Перейти на страницу пользователя";
            cardTwo.append(link);
            usersContainer.append(cardOne)
})}
