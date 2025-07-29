"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiRotateRight,
  BiZoomIn,
  BiZoomOut,
  BiChevronDown,
} from "react-icons/bi";

interface RotorProps {
  rotorNumber: number;
  wiring: string;
  notchPosition: number;
  currentPosition: number;
  onRotate: () => void;
}

const Rotor = ({
  rotorNumber,
  wiring,
  notchPosition,
  currentPosition,
  onRotate,
}: RotorProps) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="relative">
      {/* Rotor Body */}
      <motion.div
        className="relative w-32 h-32 bg-[#101828] rounded-full border-4 border-gray-600 shadow-2xl cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRotate}
        animate={{ rotate: currentPosition * (360 / 26) }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Rotor Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl">R{rotorNumber}</span>
        </div>

        {/* Letter Ring */}
        {alphabet.split("").map((letter, index) => {
          const angle = (index * 360) / 26;
          const isNotch = index === notchPosition;
          const isVisible = Math.abs(index - currentPosition) <= 3;

          return (
            <motion.div
              key={letter}
              className={`absolute w-6 h-6 flex items-center justify-center text-xs font-mono ${
                isNotch ? "text-[#145dfb] font-bold" : "text-gray-300"
              }`}
              style={{
                transform: `rotate(${angle}deg) translateY(-50px)`,
                transformOrigin: "50% 50px",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0.2,
                scale: isNotch ? 1.2 : 1,
              }}
            >
              {letter}
            </motion.div>
          );
        })}

        {/* Notch Indicator */}
        <motion.div
          className="absolute w-2 h-4 bg-[#145dfb] rounded-sm"
          style={{
            top: "8px",
            left: "50%",
            marginLeft: "-4px",
            transform: `rotate(${notchPosition * (360 / 26)}deg)`,
            transformOrigin: "50% 56px",
          }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(239, 68, 68, 0)",
              "0 0 10px rgba(239, 68, 68, 0.8)",
              "0 0 0 rgba(239, 68, 68, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Wiring Display */}
      <div className="mt-4 text-center">
        <div className="text-xs text-gray-400 mb-1">Verdrahtung</div>
        <div className="font-mono text-xs text-cyan-400 bg-gray-900 rounded px-2 py-1">
          {wiring.slice(0, 8)}...
        </div>
      </div>
    </div>
  );
};

