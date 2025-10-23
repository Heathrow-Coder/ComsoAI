// Theme cycling setup
const themes = ["nebula", "saturn", "noir", "launchpad", "earthrise"];
let currentThemeIndex = 0;

function applyTheme(themeName) {
  document.body.className = "";
  document.body.classList.add(`theme-${themeName}`);
  document.getElementById("themeSelect").value = themeName;
}

function cycleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(themes[currentThemeIndex]);
}

// Chat logic
function sendQuery() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (!userText) return;

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = userText;
  chatBox.appendChild(userMsg);
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Generate bot response
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  const response = generateCosmoResponse(userText);
  botMsg.textContent = response;
  chatBox.appendChild(botMsg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// AI-like response generator
function generateCosmoResponse(userText) {
  const lower = userText.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    return "👋 Hello! I'm CosmoAI, your space-savvy assistant. What can I help you with today?";
  } else if (lower.includes("weather")) {
    return "☁️ I can't check live weather yet, but I recommend packing for cosmic conditions!";
  } else if (lower.includes("joke")) {
    return "🪐 Why did the astronaut break up with the alien? They needed space!";
  } else if (lower.includes("theme") || lower.includes("style")) {
    return "🎨 You can change my style using the dropdown or the 'Change Style' button above!";
  } else if (lower.includes("who are you")) {
    return "🚀 I'm CosmoAI, your interstellar companion built to explore ideas and answer questions.";
  } else if (lower.includes("help")) {
    return "🛠️ I'm here to chat, answer questions, and look stylish doing it. Ask me anything!";
  } else {
    return `🤖 I'm still learning, but I heard you say: "${userText}". Want to ask me something cosmic?`;
  }
}

// Enable Enter key to send message
document.addEventListener("DOMContentLoaded", function () {
  applyTheme(themes[currentThemeIndex]);

  const input = document.getElementById("userInput");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendQuery();
    }
  });
});
