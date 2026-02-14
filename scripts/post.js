const id= window.location.search.substring(4)
const containerone = document.querySelector(".up-side")
const containertwo = document.querySelector(".down-side")

fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then((rez)=>{
    if(!rez.ok){
        containerone.innerHTML='Ошибка запроса'
      }else{
        return rez.json()
    }
})
.then((rez)=>{
    rez.forEach(
        ({body,title})=>
    containerone.innerHTML+=`
       <div class="up-side">
        <h5 class="card-title"> ${title}</h5>
        <p class="card-text">${body}</p></div>
        <h5>Комментарии(5) </h5>
        `
)})
.catch(()=>(containerone.innerHTML=`сервер не отвечает`))


fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res)=>{
    if(!res.ok){
        containertwo.innerHTML='Ошибка запроса'
      }else{
        return res.json()
    }
})
.then((res)=>{
    res.forEach(
        ({id,body,name,email,title})=>
    containertwo.innerHTML+=`
        <div class="card">
        <div class ="card-header">${email} </div>
        <div class="card-body><h5 class="card-title">${name}</h5>
        <p class="card-text">${body} </p></div>
        `
)})
.catch(()=>(containertwo.innerHTML=`сервер не отвечает`))


