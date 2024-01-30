let sliderText = document.getElementById("slider-text");
let sliderText1 = document.getElementById("slider-text-1");

function change1() {
    sliderText.innerText = "BORA HOTEL";
    sliderText1.innerText = "RESERVE ROOM FOR FAMILY VACTION";
}

function change2() {
    sliderText.innerText = "DELUXE HOTEL";
    sliderText1.innerText = "MAKE YOUR VACATION COMFORTABLE";
}

function change3() {
    sliderText.innerText = "LUXE HOTEL";
    sliderText1.innerText = "A BEST PLACE TO ENJOY YOUR  LIFE ";






}











let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector(".sidebar");
let sidebarText = document.querySelector(".sidebar-text");

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');

    if (sidebar.style.width === "300px") {
        sidebar.style.width = "0px";
        sidebarText.style.transform = "translateX(0)";
        sidebarText.style.transform = "translateY(100px)";


        
    } else {
        sidebar.style.width = "300px";
        sidebarText.style.transform = "translateX(0px)";
        sidebarText.style.transform = "translateY(100px)";
    
    }
};



// let sidebar = document.getElementById("#menuToggle");




// sidebar?.onclick = function(){

// }


// let navbar = document.getElementById("navbar");
// let imageIndex = 0;
// const images = [
//     "url('images/slider1.jpg')", 
//     "url('images/slider2.jpg')",
//     "url('images/slider3.jpg')",
// ];

// function changeBackground() {
//     navbar.style.backgroundImage = images[imageIndex];
//     imageIndex = (imageIndex + 1) % images.length;
// }

// setInterval(changeBackground, 4000);

