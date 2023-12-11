// variables nad Consts
const menu = document.getElementById("menu-icon");
const list = document.getElementById("menu-list");

//add Events
menu.addEventListener("click",function(){
    list.style.display = "block";
});

document.addEventListener("click",function(event){
    const targetEle = event.target;
    if(targetEle.classList.contains("menu-icon"))
        console.log("YESS");
    else
        list.style.display = "none";
});

// scroll to top function
function scrolltoTop() {
    let currOffsetY = scrollY;
    const scrollStep = 100000;
    const scrollInt = setInterval(function(){
        //scroll to top
        const currScrollY = scrollY;
        if(currScrollY == 0) 
            clearInterval(scrollInt);
        else
            scrollTo(0,currScrollY-scrollStep);
        console.log(currScrollY);

    },50);
}