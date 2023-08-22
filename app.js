// Sidebar

const sidebar = document.querySelector("#sidebar");
const button = document.querySelector("#nav-btn");
const darkBackground = document.querySelector("#dark-background");
const featuresMobile = document.querySelector("#features-mobile");
const companyMobile = document.querySelector("#company-mobile");

button.addEventListener("click", () => {
  button.classList.toggle("opened");

  if (sidebar.classList.contains("opened")) {
    sidebar.classList.remove("opened");
  } else {
    sidebar.style.display = "initial";
    // we have to wait until the next frame before starting the transition
    requestAnimationFrame(() => {
      sidebar.classList.add("opened");
    });
  }

  if (darkBackground.classList.contains("active")) {
    darkBackground.classList.remove("active");
  } else {
    darkBackground.style.display = "initial";
    // we have to wait until the next frame before starting the transition
    requestAnimationFrame(() => {
      darkBackground.classList.add("active");
    });
  }

});

sidebar.addEventListener("transitionend", () => {
  if (!sidebar.classList.contains("opened")) {
    // hide the element from the DOM and Accessibility tree, otherwise all the links in the sidebar would still be accessible, which would not make sense when the sidebar is closed
    sidebar.style.display = "none";
  }
});

darkBackground.addEventListener("transitionend", () => {
    if (!darkBackground.classList.contains("active")) {
      // hide the element from the DOM and Accessibility tree, otherwise all the links in the darkBackground would still be accessible, which would not make sense when the darkBackground is closed
      darkBackground.style.display = "none";
    }
  });
  

darkBackground.addEventListener("click", () => {
  button.classList.toggle("opened");
  sidebar.classList.toggle("opened");
  darkBackground.classList.toggle("active");
});

featuresMobile.addEventListener("click", () => {
    featuresMobile.classList.toggle("opened")    
});

  
companyMobile.addEventListener("click", () => {
  companyMobile.classList.toggle("opened");
});
