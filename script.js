/* =========================================
   NADIYA BIRTHDAY WEBSITE
========================================= */


const PASSWORD = "Nadiya123";

const birthDate = new Date(
  2007,
  2,
  3,
  0,
  0,
  0
);


/* =========================================
   ELEMENTS
========================================= */

const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const showPassword = document.getElementById("showPassword");
const passwordMessage = document.getElementById("passwordMessage");

const themeBtn = document.getElementById("themeBtn");

const giftBtn = document.getElementById("giftBtn");
const giftModal = document.getElementById("giftModal");
const closeModal = document.getElementById("closeModal");
const anotherGift = document.getElementById("anotherGift");

const giftMessage = document.getElementById("giftMessage");

const wishBtn = document.getElementById("wishBtn");
const wishText = document.getElementById("wishText");

const randomBtn = document.getElementById("randomBtn");
const randomMessage = document.getElementById("randomMessage");

const runawayBtn = document.getElementById("runawayBtn");

const celebrateBtn = document.getElementById("celebrateBtn");

const toast = document.getElementById("toast");
const confetti = document.getElementById("confetti");


/* =========================================
   PASSWORD
========================================= */

function unlockWebsite() {

  const entered = passwordInput.value.trim();

  if (entered === PASSWORD) {

    sessionStorage.setItem("birthdayUnlocked", "true");

    lockScreen.classList.add("hidden");
    mainSite.classList.remove("hidden");

    document.body.style.overflowX = "hidden";

    showToast("Welcome to Nadiya's birthday world 🎉");

    setTimeout(() => {
      createConfetti(80);
    }, 500);

    setTimeout(() => {
      revealElements();
    }, 100);

  } else {

    passwordMessage.textContent =
      "Oops! Passwordটা ঠিক হয়নি 😅";

    passwordInput.classList.add("shake");

    setTimeout(() => {
      passwordInput.classList.remove("shake");
    }, 500);

  }

}


unlockBtn.addEventListener("click", unlockWebsite);


passwordInput.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    unlockWebsite();
  }

});


/* Show Password */

showPassword.addEventListener("click", () => {

  if (passwordInput.type === "password") {

    passwordInput.type = "text";
    showPassword.textContent = "🙈";

  } else {

    passwordInput.type = "password";
    showPassword.textContent = "👁";

  }

});


/* Session unlock */

if (sessionStorage.getItem("birthdayUnlocked") === "true") {

  lockScreen.classList.add("hidden");
  mainSite.classList.remove("hidden");

}


/* =========================================
   THEME
========================================= */

const savedTheme = localStorage.getItem("birthdayTheme");

if (savedTheme === "light") {

  document.body.classList.add("light");
  themeBtn.textContent = "🌙";

}


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const light = document.body.classList.contains("light");

  themeBtn.textContent = light ? "🌙" : "☀️";

  localStorage.setItem(
    "birthdayTheme",
    light ? "light" : "dark"
  );

});


/* =========================================
   LIVE AGE COUNTER
========================================= */

