
const container = document.querySelector('.container');
const menuBar = document.querySelector(".menu-bar");
const leftBtn = document.querySelector(".left-btn")

const ToggleScreen = () => {
    container.classList.toggle("show-category");
};

menuBar.addEventListener("click", ToggleScreen);
leftBtn.addEventListener("click", ToggleScreen);



