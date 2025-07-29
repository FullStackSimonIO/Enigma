"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BiChevronLeft,
  BiChevronRight,
  BiInfoCircle,
  BiChevronDown,
} from "react-icons/bi";
import Image from "next/image";

interface EnigmaModel {
  id: string;
  name: string;
  year: string;
  description: string;
  features: string[];
  image: string;
  specifications: {
    rotors: number;
    reflectors: number;
    plugboard: boolean;
    weight: string;
  };
}

const enigmaModels: EnigmaModel[] = [
  {
    id: "m1",
    name: "Enigma I (M1)",
    year: "1930",
    description:
      "Die erste kommerzielle Enigma, die in der Luftfahrt und Marine eingesetzt wurde.",
    features: [
      "3 Walzen aus einem Satz von 5",
      "Steckerbrett mit 6 Kabeln",
      "26-Buchstaben-Tastatur",
      "Reflektor B oder C",
    ],
    image: "/enigma-m1.jpeg",
    specifications: {
      rotors: 3,
      reflectors: 1,
      plugboard: true,
      weight: "12 kg",
    },
  },
  {
    id: "m2",
    name: "Enigma M2",
    year: "1940",
    description:
      "Verbesserte Marineversion mit erweiterten Sicherheitsfunktionen für U-Boot-Kommunikation.",
    features: [
      "3 Walzen aus einem Satz von 8",
      "Steckerbrett mit 10 Kabeln",
      "Zusätzliche Rotorpositionen",
      "Wetterfeste Konstruktion",
    ],
    image: "/enigma-m2.jpg",
    specifications: {
      rotors: 3,
      reflectors: 1,
      plugboard: true,
      weight: "15 kg",
    },
  },
  {
    id: "m3",
    name: "Enigma M3",
    year: "1941",
    description:
      "Die Standardversion der Enigma, die von der Wehrmacht verwendet wurde.",
    features: [
      "3 Walzen aus einem Satz von 8",
      "Dünne Reflektoren",
      "Verbessertes Steckerbrett",
      "Erweiterte Schlüsselverteilung",
    ],
    image: "/enigma-m3.jpg",
    specifications: {
      rotors: 3,
      reflectors: 2,
      plugboard: true,
      weight: "13 kg",
    },
  },
  {
    id: "m4",
    name: "Enigma M4",
    year: "1942",
    description:
      "Die letzte und fortschrittlichste Version der Enigma, die von der Kriegsmarine verwendet wurde.",
    features: [
      "4 Walzen aus einem Satz von 8",
      "Steckerbrett mit 10 Kabeln",
      "Reflektor D",
      "Erweiterte Sicherheitsfunktionen",
    ],
    image: "/enigma-m4.jpeg",
    specifications: {
      rotors: 4,
      reflectors: 1,
      plugboard: true,
      weight: "18 kg",
    },
  },
];

