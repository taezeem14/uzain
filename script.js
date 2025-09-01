// Check if today is August 28th
function isBirthday() {
  const today = new Date();
  const month = today.getMonth(); // 0-11 (August is 7)
  const day = today.getDate();
  return month === 7 && day === 28; // August 28th
}

// Initialize the page based on whether it's the birthday
function initializePage() {
  const birthdayContent = document.querySelector('.loser');
  const gallery = document.querySelector('.gallery');
  const body = document.body;
  
  if (isBirthday()) {
    // It's birthday! Show the celebration
    birthdayContent.style.display = 'block';
    gallery.style.display = 'block';
    body.classList.add('birthday-mode');
    
    // Initialize birthday interactions
    initializeBirthdayFeatures();
  } else {
    // Not birthday, show waiting message
    showWaitingContent();
    body.classList.add('waiting-mode');
  }
}

function showWaitingContent() {
  const birthdayContent = document.querySelector('.loser');
  const gallery = document.querySelector('.gallery');
  
  // Hide original content
  birthdayContent.style.display = 'none';
  gallery.style.display = 'none';
  
  // Calculate days until next August 28th
  const today = new Date();
  const currentYear = today.getFullYear();
  let nextBirthday = new Date(currentYear, 7, 28); // August 28th this year
  
  // If birthday has passed this year, get next year's date
  if (today > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, 7, 28);
  }
  
  const timeDiff = nextBirthday.getTime() - today.getTime();
  const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  // Create waiting content
  const waitingDiv = document.createElement('div');
  waitingDiv.className = 'waiting-content';
  waitingDiv.innerHTML = `
    <div class="countdown-container">
      <h1>🗓️ Uzain's Birthday Countdown</h1>
      <p>The birthday celebration will be available on August 28th!</p>
      <div class="next-birthday">
        <div class="countdown-display">
          <span class="days-count">${daysUntil}</span>
          <span class="days-label">days to go!</span>
        </div>
        <span id="countdown-text">Check back on August 28th for the special celebration! 🎉</span>
      </div>
      <div class="current-date">
        <p>Today is: ${today.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>
      <div class="teaser-gallery">
        <h3>✨ Something special is waiting... ✨</h3>
        <div class="blurred-preview">
          <img src="images/u.jpg" alt="preview" class="blur-img">
          <img src="images/z.jpg" alt="preview" class="blur-img">
          <img src="images/a.jpg" alt="preview" class="blur-img">
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(waitingDiv);
}

function initializeBirthdayFeatures() {
  const btn = document.getElementById("surpriseBtn");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  btn.addEventListener("click", () => {
    popup.style.display = "flex"; // Show popup

    // Confetti (with fallback)
    try {
      if (typeof confetti !== 'undefined') {
        confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
      } else {
        // Fallback animation
        createConfettiFallback();
      }
    } catch (e) {
      createConfettiFallback();
    }

    // Balloons
    for (let i = 0; i < 10; i++) {
      createBalloon();
    }
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none"; // Hide popup
  });
}

function createConfettiFallback() {
  // Create CSS-only confetti effect
  for (let i = 0; i < 50; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    confettiPiece.style.left = Math.random() * 100 + 'vw';
    confettiPiece.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confettiPiece.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(confettiPiece);
    
    setTimeout(() => {
      confettiPiece.remove();
    }, 5000);
  }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

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
