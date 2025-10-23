window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); // Simulate 2-second loading
};


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

  // Generate a simulated AI response
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";

  const response = generateCosmoResponse(userText);
  botMsg.textContent = response;
  chatBox.appendChild(botMsg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateCosmoResponse(userText) {
  const lower = userText.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    return "👋 Hello! I'm CosmoAI, your space-savvy assistant. What can I help you with today?";
  } else if (lower.includes("weather")) {
    return "☁️ I can't check live weather yet, but I recommend packing for cosmic conditions!";
  } else if (lower.includes("joke")) {
    return "🪐 Why did the astronaut break up with the alien? They needed space!";
  } else if (lower.includes("theme")) {
    return "🎨 You can change my style using the dropdown or the 'Change Style' button above!";
  } else if (lower.includes("who are you")) {
    return "🚀 I'm CosmoAI, your interstellar companion built to explore ideas and answer questions.";
  } else {
    return `🤖 I'm still learning, but I heard you say: "${userText}". Want to ask me something cosmic?`;
  }
}

}
