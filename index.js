const navdesign=document.querySelector(".mobile-icon");
const navbar=document.querySelector("nav");

const handleclick = () => {
navbar.classList.toggle("active")

}
navdesign.addEventListener("click",handleclick)