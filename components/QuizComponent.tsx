"use client";
import { useState } from "react";
import { QuizQuestion, unlockNextSection } from "@/lib/progress";
import { BiCheck, BiX, BiTrophy, BiStar } from "react-icons/bi";

interface QuizComponentProps {
  sectionId: string;
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
  requiredScore?: number;
}

export const QuizComponent = ({
  sectionId,
  questions,
  onComplete,
  requiredScore = 80,
}: QuizComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score and show results
      const correctAnswers = selectedAnswers.filter(
        (answer, index) => answer === questions[index].correctAnswer
      ).length;
      const score = Math.round((correctAnswers / questions.length) * 100);

      setShowResults(true);
      onComplete?.(score);

      // Update progress
      unlockNextSection(sectionId, score);
    }
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="text-center">
            <BiTrophy className="mx-auto text-yellow-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready for the Quiz?
            </h2>
            <p className="text-gray-300 mb-6">
              Test your knowledge about this section! You need {requiredScore}%
              to unlock the next section.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-400">
                <BiStar className="inline mr-2 text-yellow-500" />
                {questions.length} questions • {requiredScore}% required to pass
              </p>
            </div>
            <button
              onClick={() => setQuizStarted(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const passed = score >= requiredScore;

    return (
      <div className="max-w-2xl mx-auto p-8">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="text-center">
            {passed ? (
              <BiCheck className="mx-auto text-green-500 text-6xl mb-4" />
            ) : (
              <BiX className="mx-auto text-red-500 text-6xl mb-4" />
            )}

            <h2 className="text-2xl font-bold text-white mb-4">
              {passed ? "Congratulations!" : "Try Again"}
            </h2>

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <div className="text-4xl font-bold mb-2">
                <span className={passed ? "text-green-500" : "text-red-500"}>
                  {score}%
                </span>
              </div>
              <p className="text-gray-300">
                You got{" "}
                {
                  selectedAnswers.filter(
                    (answer, index) => answer === questions[index].correctAnswer
                  ).length
                }{" "}
                out of {questions.length} questions correct
              </p>
            </div>

            {passed ? (
              <div className="mb-6">
                <p className="text-green-400 mb-4">
                  🎉 You&#39;ve unlocked the next section!
                </p>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-sm text-green-300">
                    Great job! You can now proceed to the next chapter of your
                    Enigma journey.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <p className="text-red-400 mb-4">
                  You need {requiredScore}% to unlock the next section.
                </p>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-sm text-red-300">
                    Review the material and try again. You can retake the quiz
                    as many times as needed.
                  </p>
                </div>
              </div>
            )}

            <div className="space-x-4">
              <button
                onClick={resetQuiz}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Retake Quiz
              </button>
              {passed && (
                <button
                  onClick={() => window.location.reload()}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Continue Journey
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-white mb-6">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? "border-red-500 bg-red-500/10 text-white"
                  : "border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500 hover:bg-gray-700"
              }`}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-600 hover:bg-gray-700 text-white"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-red-500 hover:bg-red-600 text-white"
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
