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
  const [isExpanded, setIsExpanded] = useState(false);

  const tactics: Tactic[] = [
    {
      id: "cribs",
      name: "Crib-basierter Angriff",
      description:
        "Verwendung bekannter Klartextfragmente zur Ableitung von Einstellungen",
      difficulty: "Medium",
      timeToBreak: "20 Minuten - 2 Stunden",
      successRate: 85,
      requirements: [
        "Bekannte Klartextfragmente",
        "Bombe-Maschine",
        "Mustererkennung",
      ],
      explanation:
        "Codebreaker nutzten vorhersagbare deutsche Nachrichten wie Wetterberichte, militärische Formalitäten und wiederholte Phrasen aus. Durch das Wissen um wahrscheinliche Klartextpositionen konnten sie spezifische Rotoreinstellungen testen anstatt alle Möglichkeiten.",
      historicalUse:
        "Hauptmethode in Bletchley Park verwendet. Am erfolgreichsten gegen routinemäßige militärische Kommunikation.",
      color: "from-green-400 to-green-600",
      icon: <BiCrosshair />,
    },
    {
      id: "frequency",
      name: "Häufigkeitsanalyse",
      description:
        "Analyse von Buchstabenhäufigkeitsmustern in verschlüsseltem Text",
      difficulty: "Hard",
      timeToBreak: "Tage bis Wochen",
      successRate: 25,
      requirements: [
        "Große Mengen Geheimtext",
        "Statistische Analyse",
        "Sprachexpertise",
      ],
      explanation:
        "Traditionelle Kryptoanalyse-Technik, die bei einfachen Substitutionschiffren funktioniert. Begrenzte Wirksamkeit gegen Enigma aufgrund der polyalphabetischen Natur und täglichen Schlüsseländerungen.",
      historicalUse:
        "Frühe Versuche vor mechanischen Methoden. Weitgehend aufgegeben für Enigma aufgrund geringer Erfolgsrate.",
      color: "from-yellow-400 to-yellow-600",
      icon: <BiBulb />,
    },
    {
      id: "operator-errors",
      name: "Bedienerfehler",
      description: "Ausnutzung menschlicher Fehler beim Enigma-Betrieb",
      difficulty: "Easy",
      timeToBreak: "Minuten bis Stunden",
      successRate: 70,
      requirements: [
        "Verkehrsanalyse",
        "Mustererkennung",
        "Mehrere Abfangungen",
      ],
      explanation:
        "Deutsche Operateure machten oft Verfahrensfehler: Wiederverwendung von Einstellungen, schwache Nachrichtenschlüssel oder das zweimalige Senden derselben Nachricht. Diese Fehler boten entscheidende Einstiegspunkte für Codebreaker.",
      historicalUse:
        "Während des gesamten Krieges konstant ausgenutzt. Deutsche Verfahren verbesserten sich mit der Zeit und reduzierten Gelegenheiten.",
      color: "from-orange-400 to-orange-600",
      icon: <BiGroup />,
    },
    {
      id: "depth-analysis",
      name: "Tiefenanalyse",
      description: "Vergleich mehrerer Nachrichten mit denselben Einstellungen",
      difficulty: "Medium",
      timeToBreak: "1-8 Stunden",
      successRate: 60,
      requirements: [
        "Mehrere Nachrichten mit demselben Schlüssel",
        "Mathematische Analyse",
        "Zeitkorrelation",
      ],
      explanation:
        "Wenn mehrere Nachrichten mit identischen Rotorpositionen (Tiefe) gesendet wurden, konnten Codebreaker sie vergleichen, um das Substitutionsmuster zu deduzieren und möglicherweise den Klartext zu rekonstruieren.",
      historicalUse:
        "Verwendet, wenn Operateure versäumten, Rotoren zwischen Nachrichten zu verstellen oder während verkehrsreicher Zeiten.",
      color: "from-blue-400 to-blue-600",
      icon: <BiTime />,
    },
    {
      id: "brute-force",
      name: "Brute-Force-Angriff",
      description: "Testen jeder möglichen Schlüsselkombination",
      difficulty: "Impossible",
      timeToBreak: "Millionen von Jahren",
      successRate: 0,
      requirements: [
        "Unbegrenzte Rechenleistung",
        "Perfekte Erhaltung des Geheimtexts",
        "Zeitmaschine",
      ],
      explanation:
        "Systematisches Testen aller 1,59×10²³ möglichen Enigma-Konfigurationen. Selbst mit modernen Supercomputern würde dieser Ansatz länger dauern als das Alter des Universums.",
      historicalUse:
        "Niemals ernsthaft versucht aufgrund mathematischer Unmöglichkeit mit verfügbarer Technologie.",
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
        return "bg-red-900/30 border-red-500/30";
      case "Medium":
        return "bg-red-800/30 border-red-600/30";
      case "Hard":
        return "bg-red-700/30 border-red-700/30";
      case "Impossible":
        return "bg-red-900/30 border-red-500/30";
      default:
        return "bg-gray-900/30 border-gray-500/30";
    }
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
            Codeknacker{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Taktiken
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Erforschen Sie die genialen Methoden, die verwendet wurden, um den
            Enigma-Code zu knacken und verstehen Sie, warum Intelligenz über
            Brute-Force triumphierte
          </p>
        </motion.div>

        {/* Detailed Cryptanalysis Methods */}
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Kryptoanalytische Methoden und Schwachstellen
          </h3>
          <motion.div
            className={`text-gray-300 text-justify leading-relaxed transition-all duration-300 ${
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
              Mehrere Faktoren ermöglichten die Entschlüsselung der Enigma,
              wobei eine entscheidende Schwachstelle darin bestand, dass die
              Maschine{" "}
              <span className="text-red-400 font-medium">
                keinen Buchstaben auf sich selbst
              </span>{" "}
              verschlüsseln konnte. Dieser{" "}
              <span className="text-blue-400 font-medium">
                kryptographische Fingerabdruck
              </span>{" "}
              erlaubte es, kombiniert mit statistischen Verfahren wie dem{" "}
              <span className="text-blue-400 font-medium">
                Index of Coincidence
              </span>{" "}
              und{" "}
              <span className="text-blue-400 font-medium">
                N-Gramm-Analysen
              </span>
              , sich schrittweise den korrekten Walzen- und
              Steckerbrettpositionen anzunähern.
            </p>
            <p className="mb-3">
              Entscheidend war dabei kein einzelner algorithmischer
              &quot;Durchbruch&quot;, sondern ein iterativer Filterprozess:
              Unwahrscheinliche Konfigurationen wurden systematisch eliminiert,
              bis der Klartext erkennbar wurde.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-indigo-300 mb-3">
                Index of Coincidence
              </h4>
              <p className="mb-3">
                Der IC misst die Wahrscheinlichkeit, dass zwei zufällig
                ausgewählte Buchstaben in einem Text identisch sind – ein
                statistischer Spiegel der Sprachcharakteristik. Dieser Wert
                liegt für deutsche Texte bei 0,0762 (Englisch: 0,0667), während
                rein zufällige Buchstabenfolgen bei 0,0385 liegen.
              </p>
              <p className="mb-3">
                Im Praktikum lässt sich dieser Ansatz operationalisieren: Ein
                Skript durchläuft alle möglichen Walzenstellungen und filtert
                jene heraus, bei denen der entschlüsselte Text einen IC-Wert
                nahe dem deutschen Sprachstandard aufweist. Obwohl diese Methode
                allein nicht ausreicht, um die Enigma effizient zu brechen,
                reduziert sie den Suchraum dramatisch, indem sie tausende
                unwahrscheinlicher Stellungen ausschließt.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-purple-300 mb-3">
                N-Gramme
              </h4>
              <p className="mb-3">
                N-Gramme – Sequenzen von n aufeinanderfolgenden Zeichen –
                offenbaren linguistische Fingerabdrücke: Im Deutschen treten
                Bigramme wie &quot;EN&quot;, &quot;ER&quot; oder &quot;CH&quot;
                und Trigramme wie &quot;SCH&quot;, &quot;EIN&quot; oder
                &quot;ICH&quot; mit charakteristischer Häufigkeit auf.
              </p>
              <p className="mb-3">
                Kryptoanalytiker nutzten diese Muster, indem sie die
                N-Gramm-Häufigkeiten eines verschlüsselten Texts mit den
                Referenzwerten der Zielsprache verglichen. Im Praktikum
                übersetzt sich dies in ein Skript, das Walzenstellungen
                priorisiert, bei denen die Entschlüsselung typische
                N-Gramm-Muster (z.B. hohe &quot;CH&quot;- oder
                &quot;GEN&quot;-Häufigkeit) produziert.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-xl font-bold text-cyan-300 mb-3">
                Known Plaintext Attack
              </h4>
              <p className="mb-3">
                Der Known-Plaintext-Angriff basiert auf einem eleganten
                Ausschlussprinzip, das operativ vorhersehbare Nachrichteninhalte
                nutzt. Konkret analysierten die Kryptoanalytiker täglich um 6
                Uhr versendete Wetterberichte, die stets das Wort
                &quot;WETTERBERICHT&quot; enthielten.
              </p>
              <p className="mb-3">
                Für jede mögliche Startposition dieses vermuteten
                Klartextfragments im Chiffretext prüften sie Buchstabe für
                Buchstabe, ob dieser mit dem erwarteten Klartext übereinstimmte.
                Mit diesem Wissen konnten verschiedene Möglichkeiten ermittelt
                werden, zu welchen Buchstaben ein Klartext verschlüsselt worden
                sein könnte.
              </p>
              <p className="text-blue-300 font-medium">
                Um die Enigma effizient knacken zu können, hat Alan Turing ein
                Jahr damit verbracht, die Turing-Bombe zu bauen, die genau diese
                Schwachstelle ausnutzt.
              </p>
            </div>
          </motion.div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            {isExpanded ? "Weniger anzeigen" : "Mehr lesen"}
          </button>
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
              Knacker-Methoden
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
                    Zeit zum Knacken
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
                    Erfolgsrate
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
                  Anforderungen
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
                <h4 className="text-white font-bold mb-4">Funktionsweise</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentTactic.explanation}
                </p>
              </div>

              {/* Historical Use */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-300 font-bold mb-3">
                  Historischer Kontext
                </h4>
                <p className="text-red-200 leading-relaxed">
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
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-6 border border-blue-500/30 text-center">
            <BiCrosshair className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Intelligenz über Kraft
            </h4>
            <p className="text-gray-300 text-sm">
              Codebreaker nutzten menschliche Intelligenz, Mustererkennung und
              Betriebswissen anstatt rechnerischer Brute-Force.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-6 border border-blue-500/30 text-center">
            <BiTime className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Geschwindigkeit war entscheidend
            </h4>
            <p className="text-gray-300 text-sm">
              Tägliche Schlüsseländerungen bedeuteten, dass Codebreaker weniger
              als 24 Stunden hatten, um jede Konfiguration zu knacken, bevor sie
              nutzlos wurde.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-6 border border-blue-500/30 text-center">
            <BiBulb className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Menschlicher Faktor
            </h4>
            <p className="text-gray-300 text-sm">
              Viele Erfolge kamen durch die Ausnutzung menschlicher Fehler und
              vorhersagbarer Verhaltensweisen anstatt mathematischer Schwächen.
            </p>
          </div>
        </motion.div>

        {/* Final Insight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-blue-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Die wahre Lektion
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Die Niederlage der Enigma wurde nicht durch überlegene Technologie
            oder Rechenleistung erreicht, sondern durch menschlichen
            Einfallsreichtum, kollektive Intelligenz und die Ausnutzung von
            Verfahrensschwächen. Die Codebreaker in Bletchley Park bewiesen,
            dass das Verstehen der Gewohnheiten und Fehler des Feindes mächtiger
            sein kann als jede Menge an Brute-Force-Computing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
