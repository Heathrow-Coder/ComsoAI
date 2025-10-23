import openai
import requests

# Set your OpenAI API key
openai.api_key = "your-openai-api-key"

def cosmoai_chat(prompt):
    """Generate AI response using OpenAI"""
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are CosmoAI, a helpful internet-connected assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content']

def cosmoai_web_search(query):
    """Perform a basic web search using DuckDuckGo Instant Answer API"""
    url = f"https://api.duckduckgo.com/?q={query}&format=json"
    res = requests.get(url)
    data = res.json()
    return data.get("Abstract", "No summary found.")

def main():
    print("👋 Welcome to CosmoAI!")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("CosmoAI: Goodbye!")
            break

        # Try web search first
        web_summary = cosmoai_web_search(user_input)
        print(f"🌐 Web Summary: {web_summary}")

        # Then generate AI response
        ai_response = cosmoai_chat(user_input)
        print(f"🤖 CosmoAI: {ai_response}")

if __name__ == "__main__":
    main()
