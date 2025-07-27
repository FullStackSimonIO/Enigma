"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CodebreakingHeroProps {
  title: string;
  description: string;
}

export const CodebreakingHero = ({
  title,
  description,
}: CodebreakingHeroProps) => {
  const [isClient, setIsClient] = useState(false);
  const [crackedLetters, setCrackedLetters] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCrackedLetters((prev) => (prev + 1) % 15);
    }, 2000);

    return () => clearInterval(interval);
  }, [isClient]);

  const codeMatrix = [
    "XKQPWMNJHGFDSA",
    "ZYXWVUTSRQPONM",
    "PLOKIJUHYGTFRD",
    "MNBVCXZLKJHGFD",
    "QWERTYUIOPASDF",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black">
      {/* Breaking Code Animation Background */}
      <div className="absolute inset-0 opacity-20">
        {codeMatrix.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center space-x-2 mb-4"
            style={{ top: `${rowIndex * 15}%` }}
          >
            {row.split("").map((letter, colIndex) => {
              const isRevealed = rowIndex * 14 + colIndex < crackedLetters;
              return (
                <motion.span
                  key={colIndex}
                  className={`font-mono text-lg ${isRevealed ? "text-green-400" : "text-red-400"}`}
                  animate={
                    isClient
                      ? {
                          opacity: [0.3, 1, 0.3],
                          scale: isRevealed ? [1, 1.2, 1] : [1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    delay: (rowIndex + colIndex) * 0.1,
                    repeat: Infinity,
                  }}
                >
                  {isRevealed ? letter : "█"}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"
            style={{ top: `${i * 16}%` }}
            animate={
              isClient
                ? {
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const binary = ["0", "1", "⚡", "⚠"];
          const char = binary[i % binary.length];
          const leftPos = ((i * 7 + 3) % 95) + 2.5;

          return (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-red-400/40 font-mono text-xs"
              style={{ left: `${leftPos}%`, top: "-5%" }}
              animate={
                isClient
                  ? {
                      y: ["0vh", "105vh"],
                      opacity: [0, 0.8, 0],
                    }
                  : {}
              }
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                delay: (i % 10) * 0.3,
                ease: "linear",
              }}
            >
              {char}
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Breaking Icon */}
          <motion.div
            className="mb-8"
            animate={
              isClient
                ? {
                    rotate: [0, 5, -5, 0],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={
                  isClient
                    ? {
                        x: ["-100%", "100%"],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="text-5xl font-bold text-white relative z-10">
                🔓
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {description}
          </motion.p>

          {/* Breaking Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 p-8 rounded-2xl border border-red-500/30">
              <motion.div
                className="text-4xl font-bold text-red-400 mb-2"
                animate={
                  isClient
                    ? {
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                1943
              </motion.div>
              <div className="text-gray-300">First Break</div>
              <div className="text-sm text-gray-400 mt-2">
                Bletchley Park Success
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 p-8 rounded-2xl border border-orange-500/30">
              <motion.div
                className="text-4xl font-bold text-orange-400 mb-2"
                animate={
                  isClient
                    ? {
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              >
                3,000
              </motion.div>
              <div className="text-gray-300">Messages/Day</div>
              <div className="text-sm text-gray-400 mt-2">
                At Peak Operation
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 p-8 rounded-2xl border border-yellow-500/30">
              <motion.div
                className="text-4xl font-bold text-yellow-400 mb-2"
                animate={
                  isClient
                    ? {
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2,
                }}
              >
                2+
              </motion.div>
              <div className="text-gray-300">Years Shorter</div>
              <div className="text-sm text-gray-400 mt-2">
                War Duration Estimate
              </div>
            </div>
          </motion.div>

          {/* Key Breaking Methods */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 p-6 rounded-2xl border border-gray-600/50">
              <h3 className="text-xl font-bold text-red-400 mb-3">
                🤖 The Bombe
              </h3>
              <p className="text-gray-300">
                Electromechanical computer designed by Alan Turing to
                systematically test Enigma configurations
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 p-6 rounded-2xl border border-gray-600/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                📝 Cribs
              </h3>
              <p className="text-gray-300">
                Known plaintext patterns used as starting points for
                cryptanalysis attacks
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Cipher Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {["⚡", "🔍", "⚙️", "📊", "🧮", "💻"].map((icon, i) => {
          const leftPos = ((i * 15 + 8) % 85) + 7.5;
          const topPos = ((i * 23 + 12) % 70) + 15;

          return (
            <motion.div
              key={`icon-${i}`}
              className="absolute text-3xl opacity-20"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={
                isClient
                  ? {
                      y: [0, -20, 0],
                      rotate: [0, 15, -15, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }
                  : {}
              }
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: (i % 4) * 0.7,
              }}
            >
              {icon}
            </motion.div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={
          isClient
            ? {
                y: [0, 10, 0],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-red-400 rounded-full mt-2"
              animate={
                isClient
                  ? {
                      y: [0, 12, 0],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
          <div className="text-sm text-red-400 font-mono">DECRYPT</div>
        </div>
      </motion.div>
    </section>
  );
};
