const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");

document.getElementById("homeLink").onclick = () => showPage("home");
document.getElementById("aboutLink").onclick = () => showPage("about");
document.getElementById("logoutLink").onclick = () => logout();

function showPage(page) {
  loginPage.classList.remove("active");
  homePage.classList.remove("active");
  aboutPage.classList.remove("active");

  if (page === "home") homePage.classList.add("active");
  if (page === "about") aboutPage.classList.add("active");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    alert("Login Successful! Welcome, " + username);
    showPage("home");
  } else {
    alert("Please enter username and password");
  }
}

function logout() {
  alert("You have logged out!");
  homePage.classList.remove("active");
  aboutPage.classList.remove("active");
  loginPage.classList.add("active");
}

function sendMessage() {
  const msgInput = document.getElementById("msgInput");
  const chatBox = document.getElementById("chatBox");
  const message = msgInput.value.trim();

  if (message === "") return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "message sent";
  msgDiv.innerText = message;
  chatBox.appendChild(msgDiv);

  msgInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "message received";
    reply.innerText = "Bot: " + getBotReply(message);
    chatBox.appendChild(reply);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello")) return "Hi there!";
  if (msg.includes("how are you")) return "I'm just a bot, but I'm fine!";
  if (msg.includes("bye")) return "Goodbye! 👋";
  return "Interesting! Tell me more...";
}
