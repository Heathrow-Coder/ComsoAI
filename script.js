function generateCosmoResponse(text) {
  const lower = text.toLowerCase();

  // Greetings
  if (/\b(hi|hello|hey|yo|greetings)\b/.test(lower)) {
    return "👋 Hello! I'm CosmoAI, your space-savvy assistant. What can I help you explore today?";
  }

  // Identity
  if (lower.includes("who are you") || lower.includes("what are you")) {
    return "🚀 I'm CosmoAI — your interstellar companion built to chat, assist, and explore ideas with you.";
  }

  // Help
  if (lower.includes("help") || lower.includes("how do i")) {
    return "🛠️ You can ask me anything — from space facts to coding tips. Just type your question and hit Enter!";
  }

  // Weather
  if (lower.includes("weather")) {
    return "☁️ I can't check live weather yet, but I recommend packing for cosmic conditions!";
  }

  // Jokes
  if (lower.includes("joke") || lower.includes("funny")) {
    const jokes = [
      "🪐 Why did the astronaut break up with the alien? They needed space!",
      "🌌 What do you call a loopy comet? A space case!",
      "🚀 Why don’t astronauts get hungry after launch? Because they’ve just had a big blast!"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Time
  if (lower.includes("time")) {
    const now = new Date();
    return `🕒 The current time is ${now.toLocaleTimeString()}.`;
  }

  // Date
  if (lower.includes("date")) {
    const today = new Date();
    return `📅 Today is ${today.toDateString()}.`;
  }

  // Fallback
  return `🤖 I heard you say: "${text}". I'm still learning, but I'm here to help — try asking me about space, jokes, or time!`;
}
