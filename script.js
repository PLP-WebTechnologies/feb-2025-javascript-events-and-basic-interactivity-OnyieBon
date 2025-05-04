// Button Click Event
document.getElementById('clickButton').addEventListener('click', () => {
  document.getElementById('output').textContent = '🎯 Button was clicked!';
});

// Hover Event
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.classList.add('hovered');
  document.getElementById('output').textContent = '👋 You hovered over the box!';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.classList.remove('hovered');
  document.getElementById('output').textContent = '';
});

// Keypress Detection
document.getElementById('keyInput').addEventListener('keydown', (event) => {
  document.getElementById('output').textContent = `⌨️ You pressed: ${event.key}`;
});

// Secret Action: Double-click or Long Press
let pressTimer;
const secretButton = document.getElementById('secretButton');

secretButton.addEventListener('dblclick', () => {
  document.getElementById('output').textContent = '🔐 Double-click unlocked a secret!';
});

secretButton.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    document.getElementById('output').textContent = '⏳ Long press activated!';
  }, 1000);
});

secretButton.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Button changes text and color
const changeBtn = document.getElementById("changeButton");
let changed = false;

changeBtn.addEventListener("click", () => {
  changed = !changed;
  changeBtn.textContent = changed ? "🎨 I’ve Changed!" : "Click to Change Me";
  changeBtn.style.backgroundColor = changed ? "#9b59b6" : "#3498db";
});

// Image gallery/slideshow
const images = [
  "images/mou.jpg",
  "images/dog.jpg",
  "images/wild.jpg"
];
let index = 0;
const galleryImg = document.getElementById("galleryImage");

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  galleryImg.src = images[index];
  galleryImg.style.transform = "scale(1.05)";
  setTimeout(() => (galleryImg.style.transform = "scale(1)"), 200);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  galleryImg.src = images[index];
  galleryImg.style.transform = "scale(1.05)";
  setTimeout(() => (galleryImg.style.transform = "scale(1)"), 200);
});

// Tabs
const tabs = document.querySelectorAll(".tab-buttons button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach(content => content.style.display = "none");
    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const output = document.getElementById("formOutput");

const nameFeedback = document.getElementById("nameFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

// Validation functions
function validateName() {
  if (nameInput.value.trim() === "") {
    nameFeedback.textContent = "Name is required.";
    return false;
  } else {
    nameFeedback.textContent = "Looks good!";
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailFeedback.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailFeedback.textContent = "Please enter a valid email.";
    return false;
  } else {
    emailFeedback.textContent = "Email looks good!";
    return true;
  }
}

function validatePassword() {
  if (passInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    return false;
  } else {
    passwordFeedback.textContent = "Password strength is good.";
    return true;
  }
}

// Real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passInput.addEventListener("input", validatePassword);

// On submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    output.textContent = "✅ Form submitted successfully!";
    output.style.color = "green";
    form.reset();
    nameFeedback.textContent = "";
    emailFeedback.textContent = "";
    passwordFeedback.textContent = "";
  } else {
    output.textContent = "⚠️ Please fix the errors above.";
    output.style.color = "red";
  }
});
