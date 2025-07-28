"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiRadio, BiKey, BiChevronDown, BiShield } from "react-icons/bi";

interface ChainMember {
  id: string;
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
  icon: React.ReactNode;
  color: string;
}

const chainOfCommand: ChainMember[] = [
  {
    id: "officer",
    title: "Kommandooffizier",
    role: "Strategisches Kommando",
    description:
      "Verantwortlich für die gesamte Einsatzplanung und die übergeordneten strategischen Kommunikationsabläufe.",
    responsibilities: [
      "Planung von Missionen und Festlegung der Einsatzziele",
      "Freigabe und Überwachung der strategischen Kommunikation",
      "Kontrolle von Sicherheitsprotokollen",
      "Personalführung und -koordination",
    ],
    icon: <BiShield className="text-2xl" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "operator",
    title: "Funker",
    role: "Kommunikationsspezialist",
    description:
      "Ausgebildeter Spezialist für das Verschlüsseln und Übermitteln von Nachrichten mit der Enigma-Maschine.",
    responsibilities: [
      "Tägliche Konfiguration der Schlüssel- und Walzeneinstellungen",
      "Ver- und Entschlüsselung von Nachrichten",
      "Wartung und Funktionsprüfung der Kommunikationsgeräte",
      "Einhaltung der Funk- und Kommunikationsprotokolle",
    ],
    icon: <BiRadio className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "key-keeper",
    title: "Schlüsseloffizier",
    role: "Sicherheitsspezialist",
    description:
      "Verantwortlich für die Verwaltung der Verschlüsselungsschlüssel und die Aufrechterhaltung der Kommunikationssicherheit.",
    responsibilities: [
      "Tägliche Ausgabe und Verwaltung der Schlüsselunterlagen",
      "Durchsetzung und Kontrolle der Sicherheitsprotokolle",
      "Sicherung und Schutz der Geräte",
      "Einleitung von Notfallmaßnahmen bei Sicherheitsverletzungen",
    ],
    icon: <BiKey className="text-2xl" />,
    color: "from-red-500 to-pink-500",
  },
];

export const ChainOfCommand = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<number | null>(
    null
  );
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleExpanded = (memberId: string) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Die Befehlskette
          </h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              className={`text-gray-400 text-lg transition-all duration-300 ${
                !isDescriptionExpanded ? "line-clamp-3" : ""
              }`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: !isDescriptionExpanded ? 3 : "none",
                WebkitBoxOrient: "vertical",
                overflow: !isDescriptionExpanded ? "hidden" : "visible",
              }}
            >
              Die Befehlskette bei der Nutzung der Enigma-Maschine im deutschen
              Militär war streng hierarchisch aufgebaut und trennte klar
              zwischen der Verantwortung für die Verschlüsselung und der reinen
              Nachrichtenübertragung. Die eigentliche Verschlüsselung der
              Nachricht erfolgte nicht durch den Funker, sondern durch einen
              Offizier – in der Regel ein speziell ausgebildeter Nachrichten-
              oder Schlüsseloffizier. Dieser Offizier verfasste die Nachricht im
              Klartext, stellte die Enigma gemäß den täglich vorgeschriebenen
              Schlüsselvorgaben ein und verschlüsselte den Text eigenhändig mit
              der Maschine. Erst der verschlüsselte Text wurde anschließend an
              den Funker übergeben. Der Funker hatte also keinerlei Einblick in
              den Inhalt der Nachricht. Seine Aufgabe beschränkte sich darauf,
              die bereits verschlüsselte Nachricht aufzunehmen und sie per
              Morsecode über Funk zu übermitteln. Auf der Empfängerseite
              wiederholte sich dieses Verfahren spiegelbildlich: Der Funker dort
              nahm die verschlüsselte Nachricht entgegen und übergab sie – ohne
              sie zu entschlüsseln – an den zuständigen Offizier. Erst dieser
              hatte wiederum Zugang zur Enigma-Maschine sowie zu den notwendigen
              Schlüsselunterlagen und konnte den Text entschlüsseln. Diese klare
              Aufgabentrennung war bewusst so gestaltet, um die Sicherheit der
              Kommunikation zu gewährleisten. Indem der Funker weder Klartext
              noch die Schlüssel kannte, wurde das Risiko minimiert, dass
              sensible Informationen durch Fahrlässigkeit, Spionage oder
              Gefangennahme kompromittiert wurden. Die Enigma war also nicht nur
              technisch, sondern auch organisatorisch durch ein striktes System
              abgesichert.
            </motion.div>
            <motion.button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-3 text-red-400 hover:text-red-300 font-medium flex items-center space-x-1 transition-colors duration-200"
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
          </div>
        </motion.div>

        {/* Chain Visualization */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {chainOfCommand.map((member, index) => (
                <React.Fragment key={member.id}>
                  {/* Connection Line */}
                  {index > 0 && (
                    <motion.div
                      className="flex-1 h-1 bg-gradient-to-r from-gray-600 to-gray-700 mx-4 relative"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3, duration: 0.8 }}
                      onMouseEnter={() => setHoveredConnection(index)}
                      onMouseLeave={() => setHoveredConnection(null)}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 ${
                          hoveredConnection === index
                            ? "opacity-100"
                            : "opacity-0"
                        } transition-opacity duration-300`}
                      />
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"
                        animate={{
                          scale: hoveredConnection === index ? [1, 1.5, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: hoveredConnection === index ? Infinity : 0,
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Member Card */}
                  <motion.div
                    className="w-80"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <ChainMemberCard
                      member={member}
                      isExpanded={expandedMember === member.id}
                      onToggle={() => toggleExpanded(member.id)}
                    />
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {chainOfCommand.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <ChainMemberCard
                  member={member}
                  isExpanded={expandedMember === member.id}
                  onToggle={() => toggleExpanded(member.id)}
                />
                {index < chainOfCommand.length - 1 && (
                  <div className="flex justify-center my-4">
                    <motion.div
                      className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-400"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.3, duration: 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ChainMemberCardProps {
  member: ChainMember;
  isExpanded: boolean;
  onToggle: () => void;
}

const ChainMemberCard = ({
  member,
  isExpanded,
  onToggle,
}: ChainMemberCardProps) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden cursor-pointer"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onToggle}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${member.color} p-4`}>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">{member.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{member.title}</h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BiChevronDown className="text-xl" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-4">{member.description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-2">
                Verantwortlichkeiten:
              </h4>
              <div className="space-y-2">
                {member.responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">
                      {responsibility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
