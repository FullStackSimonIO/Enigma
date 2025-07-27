"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiBulb,
  BiCrosshair,
  BiTime,
  BiGroup,
  BiShield,
  BiCheck,
} from "react-icons/bi";

interface Tactic {
  id: string;
  name: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Impossible";
  timeToBreak: string;
  successRate: number;
  requirements: string[];
  explanation: string;
  historicalUse: string;
  color: string;
  icon: React.ReactNode;
}

export const TacticsResume = () => {
  const [selectedTactic, setSelectedTactic] = useState("cribs");

  const tactics: Tactic[] = [
    {
      id: "cribs",
      name: "Crib-based Attack",
      description: "Using known plaintext fragments to deduce settings",
      difficulty: "Medium",
      timeToBreak: "20 minutes - 2 hours",
      successRate: 85,
      requirements: [
        "Known plaintext fragments",
        "Bombe machine",
        "Pattern recognition",
      ],
      explanation:
        "Codebreakers exploited predictable German messages like weather reports, military formalities, and repeated phrases. By knowing likely plaintext positions, they could test specific rotor settings rather than all possibilities.",
      historicalUse:
        "Primary method used at Bletchley Park. Most successful against routine military communications.",
      color: "from-green-400 to-green-600",
      icon: <BiCrosshair />,
    },
    {
      id: "frequency",
      name: "Frequency Analysis",
      description: "Analyzing letter frequency patterns in encrypted text",
      difficulty: "Hard",
      timeToBreak: "Days to weeks",
      successRate: 25,
      requirements: [
        "Large amounts of ciphertext",
        "Statistical analysis",
        "Language expertise",
      ],
      explanation:
        "Traditional cryptanalysis technique that works on simple substitution ciphers. Limited effectiveness against Enigma due to the polyalphabetic nature and daily key changes.",
      historicalUse:
        "Early attempts before mechanical methods. Largely abandoned for Enigma due to low success rate.",
      color: "from-yellow-400 to-yellow-600",
      icon: <BiBulb />,
    },
    {
      id: "operator-errors",
      name: "Operator Mistakes",
      description: "Exploiting human errors in Enigma operation",
      difficulty: "Easy",
      timeToBreak: "Minutes to hours",
      successRate: 70,
      requirements: [
        "Traffic analysis",
        "Pattern recognition",
        "Multiple intercepts",
      ],
      explanation:
        "German operators often made procedural errors: reusing settings, weak message keys, or sending the same message twice. These mistakes provided crucial entry points for codebreakers.",
      historicalUse:
        "Constantly exploited throughout the war. German procedures improved over time, reducing opportunities.",
      color: "from-orange-400 to-orange-600",
      icon: <BiGroup />,
    },
    {
      id: "depth-analysis",
      name: "Depth Analysis",
      description: "Comparing multiple messages with same settings",
      difficulty: "Medium",
      timeToBreak: "1-8 hours",
      successRate: 60,
      requirements: [
        "Multiple messages on same key",
        "Mathematical analysis",
        "Time correlation",
      ],
      explanation:
        "When multiple messages were sent with identical rotor positions (depth), codebreakers could compare them to deduce the substitution pattern and potentially recover the plaintext.",
      historicalUse:
        "Used when operators failed to advance rotors between messages or during high-traffic periods.",
      color: "from-blue-400 to-blue-600",
      icon: <BiTime />,
    },
    {
      id: "brute-force",
      name: "Brute Force Attack",
      description: "Testing every possible key combination",
      difficulty: "Impossible",
      timeToBreak: "Millions of years",
      successRate: 0,
      requirements: [
        "Unlimited computational power",
        "Perfect preservation of ciphertext",
        "Time machine",
      ],
      explanation:
        "Systematically testing all 1.59×10²³ possible Enigma configurations. Even with modern supercomputers, this approach would take longer than the age of the universe.",
      historicalUse:
        "Never seriously attempted due to mathematical impossibility with available technology.",
      color: "from-red-400 to-red-600",
      icon: <BiShield />,
    },
  ];

  const currentTactic =
    tactics.find((t) => t.id === selectedTactic) || tactics[0];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Hard":
        return "text-orange-400";
      case "Impossible":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getDifficultyBg = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-900/30 border-green-500/30";
      case "Medium":
        return "bg-yellow-900/30 border-yellow-500/30";
      case "Hard":
        return "bg-orange-900/30 border-orange-500/30";
      case "Impossible":
        return "bg-red-900/30 border-red-500/30";
      default:
        return "bg-gray-900/30 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
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
            Codebreaking{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Tactics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the ingenious methods used to crack the Enigma code and
            understand why intelligence triumphed over brute force
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tactics List */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Breaking Methods
            </h3>
            {tactics.map((tactic, index) => (
              <motion.button
                key={tactic.id}
                onClick={() => setSelectedTactic(tactic.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedTactic === tactic.id
                    ? `bg-gradient-to-r ${tactic.color} bg-opacity-20 border-opacity-50 border-current`
                    : "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div
                    className={`text-xl bg-gradient-to-r ${tactic.color} bg-clip-text text-transparent`}
                  >
                    {tactic.icon}
                  </div>
                  <h4 className="text-white font-bold">{tactic.name}</h4>
                </div>
                <p className="text-gray-400 text-sm">{tactic.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded ${getDifficultyBg(tactic.difficulty)}`}
                  >
                    <span className={getDifficultyColor(tactic.difficulty)}>
                      {tactic.difficulty}
                    </span>
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${tactic.color}`}
                        style={{ width: `${tactic.successRate}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">
                      {tactic.successRate}%
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Detailed View */}
          <motion.div
            className="lg:col-span-2 bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              key={selectedTactic}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div
                    className={`text-3xl bg-gradient-to-r ${currentTactic.color} bg-clip-text text-transparent`}
                  >
                    {currentTactic.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {currentTactic.name}
                    </h3>
                    <p className="text-gray-400">{currentTactic.description}</p>
                  </div>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg ${getDifficultyBg(currentTactic.difficulty)}`}
                >
                  <span
                    className={`font-bold ${getDifficultyColor(currentTactic.difficulty)}`}
                  >
                    {currentTactic.difficulty}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4 flex items-center">
                    <BiTime className="mr-2 text-blue-400" />
                    Time to Break
                  </h4>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${currentTactic.color} bg-clip-text text-transparent`}
                  >
                    {currentTactic.timeToBreak}
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4 flex items-center">
                    <BiCrosshair className="mr-2 text-green-400" />
                    Success Rate
                  </h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gray-700 rounded-full h-4">
                      <motion.div
                        className={`h-4 rounded-full bg-gradient-to-r ${currentTactic.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${currentTactic.successRate}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <span
                      className={`text-xl font-bold bg-gradient-to-r ${currentTactic.color} bg-clip-text text-transparent`}
                    >
                      {currentTactic.successRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h4 className="text-white font-bold mb-4 flex items-center">
                  <BiCheck className="mr-2 text-purple-400" />
                  Requirements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentTactic.requirements.map((req, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <BiCheck className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{req}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-8">
                <h4 className="text-white font-bold mb-4">How It Works</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentTactic.explanation}
                </p>
              </div>

              {/* Historical Use */}
              <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6">
                <h4 className="text-indigo-300 font-bold mb-3">
                  Historical Context
                </h4>
                <p className="text-indigo-200 leading-relaxed">
                  {currentTactic.historicalUse}
                </p>
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
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-800/20 rounded-2xl p-6 border border-green-500/30 text-center">
            <BiCrosshair className="text-4xl text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Intelligence Over Force
            </h4>
            <p className="text-green-300 text-sm">
              Codebreakers used human intelligence, pattern recognition, and
              operational knowledge rather than computational brute force.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-800/20 rounded-2xl p-6 border border-blue-500/30 text-center">
            <BiTime className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Speed Was Critical
            </h4>
            <p className="text-blue-300 text-sm">
              Daily key changes meant codebreakers had less than 24 hours to
              break each configuration before it became useless.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-800/20 rounded-2xl p-6 border border-purple-500/30 text-center">
            <BiBulb className="text-4xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Human Factor</h4>
            <p className="text-purple-300 text-sm">
              Many successes came from exploiting human errors and predictable
              behaviors rather than mathematical weaknesses.
            </p>
          </div>
        </motion.div>

        {/* Final Insight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/30 rounded-2xl p-8 border border-indigo-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            The Real Lesson
          </h3>
          <p className="text-indigo-200 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            The defeat of the Enigma wasn&apos;t achieved through superior
            technology or computational power, but through human ingenuity,
            collaborative intelligence, and the exploitation of procedural
            weaknesses. The codebreakers at Bletchley Park proved that
            understanding your enemy&apos;s habits and mistakes can be more
            powerful than any amount of brute force computing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
