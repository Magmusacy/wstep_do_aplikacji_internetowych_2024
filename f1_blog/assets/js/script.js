const body = document.querySelector("body");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const articles = document.querySelectorAll(".blog article");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  overlay.classList.toggle("show-overlay");
  body.classList.toggle("no-scroll");
  menuButton.classList.toggle("open");
});

articles.forEach((article) => {
  article.addEventListener("click", () => handleArticleClick(article));
});

function handleArticleClick(article) {
  const data = gatherModalData(article);
  const modalContainer = openModal(data);
  const closeModalButton = modalContainer.querySelector(".close-button button");
  body.classList.toggle("no-scroll");
  closeModalButton.addEventListener("click", handleCloseModal);
}

function handleCloseModal() {
  body.classList.toggle("no-scroll");
  document.querySelector(".modal-container").innerHTML = "";
}

function gatherModalData(article) {
  const image = article.querySelector("img");
  return {
    modalId: `modal-${article.id}`,
    image: image.src,
    altText: image.alt,
    h3Tag: article.querySelector("h3").textContent,
    authorDate: article.querySelector(".author").textContent,
    paragraph: article.querySelector(".article-body p").textContent,
  };
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
