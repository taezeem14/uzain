document.getElementById("surpriseBtn").addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
});
const btn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");

btn.addEventListener("click", () => {
  // Show popup
  popup.style.display = "flex";

  // Trigger confetti
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Add balloons
  for (let i = 0; i < 10; i++) {
    createBalloon();
  }
});

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
  balloon.style.animationDuration = (Math.random() * 3 + 4) + "s";
  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 6000);
}
const closePopup = document.getElementById("closePopup");

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
