const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".link-list");
  const navLinks = document.querySelectorAll(".link-list a")


  burger.addEventListener("click", () => {
      // Toggle nav
    nav.classList.toggle("nav-active");
    // burger animations 
    burger.classList.toggle("toggle")
  });


}

navSlide()