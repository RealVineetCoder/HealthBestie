"use client";
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from 'lucide-react';

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef(null);

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to transform AI response text
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
    if (input.trim() === '') return; // Prevent sending empty messages

    // Add user message to the chat
    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://backend-health-bestie.vercel.app/api/users/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();

      // Check for valid AI response and update chat
      if (data.response) {
        const transformedResponse = transformText(data.response);

        const botMessage = { role: "bot", content: transformedResponse };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("No reply from AI.");
        const errorMessage = { role: "bot", content: 'Sorry, I encountered an error. Please try again.' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
      const errorMessage = { role: "bot", content: 'Sorry, I encountered an error. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle>AI Chatbot</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                  dangerouslySetInnerHTML={{ __html: message.content }} // Render transformed HTML content
                />
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-200 text-gray-800">
                  Thinking...
                </div>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={handleSubmit}
            className="flex w-full space-x-2"
          >
            <Input
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}







