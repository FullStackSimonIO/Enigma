"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

interface DesignHeroProps {
  title: string;
  description: string;
}

export const DesignHero = ({ title, description }: DesignHeroProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                left: `${i * 5 + 10}%`,
                height: "100%",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        {Array.from({ length: 15 }).map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration issues
          const leftPos = ((i * 17 + 13) % 90) + 5; // Deterministic left position
          const topPos = ((i * 23 + 7) % 80) + 10; // Deterministic top position

          return (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + (i % 3), // Deterministic duration based on index
                repeat: Infinity,
                delay: (i % 5) * 0.4, // Deterministic delay based on index
              }}
            >
              <div
                className={`w-2 h-2 ${i % 3 === 0 ? "bg-cyan-400" : i % 3 === 1 ? "bg-[#145dfb]" : "bg-purple-500"} opacity-30`}
                style={{
                  clipPath:
                    i % 4 === 0
                      ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                      : i % 4 === 1
                        ? "circle(50%)"
                        : i % 4 === 2
                          ? "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
                          : "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
            </motion.div>
          );
        })}

        {/* Scanning Lines Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Futuristic Frame */}
        <motion.div
          className="relative border border-cyan-400/30 rounded-lg p-8 sm:p-12 backdrop-blur-sm bg-black/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Corner Decorations */}
          {[0, 1, 2, 3].map((corner) => (
            <motion.div
              key={corner}
              className={`absolute w-6 h-6 border-cyan-400 ${
                corner === 0
                  ? "top-2 left-2 border-t-2 border-l-2"
                  : corner === 1
                    ? "top-2 right-2 border-t-2 border-r-2"
                    : corner === 2
                      ? "bottom-2 left-2 border-b-2 border-l-2"
                      : "bottom-2 right-2 border-b-2 border-r-2"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: corner * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}

          {/* Title with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {title}
                </span>
                {/* Glitch overlay */}
                <motion.span
                  className="absolute top-0 left-0 bg-gradient-to-r from-[#145dfb] to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.7, 0, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {title}
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                className={`text-lg sm:text-xl text-gray-300 leading-relaxed transition-all duration-300 ${
                  !isDescriptionExpanded ? "line-clamp-3" : ""
                }`}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: !isDescriptionExpanded ? 3 : "none",
                  WebkitBoxOrient: "vertical",
                  overflow: !isDescriptionExpanded ? "hidden" : "visible",
                }}
              >
                {description}
              </motion.div>
              <motion.button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-3 text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-1 transition-colors duration-200 mx-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>
                  {isDescriptionExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                </span>
                <motion.div
                  animate={{ rotate: isDescriptionExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiChevronDown className="text-sm" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Futuristic Status Indicators */}
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {["ROTOREN", "REFLEKTOREN", "STECKERBRETT"].map(
              (component, index) => (
                <motion.div
                  key={component}
                  className="flex items-center space-x-2"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
                    {component}
                  </span>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Holographic Scroll Indicator */}
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          // Use deterministic positioning for particles
          const leftPos = ((i * 11 + 7) % 95) + 2.5;
          const topPos = ((i * 13 + 11) % 90) + 5;

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3), // Deterministic duration
                repeat: Infinity,
                delay: (i % 10) * 0.3, // Deterministic delay
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