export const RotorNotchDisplay = () => {
  const [rotorPositions, setRotorPositions] = useState([0, 5, 12]);
  const [zoom, setZoom] = useState(1);
  const [selectedRotor, setSelectedRotor] = useState<number | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const rotors = [
    { number: 1, wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", notch: 16 }, // Q
    { number: 2, wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE", notch: 4 }, // E
    { number: 3, wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO", notch: 21 }, // V
  ];

  const rotateRotor = (index: number) => {
    setRotorPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index] = (newPositions[index] + 1) % 26;

      // Double stepping simulation
      if (index === 2 && newPositions[2] === rotors[2].notch) {
        newPositions[1] = (newPositions[1] + 1) % 26;
        if (newPositions[1] === rotors[1].notch) {
          newPositions[0] = (newPositions[0] + 1) % 26;
        }
      }

      return newPositions;
    });
  };

  const handleZoomIn = () => setZoom(Math.min(zoom + 0.2, 2));
  const handleZoomOut = () => setZoom(Math.max(zoom - 0.2, 0.6));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
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
            Walzen <span className="text-cyan-400">Mechanismus</span>
          </h2>
          <div className="max-w-4xl mx-auto">
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
              Beim Drücken einer Taste wird der elektrische Stromkreis zunächst
              durch das Steckerbrett geleitet, wo manuell gesteckte Kabelbuchsen
              eine erste Buchstabenvertauschung erzwingen (beispielsweise A →
              J). Das so transformierte Signal passiert anschließend die
              feststehende Eintrittswalze (ETW), die als Eingangstor zu den
              Rotoren dient. Nun durchläuft der Strom das eigentliche
              kryptographische Herzstück der Maschine – die Rotoren. Jeder
              dieser individuell verdrahteten Walzen besitzt 26 Kontakte und
              dreht sich nach jedem Tastenanschlag durch einen präzisen
              Mechanismus weiter: Eine mechanische Kerbe (Notch) löst dabei die
              Rotorvorrückung aus, sodass sich der nächste Rotor bewegt, sobald
              der vorherige eine bestimmte Position erreicht. Diese
              kontinuierliche Positionsänderung verändert den
              Verschlüsselungspfad für jeden Buchstaben dynamisch.
              <br />
              <br />
              Nach Passieren der Rotoren trifft der Strom auf die Umkehrwalze
              (UKW), die ihn auf einem veränderten Pfad durch die Walzen
              zurückleitet. Dieser bidirektionale Stromfluss – Hinweg durch die
              Rotorenfolge, Rückweg in umgekehrter Reihenfolge – erklärt das
              fundamentale Prinzip, warum ein Buchstabe niemals auf sich selbst
              verschlüsselt werden kann: Der Rückweg folgt stets einem anderen
              Kontaktpfad als der Hinweg. Das rücklaufende Signal passiert
              erneut die Eintrittswalze und durchläuft abschließend ein zweites
              Mal das Steckerbrett, wo erneut eine Vertauschung stattfindet
              (beispielsweise G → S). Erst dann leuchtet die entsprechende Lampe
              im Lampenfeld auf.
            </p>
            <motion.button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-3 text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-1 transition-colors duration-200 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                {isDescriptionExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </span>
              <BiChevronDown
                className={`transform transition-transform duration-200 ${
                  isDescriptionExpanded ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* View Controls */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4">
                Ansichtssteuerung
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Zoom</span>
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={handleZoomOut}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiZoomOut className="text-gray-300" />
                    </motion.button>
                    <motion.button
                      onClick={handleZoomIn}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiZoomIn className="text-gray-300" />
                    </motion.button>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-400">
                  {Math.round(zoom * 100)}%
                </div>
              </div>
            </div>

            {/* Rotor Information */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4">Walzen Info</h3>
              <div className="space-y-3">
                {rotors.map((rotor, index) => (
                  <motion.div
                    key={rotor.number}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedRotor === index
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-gray-700 bg-gray-800 hover:border-gray-600"
                    }`}
                    onClick={() =>
                      setSelectedRotor(selectedRotor === index ? null : index)
                    }
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">
                        Walze {rotor.number}
                      </span>
                      <span className="text-sm text-gray-400">
                        Pos: {String.fromCharCode(65 + rotorPositions[index])}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Kerbe: {String.fromCharCode(65 + rotor.notch)}
                    </div>
                    {selectedRotor === index && (
                      <motion.div
                        className="mt-3 pt-3 border-t border-gray-700"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="text-xs text-cyan-400 font-mono">
                          {rotor.wiring}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stepping Explanation */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4">
                Schaltmechanismus
              </h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Rechte Walze dreht sich bei jedem Tastendruck</p>
                <p>
                  • Mittlere Walze dreht sich wenn rechte Walze Kerbe erreicht
                </p>
                <p>
                  • Linke Walze dreht sich wenn mittlere Walze Kerbe erreicht
                </p>
                <p className="text-[#145dfb]">
                  • Doppelschritt tritt bei mittlerer Walzen-Kerbe auf
                </p>
              </div>
            </div>
          </div>

          {/* Rotor Display */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <motion.div
                className="flex justify-center items-center space-x-8"
                style={{ transform: `scale(${zoom})` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {rotors.map((rotor, index) => (
                  <motion.div
                    key={rotor.number}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <Rotor
                      rotorNumber={rotor.number}
                      wiring={rotor.wiring}
                      notchPosition={rotor.notch}
                      currentPosition={rotorPositions[index]}
                      onRotate={() => rotateRotor(index)}
                    />

                    {/* Position Indicator */}
                    <div className="mt-4 text-center">
                      <div className="text-sm text-gray-400 mb-1">Position</div>
                      <div className="text-2xl font-bold text-white bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        {String.fromCharCode(65 + rotorPositions[index])}
                      </div>

                      {/* Notch Warning */}
                      {rotorPositions[index] === rotor.notch && (
                        <motion.div
                          className="mt-2 text-xs text-[#145dfb] font-semibold"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          BEI KERBE!
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <motion.button
                  onClick={() => rotateRotor(2)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BiRotateRight />
                  <span>Walzen drehen</span>
                </motion.button>

                <motion.button
                  onClick={() => setRotorPositions([0, 0, 0])}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Zurücksetzen
                </motion.button>
              </div>

              {/* Educational Info */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="text-white font-semibold mb-2">
                  Kerben verstehen
                </h4>
                <p className="text-gray-400 text-sm">
                  Der rote Indikator zeigt die Kerbenposition. Wenn eine Walze
                  ihre Kerbe erreicht, veranlasst sie die nächste Walze zum
                  Drehen. Dieser Mechanismus war entscheidend für Enigmas
                  Sicherheit, bot aber auch Muster, die Codeknackern halfen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
