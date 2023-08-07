// Sidebar

const sidebar = document.querySelector("#sidebar");
const button = document.querySelector("#nav-btn");
const darkBackground = document.querySelector("#dark-background");
const featuresMobile = document.querySelector("#features-mobile")
const companyMobile = document.querySelector("#company-mobile")

button.addEventListener("click", () => {
    button.classList.toggle("opened")
    sidebar.classList.toggle("opened")
    darkBackground.classList.toggle("active")
})

darkBackground.addEventListener("click", () => {
    button.classList.toggle("opened")
    sidebar.classList.toggle("opened")
    darkBackground.classList.toggle("active")
})

featuresMobile.addEventListener("click", () => {
    featuresMobile.classList.toggle("opened")
})

companyMobile.addEventListener("click", () => {
    companyMobile.classList.toggle("opened")
})