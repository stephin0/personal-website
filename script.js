let icon = document.querySelector(".hamburger-icon");
let links = document.querySelector(".profile-text");
let texts = document.querySelectorAll(".text");
let sections = document.querySelectorAll("section");

function menutoggle(){

    icon.classList.toggle("active");
    links.classList.toggle("active");

    console.log("dsfghs");
}
function menuremove(){
    icon.classList.remove("active");
    links.classList.remove("active");
}

icon.addEventListener("click",()=>{
    menutoggle();
})
console.log("asgh");

for (const text of texts) {
    text.addEventListener("click",()=>{
        menutoggle();
    })
    sections.forEach(section => {
        section.addEventListener("click",()=>{
            menuremove();
        })
    });
    
    
}
body.addEventListener("scroll",()=>{
    body.style.backgroundColor = "grey";
})
