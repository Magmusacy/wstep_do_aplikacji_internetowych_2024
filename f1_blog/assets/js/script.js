const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

// let isMenuOpen = menu.dataset.menuOpen === "true";

menuButton.addEventListener("click", () => {
  let isMenuOpen = menu.dataset.menuOpen === "true";

  if (isMenuOpen) {
    menu.dataset.menuOpen = "false";
    menu.classList.add("hide-menu");
    menu.classList.remove("show-menu");
    overlay.classList.remove("show-overlay");
    overlay.classList.add("hide-overlay");

    // tu pomysl jak to zrobic no bo niby spoko ale
    // jednak mamy tutaj problem ze jak zmienimy cos w js to msuiy w css
    setTimeout(() => {
      menu.classList.remove("hide-menu");
      overlay.classList.remove("hide-overlay");
    }, 500);
  } else {
    menu.dataset.menuOpen = "true";
    menu.classList.remove("hide-menu");
    menu.classList.add("show-menu");
    overlay.classList.add("show-overlay");
    overlay.classList.remove("hide-overlay");
  }
});
