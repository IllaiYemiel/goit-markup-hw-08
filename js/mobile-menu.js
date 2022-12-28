(() => {
    const refs = {
      openMenuBtn: document.querySelector(".menu-btn"),
      closeMenuBtn: document.querySelector(".menu-btn-close"),
      menu: document.querySelector(".mobile-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();