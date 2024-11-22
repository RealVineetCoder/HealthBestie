"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router" // Import the router for dynamic URL params
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Initial state to manage quiz data, score, etc.
export default function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizData, setQuizData] = useState([]); // Quiz data to be fetched
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const router = useRouter(); // Use the router to access the `id` from the URL
  const { id } = router.query; // Get the dynamic parameter (id) from the URL

  // Fetch quiz data from API when `id` is available
  useEffect(() => {
    if (!id) return; // Return early if `id` is not available

    const takeTest = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch(`https://backend-health-bestie.vercel.app/api/quiz/${id}`);
        const data = await res.json();

        if (res.ok) {
          setQuizData(data); // Set the fetched data
        } else {
          setError("Failed to load quiz data");
        }
      } catch (error) {
        setError("An error occurred while fetching the data");
      } finally {
        setLoading(false); // End loading
      }
    };

    takeTest();
  }, [id]); // Re-run effect when `id` changes

  const handleSubmit = () => {
    // Find the selected answer's score
    const selectedOption = quizData[currentQuestion]?.options.find(option => option.text === selectedAnswer);

    if (selectedOption) {
      setScore(score + selectedOption.score);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  // Show loading, error, or quiz content
  if (loading) {
    return <div>Loading quiz data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Mental Health Check</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <>
            <Progress value={(currentQuestion + 1) / quizData.length * 100} className="mb-4" />
            <h2 className="text-xl font-semibold mb-4">{quizData[currentQuestion]?.question}</h2>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {quizData[currentQuestion]?.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={option.text} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl">Your score: {score} out of {quizData.length * 3}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!showResult ? (
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>
            {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
          </Button>
        ) : (
          <Button onClick={resetQuiz}>Restart Quiz</Button>
        )}
      </CardFooter>
    </Card>
  );
}



