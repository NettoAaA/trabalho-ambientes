
    const body = document.querySelector("body")
    body.style.overflowX = "hidden"

    const burguerMenu = document.querySelector(".burguer-menu") 
    const offScreenMenu = document.querySelector(".offScreenMenu") 
    burguerMenu.addEventListener("click", ()=>{
    burguerMenu.classList.toggle("active")
    offScreenMenu.classList.toggle("active")
    if(burguerMenu.classList.contains("active"))
        body.style.overflowY = "hidden"
    if(!burguerMenu.classList.contains("active"))
        body.style.overflowY = "scroll"

})