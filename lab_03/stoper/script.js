const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const displayMinutes = document.querySelector("#minutes");
const displaySeconds = document.querySelector("#seconds");
let timeElapsed = 0;
let intervalId = null;

const displayTime = () => {
  displayMinutes.textContent =
    timeElapsed / 60 >= 1 ? `${Math.floor(timeElapsed / 60)}min` : "";
  displaySeconds.textContent = `${timeElapsed % 60}s`;
};

const resetDisplay = () => {
  displayMinutes.textContent = "";
  displaySeconds.textContent = "0s";
};

start.addEventListener("click", () => {
  if (intervalId === null) {
    start.textContent = "Stop";
    start.classList.toggle("running");
    intervalId = setInterval(() => {
      timeElapsed++;
      displayTime();
    }, 1000);
  } else {
    start.textContent = "Start";
    start.classList.toggle("running");
    clearInterval(intervalId);
    intervalId = null;
  }
});

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  timeElapsed = 0;
  resetDisplay();
});
