"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiLock, BiLockOpen, BiRefresh, BiCopy } from "react-icons/bi";

export const InteractiveEncryption = () => {
  const [inputText, setInputText] = useState("HELLO");
  const [outputText, setOutputText] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [rotorPositions, setRotorPositions] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);

  // Simplified Enigma rotors and reflector
  const rotors = [
    "EKMFLGDQVZNTOWYHXUSPAIBRCJ", // Rotor I
    "AJDKSIRUXBLHWTMCQGZNPYFVOE", // Rotor II
    "BDFHJLCPRTXVZNYEIWGAKMUSQO", // Rotor III
  ];
  const reflector = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const encryptLetter = (letter: string, positions: number[]) => {
    if (!alphabet.includes(letter)) return letter;

    let index = alphabet.indexOf(letter);

    // Forward through rotors
    for (let i = 2; i >= 0; i--) {
      index = (index + positions[i]) % 26;
      index = alphabet.indexOf(rotors[i][index]);
    }

    // Reflector
    index = alphabet.indexOf(reflector[index]);

    // Backward through rotors
    for (let i = 0; i < 3; i++) {
      index = rotors[i].indexOf(alphabet[index]);
      index = (index - positions[i] + 26) % 26;
    }

    return alphabet[index];
  };

  const processText = async (text: string) => {
    setIsAnimating(true);
    setOutputText("");

    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
    let result = "";
    const currentPositions = [...rotorPositions];

    for (let i = 0; i < cleanText.length; i++) {
      setCurrentLetterIndex(i);

      // Simulate rotor stepping - mutating the array is intentional here
      currentPositions[2] = (currentPositions[2] + 1) % 26;
      if (currentPositions[2] === 0) {
        currentPositions[1] = (currentPositions[1] + 1) % 26;
        if (currentPositions[1] === 0) {
          currentPositions[0] = (currentPositions[0] + 1) % 26;
        }
      }

      const encryptedChar = encryptLetter(cleanText[i], currentPositions);
      result += encryptedChar;
      setOutputText(result);

      // Wait for animation
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setRotorPositions(currentPositions);
    setCurrentLetterIndex(-1);
    setIsAnimating(false);
  };

  const handleProcessText = () => {
    if (inputText.trim()) {
      processText(inputText);
    }
  };

  const resetMachine = () => {
    setRotorPositions([0, 0, 0]);
    setOutputText("");
    setCurrentLetterIndex(-1);
    setIsAnimating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  const setRotorPosition = (rotorIndex: number, position: number) => {
    const newPositions = [...rotorPositions];
    newPositions[rotorIndex] = position;
    setRotorPositions(newPositions);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101828]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Interactive{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Encryption
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the Enigma machine firsthand - encrypt and decrypt
            messages with live visualization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls Panel */}
          <motion.div
            className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Machine Controls
            </h3>

            {/* Mode Toggle */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">
                Operation Mode
              </label>
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setIsEncrypting(true)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    isEncrypting
                      ? "bg-green-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <BiLock className="text-xl" />
                  <span>Encrypt</span>
                </button>
                <button
                  onClick={() => setIsEncrypting(false)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    !isEncrypting
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <BiLockOpen className="text-xl" />
                  <span>Decrypt</span>
                </button>
              </div>
            </div>

            {/* Rotor Settings */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">
                Rotor Positions
              </label>
              <div className="grid grid-cols-3 gap-4">
                {rotorPositions.map((position, index) => (
                  <div key={index} className="text-center">
                    <label className="block text-sm text-gray-400 mb-2">
                      Rotor {index + 1}
                    </label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <input
                        type="range"
                        min="0"
                        max="25"
                        value={position}
                        onChange={(e) =>
                          setRotorPosition(index, parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        disabled={isAnimating}
                      />
                      <div className="mt-2 text-center">
                        <span className="flex w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full items-center justify-center text-white font-bold">
                          {alphabet[position]}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Text */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">
                Input Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) =>
                  setInputText(
                    e.target.value.toUpperCase().replace(/[^A-Z\s]/g, "")
                  )
                }
                placeholder="Enter your message..."
                className="w-full h-24 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none font-mono"
                disabled={isAnimating}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.button
                onClick={handleProcessText}
                disabled={isAnimating || !inputText.trim()}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isEncrypting ? (
                  <BiLock className="text-xl" />
                ) : (
                  <BiLockOpen className="text-xl" />
                )}
                <span>
                  {isAnimating
                    ? "Processing..."
                    : isEncrypting
                      ? "Encrypt"
                      : "Decrypt"}
                </span>
              </motion.button>

              <motion.button
                onClick={resetMachine}
                className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BiRefresh className="text-xl" />
              </motion.button>
            </div>
          </motion.div>

          {/* Output Panel */}
          <motion.div
            className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Output</h3>

            {/* Live Processing Display */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">
                Real-time Processing
              </label>
              <div className="bg-gray-800 rounded-lg p-4 min-h-24 font-mono">
                {inputText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block mr-1 p-1 rounded ${
                      index === currentLetterIndex
                        ? "bg-cyan-500 text-white"
                        : index < (outputText.length || 0)
                          ? "bg-green-600 text-white"
                          : "text-gray-400"
                    }`}
                    animate={
                      index === currentLetterIndex
                        ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {char === " " ? "⠀" : char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Output Text */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white font-semibold">
                  {isEncrypting ? "Encrypted" : "Decrypted"} Text
                </label>
                {outputText && (
                  <motion.button
                    onClick={copyToClipboard}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiCopy />
                    <span className="text-sm">Copy</span>
                  </motion.button>
                )}
              </div>
              <div className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 min-h-24 font-mono">
                <AnimatePresence>
                  {outputText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-cyan-400 text-lg"
                    >
                      {char}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {inputText.replace(/[^A-Z]/g, "").length}
                </div>
                <div className="text-sm text-gray-400">Input Length</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">
                  {outputText.length}
                </div>
                <div className="text-sm text-gray-400">Output Length</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Information Panel */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-cyan-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-2xl font-bold text-white mb-4">How It Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h5 className="font-semibold text-cyan-400 mb-2">
                1. Rotor Stepping
              </h5>
              <p className="text-sm">
                Each keypress advances the rightmost rotor, creating a
                constantly changing cipher alphabet.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-cyan-400 mb-2">
                2. Multiple Substitutions
              </h5>
              <p className="text-sm">
                The signal passes through three rotors, gets reflected, then
                returns through the same rotors in reverse.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-cyan-400 mb-2">
                3. Self-Reciprocal
              </h5>
              <p className="text-sm">
                The same machine settings that encrypt a message will decrypt
                it, making it perfect for field use.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
