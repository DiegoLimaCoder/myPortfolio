// Menu Responsivo

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-list li a");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Adiciona um event listener para cada item do menu
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove a classe 'active' do elemento .nav
    nav.classList.remove("active");
  });
});

// Typed.JS
const typed = new Typed(".type", {
  strings: ["^1000 eu sou o Diego <br/>Seja bem-vindo !"],
  typeSpeed: 60,
  backSpeed: 20,
  loop: true,
});
