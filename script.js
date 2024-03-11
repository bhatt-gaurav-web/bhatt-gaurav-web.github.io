let mode = document.querySelector(".mode");
let body = document.querySelector("body");
let photo = document.querySelector(".photo");
let table = document.querySelector("table");
let h1 = document.querySelector("h1");
let currmode = "light"; 
mode.addEventListener("click",() => {
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        photo.classList.add("photos");
        h1.classList.add("underline");
        mode.classList.add("mode-icon");
        table.classList.add("tab-border");

    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
        photo.classList.remove("photos");
        h1.classList.remove("underline");
        mode.classList.remove("mode-icon");
        table.classList.remove("tab-border");
    }
})