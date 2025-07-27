"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiPlay, BiPause, BiRefresh, BiTimeFive, BiChip } from "react-icons/bi";

interface BreakingMethod {
  name: string;
  description: string;
  keysPerSecond: number;
  color: string;
  icon: React.ReactNode;
  year: number;
  hardware: string;
}

export const SpeedComparison = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentMethod, setCurrentMethod] = useState(0);
  const [timeUnit, setTimeUnit] = useState<"seconds" | "years">("years");

  const methods: BreakingMethod[] = [
    {
      name: "Manual Testing",
      description: "Human operators testing configurations by hand",
      keysPerSecond: 0.1,
      color: "from-red-500 to-red-600",
      icon: <BiTimeFive />,
      year: 1939,
      hardware: "Human operators",
    },
    {
      name: "Mechanical Bombe",
      description: "Turing's electromechanical breaking machine",
      keysPerSecond: 100,
      color: "from-orange-500 to-orange-600",
      icon: <BiChip />,
      year: 1940,
      hardware: "Electromechanical relays",
    },
    {
      name: "Electronic Bombe",
      description: "Improved electronic version",
      keysPerSecond: 1000,
      color: "from-yellow-500 to-yellow-600",
      icon: <BiChip />,
      year: 1943,
      hardware: "Vacuum tubes",
    },
    {
      name: "1970s Computer",
      description: "Early computer brute force attempt",
      keysPerSecond: 10000,
      color: "from-green-500 to-green-600",
      icon: <BiChip />,
      year: 1975,
      hardware: "Mainframe computer",
    },
    {
      name: "Modern CPU",
      description: "Single-threaded modern processor",
      keysPerSecond: 1000000,
      color: "from-blue-500 to-blue-600",
      icon: <BiChip />,
      year: 2020,
      hardware: "Intel i9 processor",
    },
    {
      name: "GPU Cluster",
      description: "Parallel processing on graphics cards",
      keysPerSecond: 1000000000,
      color: "from-purple-500 to-purple-600",
      icon: <BiChip />,
      year: 2024,
      hardware: "RTX 4090 cluster",
    },
  ];

  const enigmaKeyspace = 1.58e23; // Approximate full Enigma keyspace

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentMethod((prev) => (prev + 1) % methods.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAnimating, methods.length]);

  const calculateTimeToBreak = (keysPerSecond: number): number => {
    return enigmaKeyspace / 2 / keysPerSecond; // Average case
  };

  const formatTime = (seconds: number): string => {
    if (timeUnit === "seconds") {
      if (seconds >= 1e15) return `${(seconds / 1e15).toFixed(1)}P sec`;
      if (seconds >= 1e12) return `${(seconds / 1e12).toFixed(1)}T sec`;
      if (seconds >= 1e9) return `${(seconds / 1e9).toFixed(1)}B sec`;
      if (seconds >= 1e6) return `${(seconds / 1e6).toFixed(1)}M sec`;
      return `${seconds.toFixed(1)} sec`;
    } else {
      const years = seconds / (365.25 * 24 * 3600);
      if (years >= 1e15) return `${(years / 1e15).toFixed(1)}P years`;
      if (years >= 1e12) return `${(years / 1e12).toFixed(1)}T years`;
      if (years >= 1e9) return `${(years / 1e9).toFixed(1)}B years`;
      if (years >= 1e6) return `${(years / 1e6).toFixed(1)}M years`;
      if (years >= 1000) return `${(years / 1000).toFixed(1)}K years`;
      return `${years.toFixed(1)} years`;
    }
  };

  const getBarHeight = (keysPerSecond: number): number => {
    const maxKeys = Math.max(...methods.map((m) => m.keysPerSecond));
    return (Math.log10(keysPerSecond + 1) / Math.log10(maxKeys + 1)) * 100;
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setCurrentMethod(0);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
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
            Breaking{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speed
            </span>{" "}
            Analysis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare the evolution of codebreaking technology and understand why
            some methods succeeded where brute force failed
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsAnimating(!isAnimating)}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAnimating ? <BiPause /> : <BiPlay />}
              <span>{isAnimating ? "Pause" : "Start"} Animation</span>
            </motion.button>

            <motion.button
              onClick={resetAnimation}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiRefresh />
              <span>Reset</span>
            </motion.button>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-white font-medium">Time Unit:</span>
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setTimeUnit("seconds")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  timeUnit === "seconds"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Seconds
              </button>
              <button
                onClick={() => setTimeUnit("years")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  timeUnit === "years"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Years
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 mb-12 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Keys Tested Per Second
          </h3>

          <div className="relative h-96 flex items-end justify-center space-x-4 sm:space-x-8">
            {methods.map((method, index) => (
              <motion.div
                key={method.name}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Bar */}
                <motion.div
                  className={`w-12 sm:w-16 bg-gradient-to-t ${method.color} rounded-t-lg relative overflow-hidden`}
                  style={{
                    height: `${getBarHeight(method.keysPerSecond)}%`,
                    minHeight: "20px",
                  }}
                  animate={
                    isAnimating && currentMethod === index
                      ? {
                          scale: [1, 1.1, 1],
                          rotateY: [0, 10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated fill effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ y: "100%" }}
                    animate={{
                      y: isAnimating && currentMethod >= index ? "0%" : "100%",
                    }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />

                  {/* Icon */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-lg">
                    {method.icon}
                  </div>
                </motion.div>

                {/* Value Label */}
                <motion.div
                  className="mt-2 text-center"
                  animate={
                    isAnimating && currentMethod === index
                      ? { scale: [1, 1.2, 1] }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white font-bold text-sm">
                    {method.keysPerSecond >= 1e9
                      ? `${(method.keysPerSecond / 1e9).toFixed(1)}B`
                      : method.keysPerSecond >= 1e6
                        ? `${(method.keysPerSecond / 1e6).toFixed(1)}M`
                        : method.keysPerSecond >= 1e3
                          ? `${(method.keysPerSecond / 1e3).toFixed(1)}K`
                          : method.keysPerSecond.toString()}
                  </div>
                  <div className="text-gray-400 text-xs">{method.year}</div>
                </motion.div>

                {/* Method Name */}
                <div className="mt-2 text-center max-w-20">
                  <div className="text-white text-xs font-medium leading-tight">
                    {method.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Y-axis scale */}
          <div className="absolute left-0 top-8 h-96 flex flex-col justify-end text-gray-400 text-xs">
            <div>10⁹</div>
            <div>10⁶</div>
            <div>10³</div>
            <div>10⁰</div>
          </div>
        </motion.div>

        {/* Time to Break Comparison */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {methods.map((method, index) => {
            const timeToBreak = calculateTimeToBreak(method.keysPerSecond);
            return (
              <motion.div
                key={method.name}
                className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-colors"
                animate={
                  isAnimating && currentMethod === index
                    ? {
                        borderColor: [
                          "rgba(156, 163, 175, 0.4)",
                          "rgba(147, 51, 234, 0.8)",
                          "rgba(156, 163, 175, 0.4)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`text-2xl bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{method.name}</h4>
                    <p className="text-gray-400 text-sm">{method.year}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {method.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Speed:</span>
                    <span className="text-white font-mono">
                      {method.keysPerSecond >= 1e9
                        ? `${(method.keysPerSecond / 1e9).toFixed(1)}B/s`
                        : method.keysPerSecond >= 1e6
                          ? `${(method.keysPerSecond / 1e6).toFixed(1)}M/s`
                          : method.keysPerSecond >= 1e3
                            ? `${(method.keysPerSecond / 1e3).toFixed(1)}K/s`
                            : `${method.keysPerSecond}/s`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time to break:</span>
                    <span
                      className={`font-mono text-sm bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}
                    >
                      {formatTime(timeToBreak)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {method.hardware}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Reality Check */}
        <motion.div
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            The Reality of Brute Force
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">
                158,962,555,217,826,360,000,000,000
              </div>
              <div className="text-gray-300">Total Enigma configurations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">
                20 minutes
              </div>
              <div className="text-gray-300">
                Time for Bombe to find key with cribs
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                Impossible
              </div>
              <div className="text-gray-300">
                Brute force with 1940s technology
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-center mt-6 max-w-4xl mx-auto">
            The brilliance of the codebreakers wasn&apos;t in building faster
            machines, but in finding patterns and exploiting German operational
            procedures to avoid testing every possible key.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
