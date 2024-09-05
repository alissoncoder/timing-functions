const linearBox = document.getElementById("linear");
const easeBox = document.getElementById("ease");
const easeInBox = document.getElementById("ease-in");
const easeOutBox = document.getElementById("ease-out");
const easeInOutBox = document.getElementById("ease-in-out");

document.addEventListener("DOMContentLoaded", () => {
    linearBox.classList.add("linearAnimation");
    easeBox.classList.add("easeAnimation");
    easeInBox.classList.add("easeInAnimation");
    easeOutBox.classList.add("easeOutAnimation");
    easeInOutBox.classList.add("easeInOutAnimation");
});