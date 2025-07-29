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
  const [isExpanded, setIsExpanded] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-black">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0">
        {/* Matrix-style falling code */}
        {isClient &&
          Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="absolute text-blue-400/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${-10 + Math.random() * 10}%`,
              }}
              animate={{
                y: [0, window?.innerHeight || 1000],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              {Math.random().toString(36).substring(2, 8)}
            </motion.div>
          ))}

        {/* Scanning grid */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="grid grid-cols-20 grid-rows-20 h-full w-full"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {isClient &&
              Array.from({ length: 400 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-blue-500/10"
                  animate={{
                    backgroundColor: [
                      "rgba(59, 130, 246, 0)",
                      "rgba(59, 130, 246, 0.1)",
                      "rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    delay: (i % 20) * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
          </motion.div>
        </div>

        {/* Radar sweep */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border border-blue-400/20 rounded-full" />
          <div className="absolute inset-4 border border-blue-400/10 rounded-full" />
          <div className="absolute inset-8 border border-blue-400/10 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-red-500/50 to-transparent origin-left"
            style={{ transformOrigin: "0% 50%" }}
          />
        </motion.div>

        {/* Circuit pathways */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M100,100 L900,100 L900,500 L500,500 L500,900 L100,900 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-blue-400"
            pathLength={0}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.path
            d="M200,200 L800,200 L800,600 L400,600 L400,800 L200,800 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-red-400"
            pathLength={0}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </svg>
      </div>
      {/* Breaking Code Animation Background */}
      <div className="absolute inset-0 opacity-10">
        {codeMatrix.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-4"
            style={{ top: `${rowIndex * 15}%` }}
          >
            {row.split("").map((letter, colIndex) => {
              const isRevealed = rowIndex * 14 + colIndex < crackedLetters;
              return (
                <motion.span
                  key={colIndex}
                  className={`font-mono text-sm sm:text-lg ${isRevealed ? "text-red-400" : "text-red-800/50"}`}
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
      <div className="absolute inset-0 opacity-20">
        {isClient &&
          Array.from({ length: 6 }).map((_, i) => (
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

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Breaking Icon */}
          <motion.div
            className="mb-6 sm:mb-8"
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
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl shadow-blue-500/25">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
              <span className="text-4xl sm:text-5xl font-bold text-white relative z-10">
                🔓
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-red-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className={`transition-all duration-300 ${
                isExpanded ? "" : "line-clamp-4"
              }`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "none" : "4",
                WebkitBoxOrient: "vertical",
                overflow: isExpanded ? "visible" : "hidden",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-300 text-justify mb-3 leading-relaxed"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </motion.div>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-red-400 hover:text-red-300 transition-colors font-medium mb-8 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {isExpanded ? "Weniger anzeigen" : "Mehr lesen"}
            </motion.button>
          </div>

          {/* Breaking Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6 sm:p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2"
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
              <div className="text-gray-300 font-medium">Erster Durchbruch</div>
              <div className="text-sm text-gray-400 mt-2">
                Bletchley Park Erfolg
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/60 to-red-800/40 p-6 sm:p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-red-400 mb-2"
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
              <div className="text-gray-300 font-medium">Nachrichten/Tag</div>
              <div className="text-sm text-gray-400 mt-2">
                Zur Hochzeit des Betriebs
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/60 to-red-800/40 p-6 sm:p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-red-400 mb-2"
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
              <div className="text-gray-300 font-medium">Jahre kürzer</div>
              <div className="text-sm text-gray-400 mt-2">
                Kriegsdauer Schätzung
              </div>
            </div>
          </motion.div>

          {/* Key Breaking Methods */}
          <motion.div
            className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-3">
                🤖 Die Bombe
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Elektromechanischer Computer von Alan Turing entwickelt, um
                systematisch Enigma-Konfigurationen zu testen
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-3">
                📝 Cribs
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Bekannte Klartextmuster, die als Ausgangspunkte für
                kryptoanalytische Angriffe verwendet wurden
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
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
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 sm:h-3 bg-red-400 rounded-full mt-2"
              animate={
                isClient
                  ? {
                      y: [0, 10, 0],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
          <div className="text-xs sm:text-sm text-red-400 font-mono">
            ENTSCHLÜSSELN
          </div>
        </div>
      </motion.div>
    </section>
  );
};
