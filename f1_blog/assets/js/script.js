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
  // const readMoreButton = article.querySelector(".article-footer");
  article.addEventListener('click', () => {
    // const articleModal = document.querySelector(`#modal-${article.id}`);
    const data = gatherModalData(article);
    const modalContainer = openModal(data);
    const closeModalButton = modalContainer.querySelector(".close-button button");
    closeModalButton.addEventListener('click', () => {
      modalContainer.innerHTML = "";
      // articleModal.dataset.modalOpen = "false";
      // articleModal.classList.add("hide-modal");
      // articleModal.classList.remove("show-modal");
      isModalOpen = false;
    });
  })
});

function gatherModalData(article) {
  data = {
    modalId: `modal-${article.id}`,
    image: article.querySelector("img").src,
    altText: article.querySelector("img").alt,
    h3Tag: article.querySelector("h3").textContent,
    authorDate: article.querySelector(".author").textContent,
    paragraph: article.querySelector(".article-body p").textContent
  };
  return data;
}

// Add dynamic comments for this
function openModal(data) {
  const modalHTML = `
    <div id="${data.modalId}" class="modal show-modal" data-modal-open="true">
      <div class="modal-content">
        <div class="close-button"><button><img src="assets/img/menu_close.svg" alt="Close button"></button></div>
        <div class="modal-article-header">
          <img src="${data.image}" alt="${data.altText}" />
          <h3>${data.h3Tag}</h3>
          <p class="author">${data.authorDate}</p>
        </div>
        <div class="modal-article-body">
          <p>
            ${data.paragraph}
          </p>
        </div>
        <div class="comments-section">
          <div class="comments-heading">Leave a comment</div>
          <form action="" class="comment-form">
            <!-- <label for="email">Email:</label> -->
            <input type="email" class="comment-email" name="email" placeholder="Your email" required/>

            <!-- <label for="comment">Comment:</label> -->
            <textarea name="comment" class="comment-textarea" id="comment" placeholder="Write a comment..." required></textarea>
            <input type="submit" class="comment-button" value="Post Comment">
          </form>
        
          <div class="comments-heading">Comments</div>
          <div class="comments-list">
            <div class="comment">
                <div class="comment-header">
                    <div class="comment-email-display">john.doe@example.com</div>
                </div>
                <div class="comment-text">
                    This is really interesting! I've been following the developments and it's great to see such progress.
                </div>
            </div>

            <div class="comment">
                <div class="comment-header">
                    <div class="comment-email-display">sarah.smith@example.com</div>
                </div>
                <div class="comment-text">
                    Great article! Looking forward to seeing more updates on this topic.
                </div>
            </div>

            <div class="comment">
                <div class="comment-header">
                    <div class="comment-email-display">mike.wilson@example.com</div>
                </div>
                <div class="comment-text">
                    Thanks for sharing these insights. The technical details are particularly helpful.
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalContainer = document.querySelector(".modal-container");
  modalContainer.innerHTML = modalHTML;
  return modalContainer;
}