function calculateAge() {

  const now = new Date();

  let years =
    now.getFullYear() -
    birthDate.getFullYear();

  let lastBirthday = new Date(
    now.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
    0,
    0,
    0
  );


  if (now < lastBirthday) {

    years--;

    lastBirthday = new Date(
      now.getFullYear() - 1,
      birthDate.getMonth(),
      birthDate.getDate(),
      0,
      0,
      0
    );

  }


  const difference =
    now.getTime() -
    lastBirthday.getTime();


  const totalSeconds =
    Math.floor(difference / 1000);

  const seconds =
    totalSeconds % 60;

  const totalMinutes =
    Math.floor(totalSeconds / 60);

  const minutes =
    totalMinutes % 60;

  const totalHours =
    Math.floor(totalMinutes / 60);

  const hours =
    totalHours % 24;

  const days =
    Math.floor(totalHours / 24);


  document.getElementById("years").textContent =
    String(years).padStart(2,"0");

  document.getElementById("days").textContent =
    String(days).padStart(2,"0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2,"0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2,"0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2,"0");

}


setInterval(calculateAge,1000);

calculateAge();


/* =========================================
   NEXT BIRTHDAY
========================================= */

function updateNextBirthday() {

  const now = new Date();

  let year = now.getFullYear();

  let nextBirthday = new Date(
    year,
    2,
    3,
    0,
    0,
    0
  );


  if (nextBirthday <= now) {
    year++;
    nextBirthday = new Date(
      year,
      2,
      3,
      0,
      0,
      0
    );
  }


  const difference =
    nextBirthday.getTime() -
    now.getTime();


  const totalSeconds =
    Math.floor(difference / 1000);


  const seconds =
    totalSeconds % 60;


  const totalMinutes =
    Math.floor(totalSeconds / 60);

  const minutes =
    totalMinutes % 60;


  const totalHours =
    Math.floor(totalMinutes / 60);

  const hours =
    totalHours % 24;


  const days =
    Math.floor(totalHours / 24);


  document.getElementById("nextDays").textContent =
    String(days).padStart(2,"0");

  document.getElementById("nextHours").textContent =
    String(hours).padStart(2,"0");

  document.getElementById("nextMinutes").textContent =
    String(minutes).padStart(2,"0");

  document.getElementById("nextSeconds").textContent =
    String(seconds).padStart(2,"0");


  const nextAge =
    year - birthDate.getFullYear();


  document.getElementById("turningText").textContent =
    `Nadiya will turn ${nextAge} 🎉`;

}


setInterval(updateNextBirthday,1000);

updateNextBirthday();


/* =========================================
   GIFT SURPRISE
========================================= */

const gifts = [

  "🎂 Birthday rule: আজকে cake-এর একটা extra piece officially allowed. 😂",

  "🎁 Surprise! আজকে তোমার জন্য unlimited good wishes activated. ✨",

  "😂 Breaking news: Nadiya successfully completed another year of life!",

  "🎉 আজকের mission: হাসো, cake খাও, আর দিনটা enjoy করো.",

  "✨ May this new year of your life bring lots of good memories.",

  "😌 আজকে কোনো serious চিন্তা নেই। Birthday mode ON.",

  "🎂 Cake আছে। Candles আছে। এখন শুধু celebration বাকি!",

  "🥳 Congratulations! You have unlocked another level of life.",

  "😂 Age update installed successfully. New version looks promising.",

  "🌟 Wishing you a year full of happy surprises and peaceful moments."

];


function openGift() {

  giftMessage.textContent =
    gifts[Math.floor(Math.random() * gifts.length)];

  giftModal.classList.add("active");

  createConfetti(45);

}


giftBtn.addEventListener("click",openGift);


anotherGift.addEventListener("click",openGift);


closeModal.addEventListener("click",() => {

  giftModal.classList.remove("active");

});


giftModal.addEventListener("click",(e) => {

  if (e.target === giftModal) {
    giftModal.classList.remove("active");
  }

});


/* =========================================
   WISH BUTTON
========================================= */

const wishes = [

  "Wish made! ✨ Now let's hope the universe is listening. 😌",

  "Wish successfully submitted to the birthday department. 🎂",

  "Wish sent! Delivery may take a little time. 😂",

  "Okay... the birthday magic has officially started. ✨",

  "Wish locked. No take-backs now! 😎"

];


wishBtn.addEventListener("click",() => {

  wishText.textContent =
    wishes[Math.floor(Math.random() * wishes.length)];

  wishBtn.textContent =
    "Wish Made! ✨";

  createConfetti(35);

  showToast("Birthday wish activated ✨");

});


/* =========================================
   RANDOM MESSAGE
========================================= */

const randomMessages = [

  "Today's mood: cake + laughter + zero unnecessary stress. 🎂",

  "Important reminder: birthdays are basically permission to eat cake. 😂",

  "Nadiya.exe has successfully completed another year. 💻🎉",

  "Today is officially a no-boring-day zone. 🚫😴",

  "Emergency alert: Too much birthday happiness detected! 🚨😂",

  "Achievement unlocked: Another trip around the sun. 🌞",

  "Birthday mode: 100% activated. 🎉",

  "Current status: Celebrating successfully. 😌",

  "May the Wi-Fi be fast and the cake be bigger. 😂",

  "Today's schedule: Smile → Cake → Laugh → Repeat. 🔁"

];


randomBtn.addEventListener("click",() => {

  randomMessage.style.transform =
    "scale(.96)";

  setTimeout(() => {

    randomMessage.textContent =
      randomMessages[
        Math.floor(
          Math.random() *
          randomMessages.length
        )
      ];

    randomMessage.style.transform =
      "scale(1)";

  },150);

});


/* =========================================
   RUNAWAY BUTTON
========================================= */

let runawayCount = 0;


function moveRunawayButton() {

  runawayCount++;


  if (runawayCount < 5) {

    const maxX = 130;
    const maxY = 80;

    const x =
      Math.random() * maxX * 2 - maxX;

    const y =
      Math.random() * maxY * 2 - maxY;

    runawayBtn.style.transform =
      `translate(${x}px,${y}px)`;

    showToast(
      runawayCount === 1
        ? "I told you not to press it 😂"
        : "Stop chasing the button! 😭"
    );

  } else {

    runawayBtn.style.transform = "none";

    runawayBtn.textContent =
      "Okay Okay... You Win 😂";

    showToast("Fine. You finally caught it! 😂");

  }

}


runawayBtn.addEventListener(
  "mouseenter",
  moveRunawayButton
);


runawayBtn.addEventListener(
  "touchstart",
  moveRunawayButton,
  {passive:true}
);


/* =========================================
   CELEBRATION
========================================= */

celebrateBtn.addEventListener("click",() => {

  createConfetti(220);

  createBalloons();

  showToast(
    "🎉 HAPPY BIRTHDAY NADIYA! 🎂"
  );

  celebrateBtn.textContent =
    "🎉 CELEBRATION ACTIVATED! 🎉";

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount = 80) {

  for (let i = 0; i < amount; i++) {

    const piece =
      document.createElement("span");

    piece.className =
      "confetti-piece";


    const x =
      Math.random() * 100 - 50;


    piece.style.left =
      Math.random() * 100 + "%";


    piece.style.setProperty(
      "--x",
      x + "vw"
    );


    piece.style.animationDuration =
      (Math.random() * 2 + 2) + "s";


    piece.style.animationDelay =
      Math.random() * .5 + "s";


    piece.style.background =
      [
        "#ff5caa",
        "#9d72ff",
        "#54c7ff",
        "#ffd76a",
        "#ffffff"
      ][
        Math.floor(Math.random() * 5)
      ];


    piece.style.transform =
      `rotate(${Math.random()*360}deg)`;


    confetti.appendChild(piece);


    setTimeout(() => {
      piece.remove();
    },4500);

  }

}


/* =========================================
   EXTRA BALLOONS
========================================= */

function createBalloons() {

  for (let i = 0; i < 18; i++) {

    const balloon =
      document.createElement("div");

    balloon.textContent = "🎈";

    balloon.style.position =
      "fixed";

    balloon.style.left =
      Math.random() * 100 + "%";

    balloon.style.bottom =
      "-80px";

    balloon.style.fontSize =
      (30 + Math.random() * 30) + "px";

    balloon.style.zIndex =
      "6999";

    balloon.style.pointerEvents =
      "none";

    balloon.style.transition =
      "transform 5s ease-out, opacity 5s";

    document.body.appendChild(balloon);


    requestAnimationFrame(() => {

      balloon.style.transform =
        `translateY(-120vh) rotate(${
          Math.random() * 60 - 30
        }deg)`;

      balloon.style.opacity = "0";

    });


    setTimeout(() => {

      balloon.remove();

    },5200);

  }

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    },2500);

}


