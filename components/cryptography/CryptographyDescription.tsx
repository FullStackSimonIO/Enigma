"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiLock, BiRefresh, BiCog, BiChevronDown } from "react-icons/bi";

export const CryptographyDescription = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Tastatureingabe",
      description:
        "Bediener drückt eine Taste und startet den Verschlüsselungsprozess",
      icon: "⌨️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Steckerbrett",
      description:
        "Erste Substitution - vertauscht Buchstabenpaare vor den Rotoren",
      icon: "🔌",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Rotor Eingang",
      description: "Signal durchläuft Rotoren von rechts nach links",
      icon: "⚙️",
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 4,
      title: "Reflektor",
      description:
        "Signal wird reflektiert, stellt sicher dass Verschlüsselung ≠ Entschlüsselung",
      icon: "🪞",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Rotor Rückweg",
      description: "Signal läuft zurück durch Rotoren (links nach rechts)",
      icon: "↩️",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      title: "Steckerbrett Ausgang",
      description: "Finale Substitution durch das Steckerbrett",
      icon: "🔌",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 7,
      title: "Lampenausgabe",
      description: "Verschlüsselter Buchstabe leuchtet auf dem Lampenfeld auf",
      icon: "💡",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient, steps.length]);

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
            Wie{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Enigma
            </span>{" "}
            verschlüsselt
          </h2>
          <div className="max-w-3xl mx-auto">
            <p
              className={`text-xl text-gray-300 transition-all duration-300 ${
                !isExpanded
                  ? "line-clamp-3 [display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden"
                  : ""
              }`}
            >
              Die Enigma-Maschine verschlüsselte Nachrichten in einem komplexen
              mehrstufigen Prozess, bei dem ein elektrisches Signal durch
              mehrere Komponenten geleitet wurde. Alles begann mit der Eingabe
              über die Tastatur: Sobald der Bediener eine Taste drückte, floss
              ein elektrisches Signal in die Maschine. Im nächsten Schritt
              erreichte es das sogenannte Steckerbrett, auf dem zuvor definierte
              Buchstabenpaare vertauscht wurden. Dies war die erste von mehreren
              Substitutionen im Verschlüsselungsprozess. Nach dieser
              Vorvertauschung gelangte das Signal in die Rotoren (Walzen). Diese
              bestanden aus mehreren hintereinander geschalteten, drehbaren
              Scheiben mit interner Verdrahtung. Das Signal passierte die
              Rotoren von rechts nach links, wobei jeder Rotor das Signal erneut
              veränderte. Am Ende der Rotoren befand sich der Reflektor, eine
              Umkehrwalze. Diese leitete das Signal auf einem anderen Weg zurück
              durch die Rotoren – diesmal von links nach rechts. Durch diese
              doppelte Passage wurden weitere Substitutionen vorgenommen, was
              für zusätzliche Sicherheit sorgte und gleichzeitig eine praktische
              Eigenschaft ermöglichte: Verschlüsselung und Entschlüsselung
              verwendeten dieselben Einstellungen. Nachdem das Signal erneut
              durch alle Rotoren geleitet wurde, erreichte es wieder das
              Steckerbrett für eine abschließende Substitution. Erst dann wurde
              der endgültige verschlüsselte Buchstabe sichtbar: Eine kleine
              Lampe leuchtete auf und zeigte dem Bediener den codierten
              Buchstaben an. Diese komplexe Abfolge von Eingabe, mehrfacher
              Substitution (Steckerbrett), Rotorverschlüsselung, Reflektion und
              erneuter Substitution erzeugte astronomisch viele mögliche
              Schlüssel und machte die Enigma lange Zeit nahezu
              unentschlüsselbar. Erst durch intelligente Analyse ihrer Muster
              gelang es, diese scheinbar perfekte Verschlüsselung zu brechen.
              ChatGPT fragen
            </p>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">
                {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BiChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-2xl border border-purple-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <BiLock className="text-purple-400 text-3xl mr-4" />
              <h3 className="text-2xl font-bold text-white">Substitution</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Jeder Buchstabe wird durch einen anderen ersetzt, über mehrere
              Substitutionsebenen hinweg. Dies erzeugt eine unglaublich komplexe
              Chiffre, die sich bei jedem Tastendruck ändert.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-8 rounded-2xl border border-cyan-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <BiCog className="text-cyan-400 text-3xl mr-4" />
              <h3 className="text-2xl font-bold text-white">Rotation</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Rotoren drehen sich mechanisch weiter und stellen sicher, dass
              sich das Chiffrieralphabet kontinuierlich ändert. Dadurch wird
              eine Häufigkeitsanalyse nahezu unmöglich.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 p-8 rounded-2xl border border-indigo-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <BiRefresh className="text-indigo-400 text-3xl mr-4" />
              <h3 className="text-2xl font-bold text-white">Reziprozität</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Der Reflektor stellt sicher, dass Verschlüsselung und
              Entschlüsselung dieselben Einstellungen verwenden, während er
              verhindert, dass sich ein Buchstabe in sich selbst verschlüsselt.
            </p>
          </motion.div>
        </div>

        {/* Encryption Steps Visualization */}
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Verschlüsselungsprozess
          </h3>

          {/* Step Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                  activeStep === index
                    ? "border-white bg-gradient-to-br " +
                      step.color +
                      " shadow-lg shadow-white/20"
                    : "border-gray-600 bg-gray-800/50"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveStep(index)}
              >
                <div className="text-center">
                  <div
                    className={`text-4xl mb-3 ${activeStep === index ? "animate-bounce" : ""}`}
                  >
                    {step.icon}
                  </div>
                  <h4
                    className={`font-bold mb-2 ${activeStep === index ? "text-white" : "text-gray-300"}`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm ${activeStep === index ? "text-gray-100" : "text-gray-400"}`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div
                  className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index
                      ? "bg-white text-gray-900"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {step.id}
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <motion.div
                      className={`w-4 h-0.5 ${activeStep >= index ? "bg-white" : "bg-gray-600"}`}
                      animate={
                        isClient && activeStep === index
                          ? {
                              scaleX: [0, 1],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mathematical Representation */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h4 className="text-xl font-bold text-white mb-4 text-center">
              Mathematisches Modell
            </h4>
            <div className="text-center space-y-4">
              <div className="text-lg font-mono text-cyan-400">
                E(x) = P⁻¹(R₃⁻¹(R₂⁻¹(R₁⁻¹(R(R₁(R₂(R₃(P(x)))))))))
              </div>
              <div className="text-sm text-gray-400">
                Wobei P = Steckerbrett, R₁,R₂,R₃ = Rotoren, R = Reflektor
              </div>
            </div>
          </motion.div>

          {/* Complexity Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-400">26³</div>
              <div className="text-sm text-gray-300">Rotor Einstellungen</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-400">6!</div>
              <div className="text-sm text-gray-300">Rotor Reihenfolgen</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-400">10¹⁰</div>
              <div className="text-sm text-gray-300">Steckerbrett</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-red-400">150T</div>
              <div className="text-sm text-gray-300">Gesamt Schlüssel</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
