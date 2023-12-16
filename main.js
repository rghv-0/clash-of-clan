let nav_links = document.querySelector(".nav-links");
let menu = document.querySelector(".menu");
let nav_main_logo = document.querySelector(".nav-main-logo");


menu.addEventListener("click", () => {
    nav_links.classList.toggle("active");
    
    menu.style.display = "none";

    if (nav_links.active){
        nav_main_logo.classList.add("col-1");

    }
    else{
        nav_main_logo.classList.remove("col-10");

    }

    console.log();
})