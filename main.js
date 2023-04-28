let menuBtn = document.querySelector(".burger-menu_button");
let menu = document.querySelector(".burger-menu_nav");
let navbar = document.getElementById("navbar");

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("working")
})

window.onscroll = function(){
    scroll();
};

function scroll(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop > 50){
        navbar.style.top = "0";
    }else{
        navbar.style.top = "-200px";
    }
}
