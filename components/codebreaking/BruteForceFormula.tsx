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
  const [isExpanded, setIsExpanded] = useState(false);
  const [variables, setVariables] = useState({
    rotors: 3,
    positions: 26,
    plugboardPairs: 10,
    keysPerSecond: 1000,
  });

  const steps: FormulaStep[] = [
    {
      title: "Rotor Konfigurationen",
      formula: "R = 26^n",
      explanation:
        "Jeder Rotor hat 26 Positionen, und Positionen sind unabhängig",
      calculation: `26^${variables.rotors}`,
      result: Math.pow(26, variables.rotors).toLocaleString(),
      color: "from-red-400 to-red-600",
    },
    {
      title: "Rotor Auswahl",
      formula: "S = n! × C(5,n)",
      explanation:
        "Reihenfolge ist wichtig und wir wählen aus verfügbaren Rotoren",
      calculation: "3! × C(5,3) = 6 × 10",
      result: "60",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Steckerbrett Komplexität",
      formula: "P = 26!/(2^p × p! × (26-2p)!)",
      explanation: "Buchstaben paaren mit Reihenfolge-Unabhängigkeit",
      calculation: `p = ${variables.plugboardPairs}`,
      result: "150,738,274,937,250",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Gesamt Schlüsselraum",
      formula: "K = R × S × P",
      explanation: "Alle unabhängigen Konfigurationsräume multiplizieren",
      calculation: `${Math.pow(26, variables.rotors).toLocaleString()} × 60 × 150T`,
      result: "1.59 × 10²³",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Durchschnittliche Suchzeit",
      formula: "T = K/(2 × rate)",
      explanation: "Im Durchschnitt finden wir den Schlüssel auf halbem Weg",
      calculation: `1.59×10²³ / (2 × ${variables.keysPerSecond.toLocaleString()})`,
      result: calculateSearchTime(variables.keysPerSecond),
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Schlimmster Fall Zeit",
      formula: "T_worst = K/rate",
      explanation: "Maximale Zeit wenn Schlüssel als letzter getestet wird",
      calculation: `1.59×10²³ / ${variables.keysPerSecond.toLocaleString()}`,
      result: calculateWorstTime(variables.keysPerSecond),
      color: "from-purple-400 to-purple-600",
    },
  ];

  function calculateSearchTime(rate: number): string {
    const keyspace = 1.59e23;
    const seconds = keyspace / (2 * rate);
    const years = seconds / (365.25 * 24 * 3600);

    if (years >= 1e15) return `${(years / 1e15).toFixed(1)} Billiarden Jahre`;
    if (years >= 1e12) return `${(years / 1e12).toFixed(1)} Billionen Jahre`;
    if (years >= 1e9) return `${(years / 1e9).toFixed(1)} Milliarden Jahre`;
    if (years >= 1e6) return `${(years / 1e6).toFixed(1)} Millionen Jahre`;
    return `${years.toFixed(1)} Jahre`;
  }

  function calculateWorstTime(rate: number): string {
    const keyspace = 1.59e23;
    const seconds = keyspace / rate;
    const years = seconds / (365.25 * 24 * 3600);

    if (years >= 1e15) return `${(years / 1e15).toFixed(1)} Billiarden Jahre`;
    if (years >= 1e12) return `${(years / 1e12).toFixed(1)} Billionen Jahre`;
    if (years >= 1e9) return `${(years / 1e9).toFixed(1)} Milliarden Jahre`;
    if (years >= 1e6) return `${(years / 1e6).toFixed(1)} Millionen Jahre`;
    return `${years.toFixed(1)} Jahre`;
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101828]">
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
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Mathematik
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Verstehen Sie die mathematische Unmöglichkeit von
            Brute-Force-Angriffen gegen die Enigma-Maschine
          </p>
        </motion.div>

        {/* Detailed Mathematical Analysis */}
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Mathematische Analyse der Brute-Force Komplexität
          </h3>
          <div
            className={`text-sm text-gray-300 text-justify leading-relaxed transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: isExpanded ? "none" : "3",
              WebkitBoxOrient: "vertical",
              overflow: isExpanded ? "visible" : "hidden",
            }}
          >
            <p className="mb-3">
              Die Frage, ob moderne Computer die Enigma per{" "}
              <span className="text-red-400 font-medium">Brute-Force</span>{" "}
              brechen könnten, führt in eine faszinierende mathematische
              Analyse. Der gesamte{" "}
              <span className="text-blue-400 font-medium">Schlüsselraum</span>{" "}
              der Maschine setzt sich aus drei Komponenten zusammen:
            </p>
            <p className="mb-3">
              Zunächst zur{" "}
              <span className="text-blue-400 font-medium">Rotorauswahl</span>:
              Aus einem Pool von fünf unterschiedlich verdrahteten Rotoren
              werden drei ausgewählt, wobei die Reihenfolge entscheidend ist –
              dies ergibt{" "}
              <span className="text-red-400 font-medium">5 × 4 × 3 = 60</span>{" "}
              mögliche Kombinationen. Jeder dieser Rotoren kann zudem in{" "}
              <span className="text-blue-400 font-medium">
                26 verschiedenen Startpositionen
              </span>{" "}
              stehen, was{" "}
              <span className="text-red-400 font-medium">26³ = 17.576</span>{" "}
              Stellungsvarianten pro Rotorkombination liefert.
            </p>
            <p className="mb-3">
              Die eigentliche Komplexität steckt jedoch im{" "}
              <span className="text-blue-400 font-medium">Steckerbrett</span>.
              Hier werden genau{" "}
              <span className="text-blue-400 font-medium">zehn Paare</span> aus
              den 26 Buchstaben des Alphabets gebildet, während{" "}
              <span className="text-blue-400 font-medium">
                sechs Buchstaben unverbunden
              </span>{" "}
              bleiben. Die Anzahl der möglichen Steckerverbindungen wird durch
              die folgende kombinatorische Formel bestimmt:{" "}
              <span className="text-red-400 font-bold">
                26! / (6! × 10! × 2¹⁰) = 150.738.274.937.250
              </span>
            </p>
            <div className="ml-4 mb-3">
              <p className="mb-2 text-sm font-semibold text-blue-300">
                Hierbei berücksichtigt:
              </p>
              <ul className="list-disc ml-4 space-y-1 text-sm">
                <li>
                  <span className="text-red-400 font-medium">26!</span>, wie die
                  26 Buchstaben des Alphabetes miteinander kombiniert werden
                  können,
                </li>
                <li>
                  <span className="text-red-400 font-medium">6!</span>, dass die
                  Reihenfolge der Auswahl der sechs ungesteckten Buchstaben
                  irrelevant ist,
                </li>
                <li>
                  <span className="text-red-400 font-medium">10!</span>, dass
                  die Anordnung der zehn Paare untereinander keine Rolle spielt,
                </li>
                <li>
                  <span className="text-red-400 font-medium">2¹⁰</span>, dass
                  innerhalb jedes Paares die Verbindungsrichtung (
                  <span className="text-blue-400">A ↔ B</span> oder{" "}
                  <span className="text-blue-400">B ↔ A</span>) nicht
                  unterschieden wird.
                </li>
              </ul>
            </div>
            <p className="mb-4">
              Multipliziert man diesen Wert mit den Möglichkeiten der
              Rotorauswahl (60) und der Rotorstellungen (17.576), ergibt sich
              der gesamte Schlüsselraum der Enigma: 60 × 17.576 ×
              150.738.274.937.250 = 158.962.555.217.826.360.000 (ca. 1,59 ×
              10²⁰).
            </p>
            <p className="mb-4">
              Unter der Annahme, dass ein Hochleistungsrechner eine Milliarde
              Schlüssel pro Sekunde überprüfen kann – eine für moderne
              GPU-Cluster realistische Prüfrate –, würde die systematische
              Durchsuchung des halben Schlüsselraums im Mittel: 7,95×10¹⁹ / 10⁹
              = 7,95 × 10¹⁰ Sekunden erfordern. Dies entspricht rund 2.500
              Jahren kontinuierlicher Rechenarbeit.
            </p>
            <p>
              In den 1940er Jahren, als manuelle Berechnungen oder mechanische
              &quot;Bomben&quot; maximal 0,1 Schlüssel pro Sekunde prüfen
              konnten, hätte dieselbe Aufgabe über 10¹⁵ Jahre gedauert – das
              70-Milliardenfache des Alters des Universums. Verglichen mit
              heutigen Verschlüsselungsstandards wie AES-256 (Schlüsselraum
              ∼10⁷⁷) erscheint die Enigma damit theoretisch angreifbar, doch ihr
              wahrer Schutz lag in der praktischen Undurchführbarkeit
              zeitgenössischer Angriffe.
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            {isExpanded ? "Weniger anzeigen" : "Mehr lesen"}
          </button>
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
              Formel Parameter
            </h3>

            <div className="space-y-8">
              <div>
                <label className="block text-white font-medium mb-3">
                  Anzahl der Rotoren:{" "}
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
                  Steckerbrett Paare:{" "}
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
                  Schlüssel/Sekunde:{" "}
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
                  <span>1940er: ~100</span>
                  <span>Modern: 1M+</span>
                </div>
              </div>

              {/* Auto-play controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                <span className="text-white font-medium">Formel Schritte:</span>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isAutoPlaying
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {isAutoPlaying ? "Pause" : "Auto Abspielen"}
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
              Mathematische Aufschlüsselung
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
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-6 border border-slate-500/20">
            <BiTime className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Zeit Komplexität
            </h4>
            <p className="text-gray-300 text-sm">
              Selbst mit modernen Computern würde Brute-Force länger dauern als
              das Alter des Universums
            </p>
            <div className="text-2xl font-bold text-red-400 mt-4">
              O(26^n × n! × P!)
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-6 border border-slate-500/20">
            <BiChip className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Rechnerisches Limit
            </h4>
            <p className="text-gray-300 text-sm">
              Der Schlüsselraum wächst exponentiell mit jedem zusätzlichen Rotor
              und Steckerbrett-Paar
            </p>
            <div className="text-2xl font-bold text-red-400 mt-4">
              1.59 × 10²³ keys
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-6 border border-slate-500/20">
            <BiMath className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Echte Lösung</h4>
            <p className="text-gray-300 text-sm">
              Codebreaker nutzten Muster, Cribs und operative Fehler um den
              Suchraum zu reduzieren
            </p>
            <div className="text-2xl font-bold text-red-400 mt-4">
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
            Brute Force vs. Echtes Codeknacken
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-white font-bold py-4 px-6">Ansatz</th>
                  <th className="text-white font-bold py-4 px-6">
                    Benötigte Zeit
                  </th>
                  <th className="text-white font-bold py-4 px-6">
                    Technologie
                  </th>
                  <th className="text-white font-bold py-4 px-6">
                    Erfolgsrate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-red-400 font-medium">
                    Brute Force (1940er)
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    Milliarden von Jahren
                  </td>
                  <td className="py-4 px-6 text-gray-300">Elektromechanisch</td>
                  <td className="py-4 px-6 text-red-400">0% (Unmöglich)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-orange-400 font-medium">
                    Brute Force (Modern)
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    Millionen von Jahren
                  </td>
                  <td className="py-4 px-6 text-gray-300">GPU Cluster</td>
                  <td className="py-4 px-6 text-orange-400">Irgendwann</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-green-400 font-medium">
                    Bombe + Cribs
                  </td>
                  <td className="py-4 px-6 text-gray-300">20 Minuten</td>
                  <td className="py-4 px-6 text-gray-300">Elektromechanisch</td>
                  <td className="py-4 px-6 text-green-400">Hoch (mit Cribs)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
