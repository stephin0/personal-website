let icon = document.querySelector(".hamburger-icon");
let links = document.querySelector(".profile-text");
let texts = document.querySelectorAll(".text");

function menutoggle(){

    icon.classList.toggle("active");
    links.classList.toggle("active");

    console.log("dsfghs");
}

icon.addEventListener("click",()=>{
    menutoggle();
})
console.log("asgh");

for (const text of texts) {
    text.addEventListener("click",()=>{
        menutoggle();
    })
    
}