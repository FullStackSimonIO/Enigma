"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

interface CryptographyHeroProps {
  title: string;
  description: string;
}

export const CryptographyHero = ({
  title,
  description,
}: CryptographyHeroProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-black">
      {/* Animated Background - Mathematical Formulas */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => {
          const formulas = [
            "E(x) = (x + k) mod 26",
            "D(x) = (x - k) mod 26",
            "f(x) → R(x) → f⁻¹(x)",
            "P₁ ⊕ P₂ ⊕ P₃",
            "Σ(R₁ × R₂ × R₃)",
            "∀x ∈ A: f(x) ≠ x",
            "26³ × 6 × 10¹⁰",
            "H(K) = log₂(N)",
            "C = E_K(P)",
            "P = D_K(C)",
            "⟨R₁, R₂, R₃⟩",
            "150,738,274,937,250",
          ];

          const formula = formulas[i % formulas.length];
          const leftPos = ((i * 19 + 11) % 90) + 5;
          const topPos = ((i * 27 + 13) % 80) + 10;

          return (
            <motion.div
              key={`formula-${i}`}
              className="absolute text-cyan-300 font-mono text-lg"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={
                isClient
                  ? {
                      y: [0, -30, 0],
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.8, 1, 0.8],
                    }
                  : {}
              }
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                delay: (i % 6) * 0.5,
              }}
            >
              {formula}
            </motion.div>
          );
        })}
      </div>

      {/* Encryption Flow Visualization */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
            style={{
              left: `${10 + i * 10}%`,
              height: "100%",
            }}
            animate={
              isClient
                ? {
                    opacity: [0, 1, 0],
                    scaleY: [0, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Mathematical Symbol Animation */}
          <motion.div
            className="mb-8"
            animate={
              isClient
                ? {
                    rotate: [0, 360],
                  }
                : {}
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">∑</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p
              className={`text-xl sm:text-2xl text-gray-300 text-justify mb-4 leading-relaxed transition-all duration-300 ${
                !isDescriptionExpanded ? "line-clamp-3 overflow-hidden" : ""
              }`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: !isDescriptionExpanded ? 3 : "unset",
                WebkitBoxOrient: "vertical" as const,
                overflow: !isDescriptionExpanded ? "hidden" : "visible",
              }}
            >
              {description}
            </p>
            <motion.button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-4 flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">
                {isDescriptionExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </span>
              <motion.div
                animate={{ rotate: isDescriptionExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BiChevronDown />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Complexity Indicator */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-2xl border border-purple-500/30">
              <motion.div
                className="text-3xl font-bold text-purple-400 mb-2"
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
                26³
              </motion.div>
              <div className="text-gray-300">Rotor Positionen</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 p-6 rounded-2xl border border-cyan-500/30">
              <motion.div
                className="text-3xl font-bold text-cyan-400 mb-2"
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
                10¹⁰
              </motion.div>
              <div className="text-gray-300">Steckerbrett Einstellungen</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-2xl border border-blue-500/30">
              <motion.div
                className="text-3xl font-bold text-blue-400 mb-2"
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
                150T
              </motion.div>
              <div className="text-gray-300">Mögliche Kombinationen</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Binary Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const binary = ["0", "1"];
          const digit = binary[i % 2];
          const leftPos = ((i * 13 + 5) % 95) + 2.5;
          const topPos = ((i * 17 + 3) % 90) + 5;

          return (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-purple-400/30 font-mono text-sm"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={
                isClient
                  ? {
                      y: [0, -200],
                      opacity: [0, 0.6, 0],
                      rotate: [0, 180],
                    }
                  : {}
              }
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                delay: (i % 8) * 0.5,
              }}
            >
              {digit}
            </motion.div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};
