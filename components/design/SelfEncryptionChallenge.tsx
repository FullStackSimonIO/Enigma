"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiGroup,
  BiTransfer,
  BiLock,
  BiLockOpen,
  BiChevronDown,
  BiChevronUp,
  BiCheckCircle,
  BiUser,
  BiRightArrow,
} from "react-icons/bi";

export const SelfEncryptionChallenge = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Gruppenaufteilung",
      description: "Studierende teilen sich in Zweiergruppen auf",
      icon: BiGroup,
      color: "from-blue-500 to-cyan-500",
      details:
        "Jede Gruppe erhält entweder eine physische Enigma oder nutzt die virtuelle Emulation",
    },
    {
      id: 2,
      title: "Synchronisation",
      description: "Identische Konfiguration aller Maschinen",
      icon: BiCheckCircle,
      color: "from-purple-500 to-violet-500",
      details:
        "Alle Maschinen arbeiten mit identischer Rotorenstartstellung und Steckerbrett-Verdrahtung",
    },
    {
      id: 3,
      title: "Nachricht verschlüsseln",
      description: "Gruppe A erstellt und verschlüsselt eine Nachricht",
      icon: BiLock,
      color: "from-green-500 to-emerald-500",
      details:
        "Kurze, prägnante Nachricht (z.B. 'TEST') wird mittels Enigma verschlüsselt",
    },
    {
      id: 4,
      title: "Übertragung",
      description: "Verschlüsselte Nachricht wird an Gruppe B übertragen",
      icon: BiTransfer,
      color: "from-orange-500 to-red-500",
      details:
        "Die verschlüsselte Sequenz wird physisch auf Papier an Gruppe B übergeben",
    },
    {
      id: 5,
      title: "Entschlüsselung",
      description: "Gruppe B entschlüsselt die empfangene Nachricht",
      icon: BiLockOpen,
      color: "from-teal-500 to-blue-500",
      details:
        "Durch identischen Maschinenzustand wird die Nachricht exakt zum ursprünglichen Klartext entschlüsselt",
    },
    {
      id: 6,
      title: "Rollentausch",
      description: "Gruppen tauschen die Rollen für zweiten Durchgang",
      icon: BiRightArrow,
      color: "from-pink-500 to-purple-500",
      details:
        "Gruppe B generiert nun eine neue Nachricht, ohne die Rotorenstellung zurückzusetzen",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <BiGroup className="text-3xl text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Praktikum <span className="text-blue-400">Challenge</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Erleben Sie die Enigma-Verschlüsselung in Aktion durch praktische
            Gruppenarbeit
          </p>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Anleitung für die Gruppenarbeit
          </h3>
          <div
            className={`text-gray-300 text-justify leading-relaxed transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-4"
            }`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: isExpanded ? "none" : "4",
              WebkitBoxOrient: "vertical",
              overflow: isExpanded ? "visible" : "hidden",
            }}
          >
            <p className="mb-4">
              Im Praktikumsteil teilen sich die Studierenden in Zweiergruppen
              auf, wobei jede Gruppe entweder eine physische Enigma oder die
              virtuelle Emulation nutzt. Entscheidend ist die synchronisierte
              Konfiguration: Alle Maschinen arbeiten mit identischer
              Rotorenstartstellung und Steckerbrett-Verdrahtung, um eine
              konsistente Verschlüsselungsumgebung zu gewährleisten.
            </p>
            <p className="mb-4">
              Gruppe A formuliert zunächst eine kurze, prägnante Nachricht (z.B.
              &quot;TEST&quot;), die sie an Gruppe B senden möchte. Diese
              Klartextbotschaft verschlüsselt Gruppe A mittels ihrer Enigma und
              notiert das Ergebnis auf Papier. Die verschlüsselte Sequenz
              übergibt Gruppe A physisch an Gruppe B, die diese Zeichenkette in
              ihre eigene Enigma eingibt. Durch den identischen Maschinenzustand
              entschlüsselt Gruppe B die Nachricht exakt zum ursprünglichen
              Klartext (&quot;TEST&quot;).
            </p>
            <p>
              Anschließend wiederholen die Gruppen den Prozess mit vertauschten
              Rollen: Nun generiert Gruppe B eine neue Kurznachricht,
              verschlüsselt sie und reicht das Ergebnis an Gruppe A weiter.
              Kritisch ist hier, dass die Rotorenstellung nicht zurückgesetzt
              wird – sie verbleibt in der Position, die sich nach der letzten
              Entschlüsselung ergab. Diese Kontinuität simuliert authentische
              Feldbedingungen, bei denen zwischen Verschlüsselungsvorgängen
              keine manuelle Zurücksetzung erfolgte.
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
        </motion.div>

        {/* Step-by-Step Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}
                >
                  <step.icon className="text-xl text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-bold text-gray-400 mr-3">
                      Schritt {step.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {step.description}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Flow Diagram */}
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Kommunikationsablauf
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gruppe A */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <BiUser className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Gruppe A</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1. Nachricht erstellen</p>
                <p>2. Mit Enigma verschlüsseln</p>
                <p>3. Verschlüsselten Text übergeben</p>
              </div>
            </div>

            {/* Transfer */}
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <BiTransfer className="text-4xl text-yellow-400 mx-auto mb-2" />
                <p className="text-yellow-400 font-semibold">Übertragung</p>
                <p className="text-xs text-gray-400">Papier-basiert</p>
              </motion.div>
            </div>

            {/* Gruppe B */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <BiUser className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">
                Gruppe B
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1. Verschlüsselten Text empfangen</p>
                <p>2. Mit Enigma entschlüsseln</p>
                <p>3. Originalnachricht erhalten</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-500/30">
            <div className="flex items-center mb-3">
              <BiCheckCircle className="text-yellow-400 text-xl mr-3" />
              <h4 className="text-lg font-bold text-yellow-400">
                Wichtiger Hinweis
              </h4>
            </div>
            <p className="text-gray-300 text-sm">
              Die Rotorenstellung wird zwischen den Nachrichten{" "}
              <strong>nicht zurückgesetzt</strong>. Dies simuliert realistische
              Bedingungen und zeigt, wie sich die Verschlüsselung kontinuierlich
              ändert.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelfEncryptionChallenge;
