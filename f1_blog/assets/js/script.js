const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const articles = document.querySelectorAll(".blog article");

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
      overlay.classList.add("hide-overlay");
    }, 500);
  } else {
    menu.dataset.menuOpen = "true";
    menu.classList.remove("hide-menu");
    menu.classList.add("show-menu");
    overlay.classList.add("show-overlay");
    overlay.classList.remove("hide-overlay");
  }
});

// This will have to be refactored.
articles.forEach((article) => {
  console.log(article)
  const readMoreButton = article.querySelector(".article-footer");
  readMoreButton.addEventListener('click', () => {
    const articleModal = document.querySelector(`#modal-${article.id}`);
    const closeModalButton = articleModal.querySelector("button.close-button");
    let isModalOpen = articleModal.dataset.modalOpen === "true";
    if (isModalOpen) {
      articleModal.dataset.modalOpen = "false";
      articleModal.classList.add("hide-modal");
      articleModal.classList.remove("show-modal");
      isModalOpen = false;
    } else {
      // to musi być w modalu though
      articleModal.dataset.modalOpen = "true";
      articleModal.classList.add("show-modal");
      articleModal.classList.remove("hide-modal");
      isModalOpen = true;
    }
    closeModalButton.addEventListener('click', () => {
      articleModal.dataset.modalOpen = "false";
      articleModal.classList.add("hide-modal");
      articleModal.classList.remove("show-modal");
      isModalOpen = false;
    }) 
    // articleModal.classList.remove("hide-modal");
    console.log(`.modal-${article.id}`, articleModal);
  })
  console.log(readMoreButton)
})