/* =========================================
   SCROLL REVEAL
========================================= */

function revealElements() {

  const elements =
    document.querySelectorAll(".reveal");


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

          }

        });

      },
      {
        threshold: .12
      }
    );


  elements.forEach(element => {

    observer.observe(element);

  });

}


revealElements();


/* =========================================
   CURSOR EFFECT
========================================= */

const cursor =
  document.querySelector(".cursor-glow");


document.addEventListener(
  "mousemove",
  (e) => {

    cursor.style.left =
      e.clientX + "px";

    cursor.style.top =
      e.clientY + "px";

  }
);


/* =========================================
   TOUCH SPARKLE
========================================= */

document.addEventListener(
  "touchstart",
  (e) => {

    const touch = e.touches[0];

    if (!touch) return;

    createSparkle(
      touch.clientX,
      touch.clientY
    );

  },
  {passive:true}
);


function createSparkle(x,y) {

  const sparkle =
    document.createElement("div");

  sparkle.textContent = "✦";

  sparkle.style.position =
    "fixed";

  sparkle.style.left =
    x + "px";

  sparkle.style.top =
    y + "px";

  sparkle.style.color =
    "#ff5caa";

  sparkle.style.fontSize =
    "18px";

  sparkle.style.pointerEvents =
    "none";

  sparkle.style.zIndex =
    "9999";

  sparkle.style.transition =
    "all .8s ease";

  document.body.appendChild(sparkle);


  requestAnimationFrame(() => {

    sparkle.style.transform =
      "translateY(-40px) scale(0)";

    sparkle.style.opacity =
      "0";

  });


  setTimeout(() => {

    sparkle.remove();

  },900);

}


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener(
  "keydown",
  (e) => {

    if (
      e.key.toLowerCase() === "c" &&
      !mainSite.classList.contains("hidden")
    ) {

      createConfetti(80);

      showToast("Secret celebration activated 🎉");

    }

  }
);


/* =========================================
   RANDOM MINI CELEBRATIONS
========================================= */

setInterval(() => {

  if (
    !mainSite.classList.contains("hidden") &&
    Math.random() > .72
  ) {

    createSparkle(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight
    );

  }

},1800);
