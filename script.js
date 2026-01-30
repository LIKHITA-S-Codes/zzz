const accessBtn = document.getElementById("accessBtn");
const overlay = document.getElementById("accessOverlay");
const hacker = document.getElementById("hackerScreen");
const valentine = document.getElementById("valentineScreen");
const sound = document.getElementById("staticSound");

/* START STATIC SOUND */
sound.volume = 0.4;
sound.play();

/* SHOW ACCESS */
setTimeout(() => {
  overlay.style.display = "flex";
}, 8000);

/* CLICK ACCESS */
accessBtn.onclick = () => {
  sound.pause();
  hacker.style.display = "none";
  overlay.style.display = "none";
  valentine.style.display = "flex";
  createHearts();
};

/* FAKE CONSOLE */
const consoleBox = document.querySelector(".output-console");
const fakeLines = [
  "Decrypting packets...",
  "Routing traffic...",
  "Injecting payload...",
  "Requesting permission...",
  "Awaiting user approval..."
];

setInterval(() => {
  const p = document.createElement("p");
  p.textContent = fakeLines[Math.random() * fakeLines.length | 0];
  consoleBox.appendChild(p);
  if (consoleBox.children.length > 40) {
    consoleBox.removeChild(consoleBox.firstChild);
  }
}, 200);

/* HEART RAIN */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    valentine.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

/* NO BUTTON RUNS */
document.getElementById("noBtn").onmouseover = e => {
  e.target.style.position = "absolute";
  e.target.style.left = Math.random() * 80 + "vw";
  e.target.style.top = Math.random() * 80 + "vh";
};

/* YES BUTTON */
document.getElementById("yesBtn").onclick = () => {
  alert("YAY 💖 YOU JUST MADE SOMEONE VERY HAPPY 🥰");
};
