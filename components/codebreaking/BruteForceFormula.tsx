"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiMath, BiTime, BiChip, BiCalculator } from "react-icons/bi";

interface FormulaStep {
  title: string;
  formula: string;
  explanation: string;
  calculation: string;
  result: string;
  color: string;
}

export const BruteForceFormula = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [variables, setVariables] = useState({
    rotors: 3,
    positions: 26,
    plugboardPairs: 10,
    keysPerSecond: 1000,
  });

  const steps: FormulaStep[] = [
    {
      title: "Rotor Configurations",
      formula: "R = 26^n",
      explanation: "Each rotor has 26 positions, and positions are independent",
      calculation: `26^${variables.rotors}`,
      result: Math.pow(26, variables.rotors).toLocaleString(),
      color: "from-red-400 to-red-600",
    },
    {
      title: "Rotor Selection",
      formula: "S = n! × C(5,n)",
      explanation: "Order matters and we choose from available rotors",
      calculation: "3! × C(5,3) = 6 × 10",
      result: "60",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Plugboard Complexity",
      formula: "P = 26!/(2^p × p! × (26-2p)!)",
      explanation: "Pairing letters with order independence",
      calculation: `p = ${variables.plugboardPairs}`,
      result: "150,738,274,937,250",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Total Keyspace",
      formula: "K = R × S × P",
      explanation: "Multiply all independent configuration spaces",
      calculation: `${Math.pow(26, variables.rotors).toLocaleString()} × 60 × 150T`,
      result: "1.59 × 10²³",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Average Search Time",
      formula: "T = K/(2 × rate)",
      explanation: "On average, we find the key halfway through search",
      calculation: `1.59×10²³ / (2 × ${variables.keysPerSecond.toLocaleString()})`,
      result: calculateSearchTime(variables.keysPerSecond),
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Worst Case Time",
      formula: "T_worst = K/rate",
      explanation: "Maximum time if key is the last one tested",
      calculation: `1.59×10²³ / ${variables.keysPerSecond.toLocaleString()}`,
      result: calculateWorstTime(variables.keysPerSecond),
      color: "from-purple-400 to-purple-600",
    },
  ];

  function calculateSearchTime(rate: number): string {
    const keyspace = 1.59e23;
    const seconds = keyspace / (2 * rate);
    const years = seconds / (365.25 * 24 * 3600);

    if (years >= 1e15) return `${(years / 1e15).toFixed(1)} quadrillion years`;
    if (years >= 1e12) return `${(years / 1e12).toFixed(1)} trillion years`;
    if (years >= 1e9) return `${(years / 1e9).toFixed(1)} billion years`;
    if (years >= 1e6) return `${(years / 1e6).toFixed(1)} million years`;
    return `${years.toFixed(1)} years`;
  }

  function calculateWorstTime(rate: number): string {
    const keyspace = 1.59e23;
    const seconds = keyspace / rate;
    const years = seconds / (365.25 * 24 * 3600);

    if (years >= 1e15) return `${(years / 1e15).toFixed(1)} quadrillion years`;
    if (years >= 1e12) return `${(years / 1e12).toFixed(1)} trillion years`;
    if (years >= 1e9) return `${(years / 1e9).toFixed(1)} billion years`;
    if (years >= 1e6) return `${(years / 1e6).toFixed(1)} million years`;
    return `${years.toFixed(1)} years`;
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, steps.length]);

  const currentStepData = steps[currentStep];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
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
            Brute Force{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mathematics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understand the mathematical impossibility of brute force attacks
            against the Enigma machine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Controls */}
          <motion.div
            className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BiCalculator className="mr-3 text-blue-400" />
              Formula Parameters
            </h3>

            <div className="space-y-8">
              <div>
                <label className="block text-white font-medium mb-3">
                  Number of Rotors:{" "}
                  <span className="text-blue-400">{variables.rotors}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={variables.rotors}
                  onChange={(e) =>
                    setVariables((prev) => ({
                      ...prev,
                      rotors: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Plugboard Pairs:{" "}
                  <span className="text-blue-400">
                    {variables.plugboardPairs}
                  </span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="13"
                  value={variables.plugboardPairs}
                  onChange={(e) =>
                    setVariables((prev) => ({
                      ...prev,
                      plugboardPairs: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Keys/Second:{" "}
                  <span className="text-blue-400">
                    {variables.keysPerSecond.toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000000"
                  step="1000"
                  value={variables.keysPerSecond}
                  onChange={(e) =>
                    setVariables((prev) => ({
                      ...prev,
                      keysPerSecond: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>1940s: ~100</span>
                  <span>Modern: 1M+</span>
                </div>
              </div>

              {/* Auto-play controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                <span className="text-white font-medium">Formula Steps:</span>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isAutoPlaying
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {isAutoPlaying ? "Pause" : "Auto Play"}
                </button>
              </div>

              {/* Step Navigation */}
              <div className="grid grid-cols-3 gap-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      currentStep === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {index + 1}. {step.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formula Display */}
          <motion.div
            className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BiMath className="mr-3 text-cyan-400" />
              Mathematical Breakdown
            </h3>

            <motion.div
              key={currentStep}
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Current Step */}
              <div
                className={`bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent`}
              >
                <h4 className="text-3xl font-bold mb-4">
                  {currentStepData.title}
                </h4>
              </div>

              {/* Formula */}
              <div className="bg-black/30 rounded-xl p-6 border border-gray-600">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-mono text-cyan-400">
                    {currentStepData.formula}
                  </div>
                  <div className="text-lg font-mono text-yellow-400">
                    {currentStepData.calculation}
                  </div>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent`}
                  >
                    = {currentStepData.result}
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentStepData.explanation}
                </p>
              </div>

              {/* Visual Progress */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <span>
                    {Math.round(((currentStep + 1) / steps.length) * 100)}%
                    Complete
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${currentStepData.color}`}
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-2xl p-6 border border-red-500/30">
            <BiTime className="text-3xl text-red-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Time Complexity
            </h4>
            <p className="text-red-300 text-sm">
              Even with modern computers, brute force would take longer than the
              age of the universe
            </p>
            <div className="text-2xl font-bold text-red-400 mt-4">
              O(26^n × n! × P!)
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-2xl p-6 border border-orange-500/30">
            <BiChip className="text-3xl text-orange-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Computational Limit
            </h4>
            <p className="text-orange-300 text-sm">
              The keyspace grows exponentially with each additional rotor and
              plugboard pair
            </p>
            <div className="text-2xl font-bold text-orange-400 mt-4">
              1.59 × 10²³ keys
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-6 border border-blue-500/30">
            <BiMath className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Real Solution</h4>
            <p className="text-blue-300 text-sm">
              Codebreakers used patterns, cribs, and operational mistakes to
              reduce the search space
            </p>
            <div className="text-2xl font-bold text-blue-400 mt-4">
              ~20 minutes
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="mt-16 bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Brute Force vs. Real Codebreaking
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-white font-bold py-4 px-6">Approach</th>
                  <th className="text-white font-bold py-4 px-6">
                    Time Required
                  </th>
                  <th className="text-white font-bold py-4 px-6">Technology</th>
                  <th className="text-white font-bold py-4 px-6">
                    Success Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-red-400 font-medium">
                    Brute Force (1940s)
                  </td>
                  <td className="py-4 px-6 text-gray-300">Billions of years</td>
                  <td className="py-4 px-6 text-gray-300">Electromechanical</td>
                  <td className="py-4 px-6 text-red-400">0% (Impossible)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-orange-400 font-medium">
                    Brute Force (Modern)
                  </td>
                  <td className="py-4 px-6 text-gray-300">Millions of years</td>
                  <td className="py-4 px-6 text-gray-300">GPU Clusters</td>
                  <td className="py-4 px-6 text-orange-400">Eventually</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-green-400 font-medium">
                    Bombe + Cribs
                  </td>
                  <td className="py-4 px-6 text-gray-300">20 minutes</td>
                  <td className="py-4 px-6 text-gray-300">Electromechanical</td>
                  <td className="py-4 px-6 text-green-400">
                    High (with cribs)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
