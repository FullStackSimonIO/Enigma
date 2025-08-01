"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QuizComponent } from "@/components/QuizComponent";
import {
  BiShield,
  BiCog,
  BiTrendingUp,
  BiBug,
  BiCheckCircle,
  BiBook,
  BiTime,
  BiChevronDown,
  BiChevronUp,
} from "react-icons/bi";

const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <div
        className={`text-lg text-gray-300 text-justify leading-relaxed transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        <p className="mb-4">
          Die Briten zogen unmittelbar Konsequenzen aus den erkannten Schwächen
          der deutschen Enigma. Mit der{" "}
          <span className="text-blue-400 font-semibold">
            Typex-Maschine (ab 1937)
          </span>{" "}
          schufen sie eine revolutionäre Enigma-Variante, die systematisch jeden
          der fundamentalen Designfehler korrigierte.
        </p>
        <p className="mb-4">
          Die Typex eliminierte nicht nur das Problem der fehlenden
          Selbstverschlüsselung durch eine modifizierte Umkehrwalze, sondern
          erweiterte auch das System um zusätzliche Rotoren und implementierte
          unvorhersagbare Fortschaltungsmuster. Diese Verbesserungen machten die
          britische Maschine kryptographisch überlegen und praktisch unknackbar
          für die damalige Zeit.
        </p>
        <p>
          Interessanterweise nutzten die Briten ihr Wissen über die
          Enigma-Schwächen nicht nur defensiv, sondern auch strategisch: Während
          sie ihre eigene Kommunikation mit der überlegenen Typex sicherten,
          konnten sie gleichzeitig die deutsche Enigma-Kommunikation
          systematisch entschlüsseln und so einen entscheidenden
          Informationsvorteil im Zweiten Weltkrieg erlangen.
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
      >
        {isExpanded ? (
          <>
            <BiChevronUp className="mr-2" />
            Weniger anzeigen
          </>
        ) : (
          <>
            <BiChevronDown className="mr-2" />
            Mehr lesen
          </>
        )}
      </button>
    </div>
  );
};

const ModernInsightsText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-700/50">
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
        <p className="mb-4">
          Die Analyse der Enigma-Maschine bietet auch aus heutiger Sicht
          wertvolle Einsichten für die moderne Kryptologie – weniger in Bezug
          auf konkrete Algorithmen, sondern vielmehr hinsichtlich grundlegender
          Prinzipien sicherer Kommunikationssysteme. Besonders relevant sind
          dabei Erkenntnisse zur Trennung von Verfahren und Schlüsseln, zur
          operativen Sicherheit (OPSEC), zur menschlichen Faktorproblematik und
          zur Bedeutung systematischer Schwachstellenanalyse.
        </p>
        <p className="mb-4">
          Ein zentraler Aspekt ist das Scheitern der Enigma trotz formal hoher
          kombinatorischer Komplexität. Die Maschine selbst bot, insbesondere in
          ihrer Marinevariante mit vier Rotoren und Steckerbrett, eine enorme
          Anzahl möglicher Schlüsselzustände. Dennoch wurde sie gebrochen –
          nicht durch brute-force-Angriffe, sondern durch die Kombination aus
          systematischen Schwächen im Protokolldesign, Nachlässigkeiten im
          operativen Umgang und durch exzellente gegnerische Kryptoanalyse. Dies
          unterstreicht einen wesentlichen Grundsatz moderner Kryptologie: Die
          Stärke eines kryptografischen Systems bemisst sich nicht allein an der
          Komplexität des Algorithmus, sondern an der Widerstandsfähigkeit des
          Gesamtsystems – einschließlich Implementierung, Schlüsselmanagement
          und Benutzungsverhalten.
        </p>
        <p className="mb-4">
          Ein weiteres zentrales Lernfeld ist die Trennung von Schlüssel und
          Verfahren. Die Enigma-Maschine selbst war ein festes, standardisiertes
          Verfahren – die tatsächliche Sicherheit beruhte auf dem täglich
          wechselnden Schlüsselmaterial. Dieses Prinzip entspricht modernen
          Ansätzen wie dem Kerckhoffs&apos;schen Prinzip: Ein Verfahren muss
          auch dann sicher bleiben, wenn es vollständig öffentlich bekannt ist –
          allein der Schlüssel schützt die Vertraulichkeit. Die Tatsache, dass
          die Alliierten durch den Besitz von Schlüsselheften unmittelbaren
          Zugriff auf die Kommunikation erhielten, belegt die Bedeutung robuster
          Schlüsselverwaltung. Gleichzeitig offenbart die Praxis des manuellen
          Schlüsselhandlings – etwa das Abtrennen von Tageszeilen – die
          inhärente Verletzlichkeit menschlicher Prozesse, die auch heute bei
          der Verwaltung digitaler Schlüssel (z. B. in
          Hardware-Sicherheitsmodulen oder PKI-Systemen) kritisch bleibt.
        </p>
        <p>
          Nicht zuletzt führt die Enigma uns die Notwendigkeit gezielter
          Kryptoanalyse vor Augen. Der Bruch der Enigma war nur möglich, weil
          die Alliierten das System nicht als Black Box behandelten, sondern ein
          tiefes Verständnis für interne Abläufe und Schwächen entwickelten –
          etwa durch Analyse des Indikatorverfahrens, die statistische
          Auswertung von Textmustern (&quot;cribs&quot;) und die Ausnutzung
          struktureller Invarianten (z. B. keine Selbstabbildung). Diese
          Methodik hat bis heute Bestand: Moderne Kryptologie ist nur dann
          belastbar, wenn sie systematisch auf bekannte Angriffsmodelle und
          reale Umgebungsbedingungen getestet wird. Formale Sicherheit allein
          genügt nicht – sie muss auch unter praktischen Bedingungen bestehen.
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
      >
        {isExpanded ? (
          <>
            <BiChevronUp className="mr-2" />
            Weniger anzeigen
          </>
        ) : (
          <>
            <BiChevronDown className="mr-2" />
            Mehr lesen
          </>
        )}
      </button>
    </div>
  );
};

const ImprovementsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const quizQuestions = [
    {
      id: "1",
      question:
        "Was war der fundamentale Designfehler der ursprünglichen Enigma-Maschine?",
      options: [
        "Zu wenige Rotoren im System",
        "Buchstaben konnten nie auf sich selbst verschlüsselt werden",
        "Das Steckerbrett war zu kompliziert",
        "Die Walzenfortschaltung war zu langsam",
      ],
      correctAnswer: 1,
      explanation:
        "Die Unfähigkeit der Enigma, Buchstaben auf sich selbst zu verschlüsseln, war der kritische Designfehler. Diese Eigenschaft ermöglichte Known-Plaintext-Angriffe und die Entwicklung der Turing-Bombe.",
    },
    {
      id: "2",
      question:
        "Welche Verbesserung führte die britische Typex-Maschine ein, um Enigmas Hauptschwäche zu beheben?",
      options: [
        "Elektronische statt mechanische Rotoren",
        "Eine modifizierte Umkehrwalze, die Selbstabbildung erlaubt",
        "Verdopplung der Steckerbrett-Verbindungen",
        "Automatische Schlüsselgenerierung",
      ],
      correctAnswer: 1,
      explanation:
        "Die Typex verwendete eine modifizierte Umkehrwalze, die es erlaubte, dass Buchstaben auf sich selbst verschlüsselt werden konnten, wodurch der fundamentale Designfehler der Enigma behoben wurde.",
    },
    {
      id: "3",
      question:
        "Wann wurde die Ära der Rotor-Chiffriergeräte endgültig beendet?",
      options: [
        "1945 mit dem Ende des Zweiten Weltkriegs",
        "1952 mit der Entwicklung der ersten Computer",
        "1962 mit der Einführung der Combined Cipher Machine (CCM)",
        "1970 mit der Erfindung des DES-Algorithmus",
      ],
      correctAnswer: 2,
      explanation:
        "1962 erfolgte der Übergang zur Combined Cipher Machine (CCM), die einen einheitlichen elektronischen Verschlüsselungsstandard etablierte und das endgültige Ende der mechanischen Rotor-Chiffriergeräte markierte.",
    },
    {
      id: "4",
      question:
        "Welche modernen kryptographischen Prinzipien lassen sich aus der Enigma-Analyse ableiten?",
      options: [
        "Nur die Stärke des Algorithmus bestimmt die Sicherheit",
        "Mechanische Systeme sind grundsätzlich unsicher",
        "Die Trennung von Verfahren und Schlüsseln sowie robuste Schlüsselverwaltung",
        "Komplexe Systeme sind immer sicherer als einfache",
      ],
      correctAnswer: 2,
      explanation:
        "Die Enigma-Analyse zeigt die Bedeutung des Kerckhoffs'schen Prinzips (Trennung von Verfahren und Schlüssel) und demonstriert, dass die Gesamtsicherheit eines Systems von mehr als nur der algorithmischen Komplexität abhängt - einschließlich Implementierung, Schlüsselmanagement und Benutzungsverhalten.",
    },
  ];

  const improvements = [
    {
      id: 1,
      title: "Selbstverschlüsselung",
      problem: "Buchstaben konnten nie auf sich selbst verschlüsselt werden",
      solution: "Modifizierte Umkehrwalze erlaubt Selbstabbildung",
      impact: "Eliminiert Known-Plaintext-Angriffe",
      icon: BiShield,
      color: "from-red-500 to-red-600",
      solutionColor: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Rotoranzahl",
      problem: "Nur drei Rotoren begrenzen Schlüsselraum",
      solution: "Fünf Rotoren vergrößern Kombinationsmöglichkeiten",
      impact: "Exponentiell größerer Schlüsselraum",
      icon: BiCog,
      color: "from-orange-500 to-orange-600",
      solutionColor: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Walzenfortschaltung",
      problem: "Vorhersagbare, regelmäßige Bewegungsmuster",
      solution: "Unregelmäßige Fortschaltung eliminiert Muster",
      impact: "Erschwert Musteranalyse erheblich",
      icon: BiTrendingUp,
      color: "from-purple-500 to-purple-600",
      solutionColor: "from-teal-500 to-teal-600",
    },
  ];

  const timeline = [
    {
      year: "1918-1945",
      title: "Enigma-Ära",
      description: "Ursprüngliche Enigma mit fundamentalen Schwächen",
      status: "problem",
    },
    {
      year: "1937",
      title: "Typex-Entwicklung",
      description: "Briten entwickeln verbesserte Enigma-Variante",
      status: "improvement",
    },
    {
      year: "1962",
      title: "CCM-Einführung",
      description: "Combined Cipher Machine ersetzt Rotor-Systeme",
      status: "evolution",
    },
    {
      year: "Heute",
      title: "Elektronische Ära",
      description:
        "Moderne Verschlüsselung basiert auf mathematischen Prinzipien",
      status: "modern",
    },
  ];

  return (
    <div className="min-h-screen bg-[#101828] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-green-500/20" />
          {isClient &&
            Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
              <BiTrendingUp className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Verbesserungen
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Wie die Schwächen der Enigma zu revolutionären Verbesserungen
              führten
            </p>

            {/* Modern Insights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <ModernInsightsText />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Der <span className="text-red-400">Kernfehler</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-3xl p-8 sm:p-12 border border-red-500/30 mb-16"
          >
            <div className="flex items-center mb-6">
              <BiBug className="text-4xl text-red-400 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-red-400">
                Fataler Designfehler
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Die historische Schwächung der Enigma lässt sich auf einen
              einzigen konzeptionellen Kernfehler zurückführen:{" "}
              <span className="text-red-400 font-semibold">
                Die Unfähigkeit, Buchstaben auf sich selbst zu verschlüsseln.
              </span>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Diese Eigenschaft ermöglichte erst die Known-Plaintext-Angriffe
              und die Entwicklung der Turing-Bombe – ohne sie wäre der
              kombinatorische Schlüsselraum praktisch unüberwindbar gewesen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Improvements Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Revolutionäre{" "}
              <span className="text-green-400">Verbesserungen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {improvements.map((improvement, index) => (
              <motion.div
                key={improvement.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#101828] rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${improvement.color} flex items-center justify-center mb-4`}
                  >
                    <improvement.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {improvement.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                    <span className="text-sm font-semibold text-red-400">
                      Problem
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed ml-5">
                    {improvement.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                    <span className="text-sm font-semibold text-green-400">
                      Lösung
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed ml-5">
                    {improvement.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center">
                    <BiCheckCircle className="text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold text-sm">
                      {improvement.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typex Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-3xl p-8 sm:p-12 border border-blue-500/30"
          >
            <div className="flex items-center mb-8">
              <BiShield className="text-4xl text-blue-400 mr-4" />
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  Die Typex-Maschine
                </h3>
                <p className="text-blue-300">
                  Britische Antwort auf Enigmas Schwächen
                </p>
              </div>
            </div>

            <ExpandableText />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-black/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-300 mb-4">
                  Technische Verbesserungen
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <BiCheckCircle className="text-green-400 mr-3" />
                    Modifizierte Umkehrwalze
                  </li>
                  <li className="flex items-center">
                    <BiCheckCircle className="text-green-400 mr-3" />
                    Fünf statt drei Rotoren
                  </li>
                  <li className="flex items-center">
                    <BiCheckCircle className="text-green-400 mr-3" />
                    Unregelmäßige Walzenfortschaltung
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-300 mb-4">
                  Kryptographische Überlegenheit
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Diese Verbesserungen machten die Typex kryptographisch
                  überlegen und praktisch unknackbar für die damalige Zeit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Evolutionäre <span className="text-purple-400">Entwicklung</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-blue-500 to-green-500" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-center"
                >
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-2 border-white ${
                      event.status === "problem"
                        ? "bg-red-500"
                        : event.status === "improvement"
                          ? "bg-blue-500"
                          : event.status === "evolution"
                            ? "bg-purple-500"
                            : "bg-green-500"
                    }`}
                  />

                  <div className="ml-16 bg-gray-900/60 rounded-xl p-6 border border-gray-700 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          event.status === "problem"
                            ? "bg-red-500/20 text-red-400"
                            : event.status === "improvement"
                              ? "bg-blue-500/20 text-blue-400"
                              : event.status === "evolution"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {event.year}
                      </span>
                      <BiTime className="text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-3xl p-8 sm:p-12 border border-green-500/30 text-center"
          >
            <BiBook className="text-4xl text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6">
              Das Ende einer Ära
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              1962 erfolgte der Übergang zur{" "}
              <span className="text-green-400 font-semibold">
                Combined Cipher Machine (CCM)
              </span>
              , die einen einheitlichen Verschlüsselungsstandard für die US- und
              britischen Streitkräfte etablierte.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Dieser Schritt markierte das endgültige Ende der
              Rotor-Chiffriergeräte-Ära zugunsten elektronischer Systeme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Wissenstest{" "}
              <span className="text-purple-400">Verbesserungen</span>
            </h2>
            <p className="text-xl text-gray-300">
              Teste dein Verständnis über die Enigma-Verbesserungen und deren
              moderne Relevanz
            </p>
          </motion.div>

          <QuizComponent
            sectionId="legacy"
            questions={quizQuestions}
            requiredScore={75}
          />
        </div>
      </section>
    </div>
  );
};

export default ImprovementsPage;
