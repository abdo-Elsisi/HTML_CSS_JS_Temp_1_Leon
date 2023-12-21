// variables and Consts
const menu = document.getElementById("menu-icon");
const list = document.getElementById("menu-list");

//add Events
menu.addEventListener("click",function(){
    list.style.display = (list.style.display == "none") ? "block" : "none";
});

// scroll to top function
function scrollPage() {
    const scrollStep = 10;
    const scrollInt = setInterval(function(){
        //scroll to top
        if(scrollY == 0) 
            clearInterval(scrollInt);
        else
            scrollTo(0,scrollY-scrollStep);
    },1);
}