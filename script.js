// Countdown Timer
const weddingDate = new Date("May 24, 2026 20:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    timer.textContent = "Today is our wedding day! 💍";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  timer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes`;
}, 1000);