export const EnigmaGallery = () => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const nextModel = () => {
    setSelectedModel((prev) => (prev + 1) % enigmaModels.length);
  };

  const prevModel = () => {
    setSelectedModel(
      (prev) => (prev - 1 + enigmaModels.length) % enigmaModels.length
    );
  };

  const currentModel = enigmaModels[selectedModel];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
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
            Modelle der <span className="text-[#145dfb]">Enigma</span>
          </h2>
          <div>
            <p
              className={`text-gray-300 text-justify leading-relaxed ${
                !isDescriptionExpanded ? "line-clamp-3 overflow-hidden" : ""
              }`}
              style={{
                display: !isDescriptionExpanded ? "-webkit-box" : "block",
                WebkitLineClamp: !isDescriptionExpanded ? 3 : "unset",
                WebkitBoxOrient: "vertical",
              }}
            >
              Die Enigma-Maschine wurde in mehreren Varianten entwickelt, die
              sich in Aufbau, Funktionsweise und Sicherheitsniveau
              unterschieden. Ursprünglich als kommerzielle
              Verschlüsselungsmaschine konzipiert, wurde sie später vor allem
              vom deutschen Militär während des Zweiten Weltkriegs genutzt. Die
              wichtigsten Modelle lassen sich in drei Hauptgruppen einteilen:
              kommerzielle Enigma-Modelle, militärische Modelle und
              spezialisierte Varianten. Die ersten kommerziellen Enigmas, wie
              die Enigma A und B, erschienen in den 1920er-Jahren. Sie verfügten
              über drei Walzen (Rotoren), ein fest verdrahtetes
              Umkehrwalzen-System (UKW) und eine einfache Tastatur mit
              Leuchtfeldanzeige. Diese Modelle wurden an Banken, Unternehmen und
              diplomatische Dienste verkauft. Sicherheitstechnisch waren sie
              vergleichsweise schwach, da sie noch kein Steckerbrett (Plugboard)
              besaßen, das später eine zentrale Sicherheitskomponente wurde. Das
              mit Abstand bekannteste Modell ist die Enigma I (auch Wehrmacht-
              oder Heeres-Enigma genannt), das ab 1930 vom deutschen Militär
              verwendet wurde. Sie unterschied sich deutlich von den
              kommerziellen Vorgängern: Neben drei aus fünf auswählbaren Rotoren
              wurde ein Steckerbrett eingeführt, mit dem Buchstabenpaare
              vertauscht werden konnten. Dadurch stieg die kombinatorische
              Komplexität der Verschlüsselung erheblich. Spätere Versionen für
              Luftwaffe und Marine bauten auf dieser Grundlage auf. Ein
              Sonderfall stellt die Kriegsmarine-Enigma M3 dar. Sie nutzte
              ebenfalls drei Rotoren, allerdings mit einer Auswahl aus acht, was
              die Sicherheit im Vergleich zur Heeresversion erhöhte. Noch
              komplexer war die Enigma M4, die ab 1942 für U-Boot-Kommunikation
              eingesetzt wurde. Sie verfügte über vier Rotoren – drei rotierende
              und einen dünneren vierten Rotor mit separater Umkehrwalze – was
              eine signifikante Steigerung der kryptografischen Stärke
              bedeutete. Die Alliierten mussten für das Knacken der M4
              beträchtlichen zusätzlichen Aufwand betreiben. Neben diesen
              Standardmodellen gab es auch spezialisierte Varianten wie die
              Enigma G, die von der Abwehr (dem deutschen militärischen
              Geheimdienst) verwendet wurde. Sie hatte keine Umkehrwalze und war
              somit „nicht selbstinvers“, was eine zusätzliche Komplexitätsstufe
              darstellte. Ein weiteres Beispiel ist die Zahlenschreibende
              Enigma, bei der statt Buchstaben Zahlen kodiert wurden, was
              allerdings technisch weniger verbreitet war. Insgesamt
              unterscheiden sich die Enigma-Modelle hauptsächlich in der Anzahl
              und Auswahl der Rotoren, der Existenz und Ausgestaltung des
              Steckerbretts, dem Design der Umkehrwalze und der elektrischen
              Verdrahtung. Diese Unterschiede hatten direkte Auswirkungen auf
              die kryptografische Sicherheit – mit zunehmender Komplexität wurde
              das Knacken durch die Alliierten schwieriger, wenn auch nie
              unmöglich.
            </p>
            <motion.button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-4 flex items-center justify-center space-x-2 text-[#145dfb] hover:text-blue-300 transition-colors mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">
                {isDescriptionExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </span>
              <motion.div
                animate={{ rotate: isDescriptionExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BiChevronDown />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Model Display */}
          <motion.div
            className="relative"
            layout
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentModel.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                {/* Model Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#145dfb]/10 to-transparent" />

                  {/* Actual Enigma Image */}
                  <Image
                    src={currentModel.image}
                    alt={currentModel.name}
                    className="w-full h-full object-cover rounded-xl"
                    width={800}
                    height={600}
                  />

                  {/* Fallback gear icon (hidden by default) */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-6xl text-[#145dfb]/30"
                    style={{ display: "none" }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ⚙️
                  </motion.div>

                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-[#145dfb] text-sm font-semibold">
                      {currentModel.year}
                    </span>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mb-4">
                  <motion.button
                    onClick={prevModel}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiChevronLeft className="text-[#145dfb] text-xl" />
                  </motion.button>

                  <div className="flex space-x-2">
                    {enigmaModels.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedModel(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === selectedModel
                            ? "bg-[#145dfb]"
                            : "bg-gray-600"
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextModel}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiChevronRight className="text-[#145dfb] text-xl" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Model Information */}
          <motion.div
            className="space-y-6"
            layout
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentModel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentModel.name}
                </h3>
                <p className="text-[#145dfb] text-lg mb-4">
                  Eingeführt im Jahr {currentModel.year}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {currentModel.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Hauptmerkmale
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentModel.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-[#145dfb] rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specifications Toggle */}
                <motion.button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center space-x-2 bg-[#145dfb]/10 hover:bg-[#145dfb]/20 border border-[#145dfb]/30 rounded-lg px-4 py-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BiInfoCircle className="text-[#145dfb]" />
                  <span className="text-[#145dfb]">
                    {showDetails ? "Verstecke" : "Zeige"} Spezifikationen
                  </span>
                </motion.button>

                {/* Specifications */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 bg-gray-900/50 rounded-lg p-4 border border-gray-800"
                    >
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Technische Spezifikationen
                      </h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Walzen:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.rotors}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Reflektoren:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.reflectors}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Steckerbrett:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.plugboard
                              ? "Ja"
                              : "Nein"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Gewicht:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.weight}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
