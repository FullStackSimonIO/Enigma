"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiMath, BiChip, BiCalculator } from "react-icons/bi";

export const BruteForceFormula = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [variables, setVariables] = useState({
    rotors: 3,
    positions: 26,
    plugboardPairs: 10,
    keysPerSecond: 1000,
  });

  // Helper function for consistent number formatting
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

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
            Sogar moderne Computer scheitern am Bruteforcen der Enigma
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
              <span className="text-red-400 font-medium">17.576</span>{" "}
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
                26! / (10! × 2¹⁰) = 150.738.274.937.250
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

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
              1,59 × 10²⁰ keys
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
                    Millionen von Jahren
                  </td>
                  <td className="py-4 px-6 text-gray-300">Elektromechanisch</td>
                  <td className="py-4 px-6 text-red-400">0% (Unmöglich)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-orange-400 font-medium">
                    Brute Force (Modern)
                  </td>
                  <td className="py-4 px-6 text-gray-300">2500 Jahre</td>
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
