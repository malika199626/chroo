const id= window.location.search.substring(4)
const containerone = document.querySelector(".up-side")
const containertwo = document.querySelector(".down-side")

fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`).then((rez)=>{
    if(!rez.ok){
        containerone.innerHTML='Ошибка запроса'
      }else{
        return rez.json()
    }
})
.then((rez)=>{
    rez.forEach(
        ({name,username,email,phone,website})=>
    containerone.innerHTML+=`
       <div class="up-side">
        <h5 class="card-title"> ${name}</h5>
        <p class="card-text">${username}</p>
        <p class="card-text">${email}</p>
        <p class="card-text">${phone}</p>
        <p class="card-text">${website}</p></div>
        <div><h5 class="card-title"> Посты пользователя (10)</h5></div>
        `
)})
.catch(()=>(containerone.innerHTML=`сервер не отвечает`))


fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res)=>{
    if(!res.ok){
        containertwo.innerHTML='Ошибка запроса'
      }else{
        return res.json()
    }
})
.then((res)=>{
    res.forEach(
        ({id,body,title})=>
    containertwo.innerHTML+=`<div class="col">
      <div class="card" style="width: 18rem;">
        <img src="../img/2.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title.length>20? title.substring(0,20) + "..." : title}</h5>
            <p class="card-text">${body.length>100? body.substring(0,100) + "..." : body}</p>
            <a href="post.html?id=${id}" class="btn btn-primary">
            Go somewhere
            </a>
          </div>
      </div>
    </div>`
)})
.catch(()=>(containertwo.innerHTML=`сервер не отвечает`))


