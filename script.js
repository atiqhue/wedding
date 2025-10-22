const weddingDate = new Date("May 24, 2026 20:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  timer.textContent = `${d} Days ${h} Hours ${m} Minutes`;
}, 1000);
