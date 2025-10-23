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
