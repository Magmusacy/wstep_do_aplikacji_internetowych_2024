class Zombie {
  constructor(x, y, speed, scale) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.scale = scale;
    this.image = new Image();
    this.image.src = "assets/walkingdead.png";
    this.frameWidth = 200;
    this.frameHeight = 312;
    this.totalFrames = 10;
    this.frameCounter = 0;
    this.currentFrame = 0;
    this.frameDelay = 5;
  }

  update() {
    this.frameCounter++;
    if (this.frameCounter >= this.frameDelay) {
      this.frameCounter = 0;
      this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
    }

    this.x -= this.speed;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.currentFrame * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth * this.scale,
      this.frameHeight * this.scale
    );
  }
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const restartButton = document.getElementById("restart-button");
const modal = document.getElementById("game-over-modal");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let zombies;
let health;
let score;
let audio;
let gameRunning = true;

function setupGame() {
  setInterval(() => {
    const speed = Math.random() * 5 + 1;
    const scale = Math.random() * 0.5 + 0.5;
    const y = Math.random() * (canvas.height - 312 * scale);
    zombies.push(new Zombie(canvas.width, y, speed, scale));
  }, 2000);

  zombies = [];
  health = 3;
  score = 0;
  gameRunning = true;
}

function gameLoop() {
  if (!gameRunning) {
    return;
  }
  if (health < 1) {
    gameOver();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  zombies.forEach((zombie) => {
    if (zombie.x < zombie.frameWidth * zombie.scale * -1) {
      health = Math.max(health - 1, 0);
      let index = zombies.findIndex((z) => z === zombie); // O(n) ale rzadkie.
      zombies.splice(index, 1);
    }

    zombie.update();
    zombie.draw(ctx);
  });

  drawHealth();
  drawScore();
  drawCrossHair();
  requestAnimationFrame(gameLoop);
}

function gameOver() {
  gameRunning = false;
  modal.classList.toggle("modal-show");
  audio = new Audio("assets/sad-music.mp3");
  audio.play();
}

restartButton.addEventListener("click", () => {
  modal.classList.toggle("modal-show");
  audio.pause();
  setupGame();
  gameLoop();
});

const crossHair = new Image();
crossHair.src = "assets/aim.png";

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

canvas.addEventListener("click", () => {
  let hit = false;
  // tutaj kopiuje i odwracam tablice tak by zombiaki wyrenderowane na wierzchu były sprawdzane jako pierwsze.
  zombies
    .slice()
    .reverse()
    .forEach((zombie) => {
      if (
        // Trafiliśmy w zombiaka
        mouseX > zombie.x &&
        mouseX < zombie.x + zombie.frameWidth * zombie.scale &&
        mouseY > zombie.y &&
        mouseY < zombie.y + zombie.frameHeight * zombie.scale
      ) {
        if (hit) {
          return; // czyli możemy trafić maksymalnie 1 zombiaka.
        }
        let index = zombies.findIndex((z) => z === zombie);
        zombies.splice(index, 1); // O(n) ale chyba niezauważalne.
        score += 20;
        hit = true;
      }
    });
  if (!hit) {
    score -= 5;
  }
});

function drawCrossHair() {
  ctx.drawImage(crossHair, mouseX - 100, mouseY - 100, 200, 200);
}

let emptyHeart = new Image();
let fullHeart = new Image();
emptyHeart.src = "assets/empty_heart.png";
fullHeart.src = "assets/full_heart.png";

function drawHealth() {
  for (let i = 0; i < health; i++) {
    ctx.drawImage(fullHeart, 10 + i * 50, 10, 50, 50);
  }
  for (i = health; i < 3; i++) {
    ctx.drawImage(emptyHeart, 10 + i * 50, 10, 50, 50);
  }
}

function drawScore() {
  ctx.font = "48px Segoe UI";
  ctx.fillStyle = "white";
  ctx.fillText(formatScore(), canvas.width - 160, 50);
}

function formatScore() {
  let prefix = score < 0 ? "-" : " ";
  let scoreString = `${Math.abs(score)}`;
  return `${prefix}${scoreString.padStart(5, "0")}`;
}

setupGame();
gameLoop();
