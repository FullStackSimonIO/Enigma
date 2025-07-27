"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiPlay, BiPause, BiRefresh } from "react-icons/bi";

export const AlgorithmVisualization = () => {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputLetter, setInputLetter] = useState("A");
  const [isEncrypting, setIsEncrypting] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simplified Enigma simulation
  const rotorI = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  const rotorII = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  const rotorIII = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  const reflectorB = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const steps = [
    { name: "Input", description: "Letter enters the machine", color: "blue" },
    { name: "Plugboard", description: "First substitution", color: "green" },
    { name: "Rotor III", description: "Right rotor encoding", color: "purple" },
    { name: "Rotor II", description: "Middle rotor encoding", color: "indigo" },
    { name: "Rotor I", description: "Left rotor encoding", color: "violet" },
    { name: "Reflector", description: "Signal reflection", color: "red" },
    { name: "Rotor I⁻¹", description: "Left rotor return", color: "violet" },
    { name: "Rotor II⁻¹", description: "Middle rotor return", color: "indigo" },
    { name: "Rotor III⁻¹", description: "Right rotor return", color: "purple" },
    { name: "Plugboard⁻¹", description: "Final substitution", color: "green" },
    { name: "Output", description: "Encrypted letter", color: "yellow" },
  ];

  const simulateStep = (letter: string, step: number) => {
    const current = letter;
    const letterIndex = alphabet.indexOf(current);

    switch (step) {
      case 0: // Input
        return letter;
      case 1: // Plugboard (simplified - no swaps)
        return current;
      case 2: // Rotor III
        return rotorIII[letterIndex];
      case 3: // Rotor II
        return rotorII[alphabet.indexOf(current)];
      case 4: // Rotor I
        return rotorI[alphabet.indexOf(current)];
      case 5: // Reflector
        return reflectorB[alphabet.indexOf(current)];
      case 6: // Rotor I return
        return alphabet[rotorI.indexOf(current)];
      case 7: // Rotor II return
        return alphabet[rotorII.indexOf(current)];
      case 8: // Rotor III return
        return alphabet[rotorIII.indexOf(current)];
      case 9: // Plugboard return
        return current;
      case 10: // Output
        return current;
      default:
        return letter;
    }
  };

  const getCurrentLetter = () => {
    let result = inputLetter;
    for (let i = 0; i <= currentStep; i++) {
      result = simulateStep(result, i);
    }
    return result;
  };

  useEffect(() => {
    if (!isPlaying || !isClient) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isClient, steps.length]);

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (currentStep >= steps.length - 1) {
      resetAnimation();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-purple-950 to-black">
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
            Algorithm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Visualization
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how a letter transforms through the Enigma&apos;s encryption
            process
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center space-x-4">
            <label className="text-white font-semibold">Input Letter:</label>
            <select
              value={inputLetter}
              onChange={(e) => {
                setInputLetter(e.target.value);
                resetAnimation();
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-400 focus:outline-none"
            >
              {alphabet.split("").map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={togglePlayPause}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <BiPause className="text-xl" />
              ) : (
                <BiPlay className="text-xl" />
              )}
              <span>
                {isPlaying
                  ? "Pause"
                  : currentStep >= steps.length - 1
                    ? "Restart"
                    : "Play"}
              </span>
            </motion.button>

            <motion.button
              onClick={resetAnimation}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiRefresh className="text-xl" />
              <span>Reset</span>
            </motion.button>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-white font-semibold">Mode:</label>
            <button
              onClick={() => setIsEncrypting(!isEncrypting)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isEncrypting
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {isEncrypting ? "Encrypt" : "Decrypt"}
            </button>
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700">
          {/* Current Letter Display */}
          <div className="text-center mb-12">
            <motion.div
              key={getCurrentLetter()}
              className="inline-block"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-6xl font-bold text-white">
                  {getCurrentLetter()}
                </span>
              </div>
            </motion.div>
            <p className="text-gray-300 text-lg">
              Step {currentStep + 1} of {steps.length}:{" "}
              <span className="text-purple-400 font-semibold">
                {steps[currentStep]?.name}
              </span>
            </p>
          </div>

          {/* Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className={`relative p-4 rounded-xl border-2 transition-all duration-500 ${
                  index <= currentStep
                    ? `border-${step.color}-400 bg-gradient-to-br from-${step.color}-900/50 to-${step.color}-800/30`
                    : "border-gray-600 bg-gray-800/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center font-bold ${
                      index <= currentStep
                        ? `bg-${step.color}-500 text-white`
                        : "bg-gray-700 text-gray-400"
                    }`}
                    animate={
                      index === currentStep
                        ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: index === currentStep ? Infinity : 0,
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  <h4
                    className={`font-bold text-sm mb-1 ${
                      index <= currentStep ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </h4>
                  <p
                    className={`text-xs ${
                      index <= currentStep ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                {index <= currentStep && (
                  <motion.div
                    className={`absolute -top-1 -right-1 w-4 h-4 bg-${step.color}-400 rounded-full`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Signal Flow Animation */}
          <div className="relative h-24 bg-gray-800 rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                initial={{ width: "0%", x: "0%" }}
                animate={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Moving Signal Dot */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg"
              animate={{
                x: `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Transformation Details */}
          <AnimatePresence>
            {currentStep > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  Transformation Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Previous Step
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      {currentStep > 0
                        ? simulateStep(inputLetter, currentStep - 1)
                        : inputLetter}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">
                      Current Process
                    </div>
                    <div className="text-lg text-purple-400 font-semibold">
                      {steps[currentStep]?.name}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Result</div>
                    <div className="text-2xl font-bold text-green-400">
                      {getCurrentLetter()}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
