"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiPlay, BiPause } from "react-icons/bi";

type EnigmaMode = "encrypt" | "decrypt";

export const ExplosionView = () => {
  const [currentMode, setCurrentMode] = useState<EnigmaMode>("encrypt");
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [outputLetter, setOutputLetter] = useState("B");

  // Generate a random letter different from the input
  const generateRandomOutput = (inputLetter: string) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const availableLetters = alphabet
      .split("")
      .filter((letter) => letter !== inputLetter);
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    return availableLetters[randomIndex];
  };

  const components = [
    { id: "keyboard", name: "Tastatur", position: { x: 0, y: 100 } },
    { id: "plugboard", name: "Steckerbrett", position: { x: 0, y: 50 } },
    { id: "rotor1", name: "Walze I", position: { x: -60, y: 0 } },
    { id: "rotor2", name: "Walze II", position: { x: 0, y: 0 } },
    { id: "rotor3", name: "Walze III", position: { x: 60, y: 0 } },
    { id: "reflector", name: "Umkehrwalze", position: { x: 0, y: -50 } },
    { id: "lampboard", name: "Lampenfeld", position: { x: 0, y: -100 } },
  ];

  const signalPath =
    currentMode === "encrypt"
      ? [
          "keyboard",
          "plugboard",
          "rotor1",
          "rotor2",
          "rotor3",
          "reflector",
          "rotor3",
          "rotor2",
          "rotor1",
          "plugboard",
          "lampboard",
        ]
      : [
          "lampboard",
          "plugboard",
          "rotor1",
          "rotor2",
          "rotor3",
          "reflector",
          "rotor3",
          "rotor2",
          "rotor1",
          "plugboard",
          "keyboard",
        ];

  const startAnimation = () => {
    setIsAnimating(true);
    // Generate new output letter when animation starts
    const newOutput = generateRandomOutput(selectedLetter);
    setOutputLetter(newOutput);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const getComponentColor = (componentId: string, step: number) => {
    if (!isAnimating) return "rgba(99, 102, 241, 0.3)";

    const currentStep = Math.floor((step * signalPath.length) / 100);
    const activeComponent = signalPath[currentStep];

    if (componentId === activeComponent) {
      return "rgba(239, 68, 68, 0.8)";
    } else if (signalPath.slice(0, currentStep).includes(componentId)) {
      return "rgba(34, 197, 94, 0.6)";
    }
    return "rgba(99, 102, 241, 0.3)";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#101828] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Enigma <span className="text-cyan-400">Signalfluss</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visualisiere den Signalfluss durch die Komponenten der Enigma in
            sowohl der Verschlüsselungs- als auch der Entschlüsselungsmodus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Mode Selector */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Betriebsmodus
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(["encrypt", "decrypt"] as EnigmaMode[]).map((mode) => (
                  <motion.button
                    key={mode}
                    onClick={() => setCurrentMode(mode)}
                    className={`p-3 rounded-lg border transition-all ${
                      currentMode === mode
                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                        : "border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-semibold capitalize">
                      {mode === "encrypt" ? "Verschlüsseln" : "Entschlüsseln"}
                    </div>
                    <div className="text-xs mt-1">
                      {mode === "encrypt" ? "A → B" : "B → A"}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Letter Input */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Eingabebuchstabe
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 26 }, (_, i) =>
                  String.fromCharCode(65 + i)
                ).map((letter) => (
                  <motion.button
                    key={letter}
                    onClick={() => {
                      setSelectedLetter(letter);
                      // Generate new output when input changes
                      const newOutput = generateRandomOutput(letter);
                      setOutputLetter(newOutput);
                    }}
                    className={`aspect-square rounded-lg border font-mono text-sm transition-all ${
                      selectedLetter === letter
                        ? "border-red-500 bg-red-500/10 text-red-400"
                        : "border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {letter}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Animation Control */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Signalfluss</h3>
              <motion.button
                onClick={startAnimation}
                disabled={isAnimating}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: isAnimating ? 1 : 1.02 }}
                whileTap={{ scale: isAnimating ? 1 : 0.98 }}
              >
                {isAnimating ? <BiPause /> : <BiPlay />}
                <span>{isAnimating ? "Läuft..." : "Signalfluss starten"}</span>
              </motion.button>

              <div className="mt-4 text-sm text-gray-400 space-y-2">
                <div className="flex justify-between">
                  <span>Eingabe:</span>
                  <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded">
                    {selectedLetter}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Ausgabe:</span>
                  <span
                    className={`font-mono px-2 py-1 rounded transition-all duration-300 ${
                      isAnimating
                        ? "text-red-400 bg-red-900/30 animate-pulse"
                        : "text-cyan-400 bg-cyan-900/30"
                    }`}
                  >
                    {outputLetter}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mode:</span>
                  <span className="text-cyan-400 capitalize">
                    {currentMode}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Explosion View */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 relative h-[600px] overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                style={{ transform: "scale(1.2)" }}
              >
                {/* Component Connections */}
                {isAnimating && (
                  <motion.g>
                    {signalPath.slice(0, -1).map((fromId, index) => {
                      const toId = signalPath[index + 1];
                      const fromComponent = components.find(
                        (c) => c.id === fromId
                      );
                      const toComponent = components.find((c) => c.id === toId);

                      if (!fromComponent || !toComponent) return null;

                      return (
                        <motion.line
                          key={`${fromId}-${toId}`}
                          x1={200 + fromComponent.position.x}
                          y1={200 + fromComponent.position.y}
                          x2={200 + toComponent.position.x}
                          y2={200 + toComponent.position.y}
                          stroke="rgba(239, 68, 68, 0.8)"
                          strokeWidth="3"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: [0, 1, 0.3],
                          }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.25,
                          }}
                        />
                      );
                    })}
                  </motion.g>
                )}

                {/* Components */}
                {components.map((component, index) => (
                  <motion.g
                    key={component.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Component Circle */}
                    <motion.circle
                      cx={200 + component.position.x}
                      cy={200 + component.position.y}
                      r="25"
                      fill={getComponentColor(
                        component.id,
                        isAnimating ? 50 : 0
                      )}
                      stroke="rgba(99, 102, 241, 0.6)"
                      strokeWidth="2"
                      animate={
                        isAnimating
                          ? {
                              fill: signalPath.map((id) =>
                                id === component.id
                                  ? "rgba(239, 68, 68, 0.8)"
                                  : "rgba(99, 102, 241, 0.3)"
                              ),
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        times: signalPath.map(
                          (_, i) => i / (signalPath.length - 1)
                        ),
                      }}
                    />

                    {/* Component Icon */}
                    <text
                      x={200 + component.position.x}
                      y={200 + component.position.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs font-mono fill-white"
                    >
                      {component.id === "keyboard"
                        ? selectedLetter
                        : component.id === "plugboard"
                          ? "🔌"
                          : component.id.includes("rotor")
                            ? "⚙️"
                            : component.id === "reflector"
                              ? "↩️"
                              : component.id === "lampboard"
                                ? outputLetter
                                : "💡"}
                    </text>

                    {/* Component Label */}
                    <text
                      x={200 + component.position.x}
                      y={200 + component.position.y + 40}
                      textAnchor="middle"
                      className="text-xs fill-gray-400 font-medium"
                    >
                      {component.name}
                    </text>
                  </motion.g>
                ))}

                {/* Signal Pulse */}
                {isAnimating && (
                  <motion.circle
                    r="4"
                    fill="rgba(239, 68, 68, 1)"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: signalPath.map((id) => {
                        const comp = components.find((c) => c.id === id);
                        return comp ? 200 + comp.position.x : 200;
                      }),
                      cy: signalPath.map((id) => {
                        const comp = components.find((c) => c.id === id);
                        return comp ? 200 + comp.position.y : 200;
                      }),
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      times: signalPath.map(
                        (_, i) => i / (signalPath.length - 1)
                      ),
                      ease: "linear",
                    }}
                  />
                )}
              </svg>

              {/* Mode Indicator */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${currentMode === "encrypt" ? "bg-green-400" : "bg-blue-400"}`}
                  />
                  <span className="text-sm font-mono text-white uppercase">
                    {currentMode}
                  </span>
                </div>
              </div>

              {/* Path Direction Indicator */}
              {isAnimating && (
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-xs text-gray-300">
                    Signal Path: {signalPath.join(" → ")}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
