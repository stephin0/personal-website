let icon = document.querySelector(".hamburger-icon");
let links = document.querySelector(".profile-text");
let texts = document.querySelectorAll(".text");
let sections = document.querySelectorAll("section");
let projectimg = document.querySelectorAll(".project-picture-cont img");
let popup = document.querySelector(".popup-cont");
let popuptwo = document.querySelector(".popup-cont-two");
let popupthree = document.querySelector(".popup-cont-three");
let popupfour = document.querySelector(".popup-cont-four");
let closepopup = document.querySelectorAll(".popup-area-heading i");

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

projectimg.forEach(img => {
    img.addEventListener("click",()=>{
        if(img.getAttribute("id")=="projectimg-amazon"){
            popup.classList.add("active");
        }
        else if(img.getAttribute("id")=="projectimg-flipkart"){
            popuptwo.classList.add("active");
        }
        else if(img.getAttribute("id")=="projectimg-rps"){
            popupthree.classList.add("active");
        }
        else if(img.getAttribute("id")=="projectimg-tiktak"){
            popupfour.classList.add("active");
        }
    })
    closepopup.forEach(close => {
        close.addEventListener("click",()=>{
            if(img.getAttribute("id")=="projectimg-amazon"){
                popup.classList.remove("active");
            }
            else if(img.getAttribute("id")=="projectimg-flipkart"){
                popuptwo.classList.remove("active");
            }
            else if(img.getAttribute("id")=="projectimg-rps"){
                popupthree.classList.remove("active");
            }
            else if(img.getAttribute("id")=="projectimg-tiktak"){
                popupfour.classList.remove("active");
            }
        })
    });
});

//// form ////

$(document).ready(function(){
    $("#form").validate({
        rules:{
            name:{
                required:true,
                minlength:5
            },
            email:{
                required:true,
                email:true,
            },
            textarea:{
                required:true
            }
        },
        messages:{
            name:{
                required:"Please enter your name"
            },
            email:{
                required:" Please enter your email"
            }
        },
        submitHandler: function(form){
            form.submit();
        }
    })
})