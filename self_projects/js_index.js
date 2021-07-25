/*
const toggleButton = document.getElementsByClassName("toggle-button")[0];

const navbarlinks = document.querySelector(".nav-links");


toggleButton.addEventListener("click", () =>{
    //console.log(navbarLinks.classlist.toggle("active"));
    var element = document.querySelector(".nav-links");
    if(element.style.display == "flex"){
        element.style.display = "none";
    }else{
        element.style.display = "flex";
    }
    
    
})
//getElementsByClassName("nav-links")[0]

//.nav-links
*/

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarlinks = document.getElementsByClassName("nav-links")[0]
console.log(navbarlinks)
const title = document.getElementById("web-title");
toggleButton.addEventListener("click", () =>{
    navbarlinks.classList.toggle("active");
    if(title.style.display === "none"){
        title.style.display = "block";
    }else{
        title.style.display = "none";
    }
})

//navbarLinks.classlist.toggle("active")