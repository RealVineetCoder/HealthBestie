"use client";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import the router for dynamic URL params
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BACKEND_SERVER } from "@/lib/config";

export default function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizData, setQuizData] = useState([]); // Quiz data to be fetched
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [quizId, setQuizId] = useState(null); // State to hold `quiz` ID

  // UseEffect to retrieve quiz ID from sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = sessionStorage.getItem("quiz");
      setQuizId(id);
    }
  }, []);

  // Fetch quiz data from API when `quizId` is available
  useEffect(() => {
    if (!quizId) return; // Return early if `quizId` is not available

    const takeTest = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch(`${BACKEND_SERVER}/api/quiz/${quizId}`);
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
  }, [quizId]); // Re-run effect when `quizId` changes

  const handleSubmit = () => {
    const selectedOption = quizData[currentQuestion]?.options.find(
      (option) => option.text === selectedAnswer
    );

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
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
          <p className="mt-4 text-lg font-semibold text-gray-600">
            Loading quiz data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  

  return (
    <div className="mt-20">
      <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{quizId ? quizId.charAt(0).toUpperCase() + quizId.slice(1) : ''} Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <>
            <Progress
              value={((currentQuestion + 1) / quizData.length) * 100}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-4">
              {quizData[currentQuestion]?.question}
            </h2>
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
            >
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
            <p className="text-xl">
              Your score: {score} out of {quizData.length * 3}
            </p>

            {score <= 5 ? (
              <p className="text-xl">Mild symptoms. Monitor your well-being.</p>
            ) : score <= 10 ? (
              <p className="text-xl">
                Moderate symptoms. Consider reaching out to a professional.
              </p>
            ) : (
              <p className="text-xl">
                Severe symptoms. Professional help is highly recommended.
              </p>
            )}
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
    </div>
    
  );
}

