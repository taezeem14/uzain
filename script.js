const btn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

btn.addEventListener("click", () => {
  popup.style.display = "flex"; // Show popup

  // Confetti
  confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });

  // Balloons
  for (let i = 0; i < 10; i++) {
    createBalloon();
  }
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none"; // Hide popup
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
