"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCheck } from "react-icons/bi";

export const SelfEncryptionChallenge = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Ensure animations only run on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const checkAnswer = () => {
    setAttempts((prev) => prev + 1);
    const correctAnswers = [
      "reflector",
      "reflection",
      "mirror",
      "symmetric",
      "symmetry",
      "reciprocal",
      "bidirectional",
    ];

    const isCorrect = correctAnswers.some((answer) =>
      userAnswer.toLowerCase().includes(answer.toLowerCase())
    );

    if (isCorrect) {
      setChallengeCompleted(true);
      setShowExplanation(true);
    } else if (attempts >= 2) {
      setShowExplanation(true);
    }
  };

  const resetChallenge = () => {
    setSelectedLetter(null);
    setUserAnswer("");
    setShowExplanation(false);
    setChallengeCompleted(false);
    setAttempts(0);
  };

  const simulateEncryption = (letter: string) => {
    // Simplified simulation showing how reflector prevents self-encryption
    const reflectorPairs: { [key: string]: string } = {
      A: "R",
      B: "C",
      D: "F",
      G: "H",
      I: "J",
      K: "L",
      M: "N",
      O: "P",
      Q: "S",
      T: "U",
      V: "W",
      X: "Y",
      Z: "E",
      R: "A",
      C: "B",
      F: "D",
      H: "G",
      J: "I",
      L: "K",
      N: "M",
      P: "O",
      S: "Q",
      U: "T",
      W: "V",
      Y: "X",
      E: "Z",
    };

    return reflectorPairs[letter] || letter;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mini <span className="text-yellow-400">Challenge</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover why the same letter can never encrypt to itself in the
            Enigma machine
          </p>
        </motion.div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          {!challengeCompleted && !showExplanation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Challenge Introduction */}
              <div className="text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4"
                  animate={
                    isClient
                      ? {
                          boxShadow: [
                            "0 0 0 0 rgba(234, 179, 8, 0.4)",
                            "0 0 0 20px rgba(234, 179, 8, 0)",
                            "0 0 0 0 rgba(234, 179, 8, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-yellow-400 text-2xl">💡</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Self-Encryption Mystery
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Try encrypting any letter and observe something interesting...
                </p>
              </div>

              {/* Letter Selection */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-center">
                  Select a letter to encrypt:
                </h4>
                <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-13 gap-2 max-w-4xl mx-auto">
                  {alphabet.split("").map((letter) => (
                    <motion.button
                      key={letter}
                      onClick={() => setSelectedLetter(letter)}
                      className={`aspect-square rounded-lg border font-mono text-lg font-bold transition-all ${
                        selectedLetter === letter
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-400"
                          : "border-gray-600 bg-gray-800 text-gray-300 hover:border-yellow-500 hover:bg-yellow-500/10"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {letter}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Encryption Result */}
              {selectedLetter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">Input</div>
                      <div className="w-16 h-16 bg-blue-500/20 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-400">
                          {selectedLetter}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={isClient ? { x: [0, 10, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-gray-400 text-2xl">→</span>
                    </motion.div>

                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">Output</div>
                      <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 rounded-lg flex items-center justify-center">
                        <motion.span
                          className="text-2xl font-bold text-red-400"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            delay: 0.2,
                          }}
                        >
                          {simulateEncryption(selectedLetter)}
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <p className="text-gray-300">
                      Notice:{" "}
                      <span className="text-yellow-400 font-semibold">
                        {selectedLetter}
                      </span>{" "}
                      encrypts to{" "}
                      <span className="text-red-400 font-semibold">
                        {simulateEncryption(selectedLetter)}
                      </span>
                      {selectedLetter === simulateEncryption(selectedLetter) ? (
                        <span className="text-red-400">
                          {" "}
                          - Wait, this shouldn&apos;t happen!
                        </span>
                      ) : (
                        <span className="text-green-400">
                          {" "}
                          - Never the same letter!
                        </span>
                      )}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Challenge Question */}
              {selectedLetter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <h4 className="text-white font-semibold text-center">
                    🤔 Why can no letter encrypt to itself in the Enigma
                    machine?
                  </h4>

                  <div className="space-y-3">
                    <textarea
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Type your answer here... (Hint: Think about the signal path)"
                      className="w-full h-24 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none"
                    />

                    <div className="flex justify-center space-x-4">
                      <motion.button
                        onClick={checkAnswer}
                        disabled={!userAnswer.trim()}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                        whileHover={{ scale: userAnswer.trim() ? 1.02 : 1 }}
                        whileTap={{ scale: userAnswer.trim() ? 0.98 : 1 }}
                      >
                        Submit Answer
                      </motion.button>

                      <motion.button
                        onClick={resetChallenge}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Reset
                      </motion.button>
                    </div>
                  </div>

                  {attempts > 0 && attempts < 3 && !challengeCompleted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-orange-400"
                    >
                      {attempts === 1
                        ? "Try again! Think about the reflector..."
                        : "One more try! Consider the signal path..."}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Results and Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Result Header */}
                <div className="text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                      challengeCompleted ? "bg-green-500/20" : "bg-blue-500/20"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {challengeCompleted ? (
                      <BiCheck className="text-green-400 text-2xl" />
                    ) : (
                      <span className="text-blue-400 text-2xl">💡</span>
                    )}
                  </motion.div>

                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      challengeCompleted ? "text-green-400" : "text-blue-400"
                    }`}
                  >
                    {challengeCompleted
                      ? "Excellent! You got it!"
                      : "Here's the Answer"}
                  </h3>
                </div>

                {/* Explanation */}
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4">
                    The Reflector&apos;s Secret
                  </h4>

                  <div className="space-y-3 text-gray-300">
                    <p>
                      <span className="text-cyan-400 font-semibold">
                        The reflector
                      </span>{" "}
                      is the key component that makes self-encryption
                      impossible!
                    </p>

                    <p>
                      Here&apos;s why: The reflector contains{" "}
                      <span className="text-yellow-400">
                        13 pairs of letters
                      </span>{" "}
                      that are wired together. When a signal reaches the
                      reflector, it&apos;s sent back through a{" "}
                      <span className="text-red-400">different path</span>.
                    </p>

                    <p>
                      Since the reflector pairs are{" "}
                      <span className="text-purple-400">symmetric</span> (if A
                      connects to R, then R connects to A), and no letter can be
                      paired with itself,{" "}
                      <span className="text-green-400">
                        no letter can ever encrypt to itself
                      </span>
                      .
                    </p>

                    <p className="text-orange-400 font-semibold">
                      This was actually a weakness that helped Allied
                      codebreakers! They knew that if they saw an &apos;E&apos;
                      in the encrypted message, the original letter could never
                      have been &apos;E&apos;.
                    </p>
                  </div>
                </div>

                {/* Visual Diagram */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-white mb-4 text-center">
                    Signal Path Visualization
                  </h4>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Input</div>
                    </div>
                    <span className="text-gray-400 text-2xl">→</span>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        ↩️
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Reflector
                      </div>
                    </div>
                    <span className="text-gray-400 text-2xl">→</span>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                        R
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Output</div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    A always pairs with R in the reflector - never with itself!
                  </p>
                </div>

                <div className="text-center">
                  <motion.button
                    onClick={resetChallenge}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Try Another Letter
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SelfEncryptionChallenge;
