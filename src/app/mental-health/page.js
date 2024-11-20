"use client";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to replace * with numbered list and ** with bold text
  function transformText(input) {
    let counter = 1;

    // Replace ** with <b> for bold formatting
    input = input.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    // Replace * with numbered list and add new line before it
    input = input.replace(/\*/g, () => {
      return `<br />${counter++}.`; // Add a break line and increment the number
    });

    return input;
  }

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return; // Prevent sending empty messages

    // Add user message to the chat
    const newMessage = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://backend-health-bestie.vercel.app/api/users/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userInput }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();

      // Check for valid AI response and update chat
      if (data.response) {
        const transformedResponse = transformText(data.response);

        const aiMessage = { role: "ai", content: transformedResponse };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        console.error("No reply from AI.");
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-pink-500 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Health Bestie Chat</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="polite">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-md p-3 rounded-lg shadow ${
                msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.content }} // Inject transformed HTML safely
            />
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs md:max-w-md p-3 rounded-lg shadow bg-gray-200 text-gray-800">
              Typing...
            </div>
          </div>
        )}
      </main>

      <form onSubmit={handleSubmit} className="bg-white text-black border-t border-gray-300 p-4 flex items-center">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-pink-300"
        />
        <button
          type="submit"
          className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}






