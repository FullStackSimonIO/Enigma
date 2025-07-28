"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiCalculator, BiRefresh, BiCog } from "react-icons/bi";

export const KeyspaceCalculator = () => {
  const [rotorCount, setRotorCount] = useState(3);
  const [rotorPositions, setRotorPositions] = useState(26);
  const [rotorSelection, setRotorSelection] = useState(5);
  const [plugboardPairs, setPlugboardPairs] = useState(10);
  const [includePlugboard, setIncludePlugboard] = useState(true);
  const [includeRotorOrder, setIncludeRotorOrder] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  // Calculate different components
  const rotorPositionSpace = Math.pow(rotorPositions, rotorCount);
  const rotorOrderSpace = includeRotorOrder
    ? factorial(rotorSelection) / factorial(rotorSelection - rotorCount)
    : 1;
  const plugboardSpace = includePlugboard
    ? calculatePlugboardCombinations(plugboardPairs)
    : 1;
  const totalKeyspace = rotorPositionSpace * rotorOrderSpace * plugboardSpace;

  function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  function calculatePlugboardCombinations(pairs: number): number {
    if (pairs === 0) return 1;
    // Simplified calculation for demonstration
    let result = 1;
    let remaining = 26;
    for (let i = 0; i < pairs; i++) {
      result *= (remaining * (remaining - 1)) / 2;
      remaining -= 2;
      result /= i + 1; // Account for order not mattering
    }
    return Math.floor(result);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1e12) return `${(num / 1e12).toFixed(1)}T`;
    if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
    return num.toLocaleString();
  };

  const resetToDefaults = () => {
    setRotorCount(3);
    setRotorPositions(26);
    setRotorSelection(5);
    setPlugboardPairs(10);
    setIncludePlugboard(true);
    setIncludeRotorOrder(true);
  };

  const timeToBreak = totalKeyspace / 1000000; // Assuming 1M keys/second
  const yearsToBreak = timeToBreak / (60 * 60 * 24 * 365);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
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
            Schlüsselraum{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Rechner
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Erforschen Sie die astronomische Anzahl möglicher
            Enigma-Konfigurationen und verstehen Sie, warum Brute-Force
            unmöglich war
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Controls */}
          <motion.div
            className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <BiCalculator className="mr-3 text-red-400" />
                Konfigurations-Einstellungen
              </h3>
              <motion.button
                onClick={resetToDefaults}
                className="text-gray-400 hover:text-white flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BiRefresh />
                <span>Zurücksetzen</span>
              </motion.button>
            </div>

            <div className="space-y-8">
              {/* Rotor Settings */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-red-400">
                  Rotor Konfiguration
                </h4>

                <div>
                  <label className="block text-white font-medium mb-3">
                    Anzahl der Rotoren:{" "}
                    <span className="text-red-400">{rotorCount}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={rotorCount}
                    onChange={(e) => setRotorCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>1</span>
                    <span>5</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">
                    Positionen pro Rotor:{" "}
                    <span className="text-red-400">{rotorPositions}</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="26"
                    value={rotorPositions}
                    onChange={(e) =>
                      setRotorPositions(parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>2</span>
                    <span>26</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">
                    Verfügbare Rotoren:{" "}
                    <span className="text-red-400">{rotorSelection}</span>
                  </label>
                  <input
                    type="range"
                    min={rotorCount}
                    max="8"
                    value={rotorSelection}
                    onChange={(e) =>
                      setRotorSelection(parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{rotorCount}</span>
                    <span>8</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="rotorOrder"
                    checked={includeRotorOrder}
                    onChange={(e) => setIncludeRotorOrder(e.target.checked)}
                    className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
                  />
                  <label htmlFor="rotorOrder" className="text-white">
                    Rotor-Reihenfolge Permutationen einbeziehen
                  </label>
                </div>
              </div>

              {/* Plugboard Settings */}
              <div className="space-y-6 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-orange-400">
                  Steckerbrett Konfiguration
                </h4>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="plugboard"
                    checked={includePlugboard}
                    onChange={(e) => setIncludePlugboard(e.target.checked)}
                    className="w-4 h-4 text-orange-600 bg-gray-700 border-gray-600 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="plugboard" className="text-white">
                    Steckerbrett aktivieren
                  </label>
                </div>

                {includePlugboard && (
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Steckerbrett Paare:{" "}
                      <span className="text-orange-400">{plugboardPairs}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="13"
                      value={plugboardPairs}
                      onChange={(e) =>
                        setPlugboardPairs(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>0</span>
                      <span>13</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BiCog className="mr-3 text-orange-400" />
              Schlüsselraum Analyse
            </h3>

            {/* Component Breakdown */}
            <div className="space-y-6 mb-8">
              <motion.div
                className="bg-red-900/30 rounded-xl p-4 border border-red-500/30"
                animate={animationStep === 0 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">
                    Rotor Positionen
                  </span>
                  <span className="text-red-400 font-bold">
                    {formatNumber(rotorPositionSpace)}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {rotorPositions}^{rotorCount} ={" "}
                  {rotorPositionSpace.toLocaleString()}
                </div>
              </motion.div>

              <motion.div
                className="bg-orange-900/30 rounded-xl p-4 border border-orange-500/30"
                animate={animationStep === 1 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Rotor Auswahl</span>
                  <span className="text-orange-400 font-bold">
                    {formatNumber(rotorOrderSpace)}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {includeRotorOrder
                    ? `P(${rotorSelection}, ${rotorCount})`
                    : "Feste Reihenfolge"}
                </div>
              </motion.div>

              <motion.div
                className="bg-yellow-900/30 rounded-xl p-4 border border-yellow-500/30"
                animate={animationStep === 2 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Steckerbrett</span>
                  <span className="text-yellow-400 font-bold">
                    {formatNumber(plugboardSpace)}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {includePlugboard ? `${plugboardPairs} Paare` : "Deaktiviert"}
                </div>
              </motion.div>
            </div>

            {/* Total Keyspace */}
            <motion.div
              className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-2xl p-6 border-2 border-red-500/50 mb-8"
              animate={
                animationStep === 3
                  ? {
                      scale: [1, 1.05, 1],
                      borderColor: [
                        "rgba(239, 68, 68, 0.5)",
                        "rgba(239, 68, 68, 1)",
                        "rgba(239, 68, 68, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1 }}
            >
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">
                  Gesamt Schlüsselraum
                </h4>
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2"
                  key={totalKeyspace}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {formatNumber(totalKeyspace)}
                </motion.div>
                <div className="text-gray-300 text-sm">
                  {totalKeyspace.toExponential(2)} mögliche Konfigurationen
                </div>
              </div>
            </motion.div>

            {/* Breaking Time Estimates */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">
                Brute-Force Analyse
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    {formatNumber(timeToBreak / 2)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Sekunden (Durchschnitt)
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {yearsToBreak > 1e6 ? "∞" : formatNumber(yearsToBreak / 2)}
                  </div>
                  <div className="text-sm text-gray-400">
                    Jahre (Durchschnitt)
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>Hinweis:</strong> Diese Berechnungen gehen von 1
                  Million Schlüssel- tests pro Sekunde aus. In Wirklichkeit
                  konnte die 1940er-Technologie nur Hunderte von Schlüsseln pro
                  Sekunde testen, was Brute-Force völlig unpraktikabel machte.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mathematical Formula Display */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-900/70 to-gray-800/40 rounded-2xl p-8 border border-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            Schlüsselraum Formel
          </h4>
          <div className="text-center space-y-4">
            <div className="text-2xl font-mono text-cyan-400">
              K = R<sup>n</sup> × P(r,n) × C(26,2p)
            </div>
            <div className="text-sm text-gray-400 max-w-2xl mx-auto">
              Wobei: R = Rotor Positionen, n = Anzahl der Rotoren, r =
              verfügbare Rotoren, p = Steckerbrett Paare
            </div>
            <div className="text-lg font-mono text-orange-400">
              K = {rotorPositions}
              <sup>{rotorCount}</sup> × {formatNumber(rotorOrderSpace)} ×{" "}
              {formatNumber(plugboardSpace)} = {formatNumber(totalKeyspace)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
