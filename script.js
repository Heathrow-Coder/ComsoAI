window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); // Simulate 2-second loading
};

function sendQuery() {
  const input = document.getElementById("userInput").value;
  const responseBox = document.getElementById("response");

  // Placeholder response
  responseBox.innerHTML = `<p>🤖 CosmoAI says: "${input}" received. Processing...</p>`;
}

function sendQuery() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (!userText) return;

  // Add user message instantly
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = userText;
  chatBox.appendChild(userMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate fast AI response (no delay)
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = `🤖 CosmoAI: "${userText}" received. Processing...`;
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
}
