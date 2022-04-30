let panels=document.querySelectorAll(".panel")
function removeactiveclass(){   //to remove the active class
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}
panels.forEach((panel)=>{  //to add the active class
    panel.addEventListener("click",()=>{
        removeactiveclass()
        panel.classList.add('active')
    })
})