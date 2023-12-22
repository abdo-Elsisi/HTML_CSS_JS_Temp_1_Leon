// variables and Consts
const menu = document.getElementById("menu-icon");
const list = document.getElementById("menu-list");

//progress bar scrolling event
window.addEventListener("scroll", () => {
    const progressbar = document.querySelector(".progress-bar");
    const scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPosition = window.scrollY; // Current scroll position
    const progress = scrollPosition / scrollHeight; // Percentage of scrolled space
  
    progressbar.style.width = `${progress * 100}%`; // Set width as percentage
});
  
//menu button click event
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