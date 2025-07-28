"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BiZoomIn,
  BiZoomOut,
  BiRotateLeft,
  BiRotateRight,
  BiInfoCircle,
  BiChevronDown,
} from "react-icons/bi";
import Image from "next/image";

interface MachineKey {
  id: string;
  date: string;
  rotorSettings: string[];
  plugboardConnections: { [key: string]: string };
  reflector: string;
  description: string;
  significance: string;
}

const historicalKeys: MachineKey[] = [
  {
    id: "1942-05-15",
    date: "15. Mai 1942",
    rotorSettings: ["III", "VI", "VIII"],
    plugboardConnections: {
      A: "M",
      F: "T",
      G: "K",
      J: "O",
      L: "Q",
      P: "U",
    },
    reflector: "B",
    description:
      "Schlüssel, der während der Schlacht im Korallenmeer verwendet wurde",
    significance:
      "Diese Schlüsselkonfiguration wurde für kritische Marinekommunikationen während einer der ersten großen Trägerschlachten verwendet.",
  },
  {
    id: "1943-07-20",
    date: "20. Juli 1943",
    rotorSettings: ["I", "IV", "V"],
    plugboardConnections: {
      B: "R",
      D: "H",
      J: "N",
      K: "P",
      S: "Z",
      W: "X",
    },
    reflector: "C",
    description: "Atlantik-U-Boot-Operationsschlüssel",
    significance:
      "Wurde von U-Boot-Wolfpacken während intensiver Atlantik-Konvoikämpfe verwendet.",
  },
  {
    id: "1944-06-06",
    date: "6. Juni 1944",
    rotorSettings: ["V", "II", "VIII"],
    plugboardConnections: {
      C: "Y",
      E: "I",
      H: "X",
      L: "Z",
      N: "P",
      Q: "V",
    },
    reflector: "B",
    description: "D-Day-Invasionskommunikation",
    significance:
      "Kritischer Schlüssel, der während der Landungen in der Normandie verwendet wurde - einer der wichtigsten Tage im Zweiten Weltkrieg.",
  },
];

export const ArtifactViewer = () => {
  const [selectedKey, setSelectedKey] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const currentKey = historicalKeys[selectedKey];

  const handleZoomIn = () => setZoom(Math.min(zoom + 0.2, 2));
  const handleZoomOut = () => setZoom(Math.max(zoom - 0.2, 0.5));
  const handleRotateLeft = () => setRotation(rotation - 90);
  const handleRotateRight = () => setRotation(rotation + 90);

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
            Tägliche <span className="text-[#145dfb]">Einstellungen</span>
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
              Die täglichen Einstellungen der Enigma-Maschine wurden durch
              spezielle Schlüsselblätter geregelt, die in der Praxis als
              zentrale Komponente der Verschlüsselung dienten. Diese sogenannten
              Schlüsselhefte oder Schlüsselzettel wurden meist monatlich im
              Voraus ausgegeben und enthielten für jeden Kalendertag eine
              vollständige Übersicht über die für diesen Tag gültigen
              Enigma-Einstellungen. Sie waren streng geheim, wurden nur in
              versiegelter Form weitergegeben und durften ausschließlich von
              autorisiertem Personal – meist Offizieren – eingesehen und
              verwendet werden. Ein typisches Blatt eines solchen Schlüsselhefts
              war in mehrere Zeilen unterteilt, wobei jede Zeile die
              vollständige Schlüsselkonfiguration für einen bestimmten Tag
              enthielt. Dazu zählten unter anderem die Auswahl und Reihenfolge
              der Rotoren, die Anfangsstellung (Grundstellung) der Walzen, die
              Steckerverbindungen auf dem Steckerbrett sowie gegebenenfalls
              Sonderinformationen wie die verwendete Umkehrwalze (UKW). Diese
              Parameter mussten exakt mit den Einstellungen auf der Enigma
              übereinstimmen, um eine korrekte Ver- und Entschlüsselung der
              Nachrichten zu ermöglichen. Jeden Morgen, meist zu einem
              festgelegten Zeitpunkt, wurde die jeweils unterste Zeile des
              Blattes – also die Einstellung für den aktuellen Tag – verwendet.
              Um die Verwechslungsgefahr mit vorherigen Tagen zu minimieren und
              gleichzeitig die Geheimhaltung zu erhöhen, wurde die benutzte
              Zeile nach dem Eintragen in die Maschine sofort abgetrennt. Dies
              erfolgte oft buchstäblich mit einem Lineal oder Messer, sodass der
              Abschnitt für den aktuellen Tag vom restlichen Schlüsselblatt
              getrennt und anschließend vernichtet werden konnte. Diese Praxis
              sollte sicherstellen, dass bei einer Gefangennahme oder einem
              Verlust der Unterlagen möglichst wenig kompromittiert wurde –
              idealerweise nur der Schlüssel eines einzelnen Tages. Die Blätter
              selbst waren meist im Voraus für einen Monat vorbereitet. Sie
              wurden versiegelt und durften jeweils erst zum Monatsbeginn
              geöffnet werden. In besonders sicherheitsrelevanten Bereichen, wie
              etwa auf U-Booten der Kriegsmarine, war die Handhabung noch
              strikter: Dort wurden die Schlüsselhefte meist doppelt geführt –
              einmal für die normalen Tagesmeldungen und zusätzlich für
              Kurzsignale wie Wetterberichte oder Angriffspositionen. Auch die
              Gültigkeit einzelner Schlüssel konnte bei Bedarf kurzfristig
              geändert werden, etwa wenn ein Verdacht auf Kompromittierung
              bestand. Diese Schlüsselblätter waren das eigentliche Herzstück
              der Enigma-Verschlüsselung: Ohne die exakte Kenntnis der
              jeweiligen Tagesparameter war die Maschine praktisch nutzlos.
              Deshalb waren sie auch militärisch betrachtet von höchstem Wert –
              und ihr Verlust galt als extrem sicherheitsgefährdend. Der
              legendäre Erfolg der Alliierten beim Knacken der Enigma beruhte
              daher nicht nur auf der Analyse der Maschine selbst, sondern auch
              auf der gelegentlichen Eroberung solcher Schlüsselunterlagen, etwa
              durch die Kaperung deutscher U-Boote oder Versorgungsschiffe.
            </motion.div>
            <motion.button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="mt-3 text-[#145dfb] hover:text-blue-300 font-medium flex items-center space-x-1 transition-colors duration-200"
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Historical Keys
            </h3>
            <div className="space-y-3">
              {historicalKeys.map((key, index) => (
                <motion.button
                  key={key.id}
                  onClick={() => {
                    setSelectedKey(index);
                    setZoom(1);
                    setRotation(0);
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedKey === index
                      ? "border-[#145dfb] bg-[#145dfb]/10"
                      : "border-gray-700 bg-gray-900/50 hover:border-gray-600"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-semibold text-white">{key.date}</div>
                  <div className="text-sm text-gray-400 mt-1">
                    {key.description}
                  </div>
                  {selectedKey === index && (
                    <motion.div
                      className="mt-2 text-xs text-red-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Aktuell
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {/* Viewer Header */}
              <div className="bg-gray-800 p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    Maschinenschlüssel - {currentKey.date}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {/* Zoom Controls */}
                    <motion.button
                      onClick={handleZoomOut}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiZoomOut className="text-gray-300" />
                    </motion.button>

                    <span className="text-sm text-gray-400 min-w-[60px] text-center">
                      {Math.round(zoom * 100)}%
                    </span>

                    <motion.button
                      onClick={handleZoomIn}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiZoomIn className="text-gray-300" />
                    </motion.button>

                    {/* Rotation Controls */}
                    <motion.button
                      onClick={handleRotateLeft}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiRotateLeft className="text-gray-300" />
                    </motion.button>

                    <motion.button
                      onClick={handleRotateRight}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiRotateRight className="text-gray-300" />
                    </motion.button>

                    {/* Additional Controls */}
                    <motion.button
                      onClick={() => setShowDetails(!showDetails)}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BiInfoCircle className="text-gray-300" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Artifact Display */}
              <div className="relative bg-black aspect-video overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentKey.id}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: zoom,
                      rotate: rotation,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Machine Key Visualization */}
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-8 shadow-2xl border-4 border-yellow-600">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          GEHEIME KOMMANDOSACHE
                        </h4>
                        <p className="text-gray-600">
                          Tagesschlüssel - {currentKey.date}
                        </p>
                      </div>

                      {/* Rotor Settings */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Walzenlage:
                        </h5>
                        <div className="flex justify-center space-x-4">
                          {currentKey.rotorSettings.map((rotor, index) => (
                            <div
                              key={index}
                              className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold"
                            >
                              {rotor}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Plugboard */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Steckerbrett:
                        </h5>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          {Object.entries(currentKey.plugboardConnections).map(
                            ([from, to]) => (
                              <div
                                key={from}
                                className="bg-gray-700 text-white px-2 py-1 rounded text-center"
                              >
                                {from}-{to}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Reflector */}
                      <div className="text-center">
                        <h5 className="font-semibold text-gray-800 mb-1">
                          Umkehrwalze:
                        </h5>
                        <div className="bg-[#145dfb] text-white px-4 py-2 rounded-full inline-block font-bold">
                          {currentKey.reflector}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Watermark */}
                <div className="absolute bottom-4 right-4 text-gray-600 text-xs opacity-50">
                  Enigma Archive • Historical Recreation
                </div>
              </div>

              {/* Details Panel */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Historische Bedeutung
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {currentKey.significance}
                      </p>

                      <div className="mt-4 grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <h5 className="font-semibold text-red-400 mb-1">
                            Verschlüsselungsstärke
                          </h5>
                          <p className="text-sm text-gray-400">
                            ~159 Quintillion mögliche Kombinationen
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3">
                          <h5 className="font-semibold text-red-400 mb-1">
                            Schlüsselverteilung
                          </h5>
                          <p className="text-sm text-gray-400">
                            Täglich um Mitternacht geändert
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Historical Settings Plan Image */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Authentisches{" "}
              <span className="text-[#145dfb]">Schlüsselblatt</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Ein originalgetreues Schlüsselblatt aus dem Zweiten Weltkrieg
              zeigt die strenge Organisation und Systematik der deutschen
              Enigma-Verschlüsselung.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Optional: Add actual image if you have one */}

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image
                src="/maschinenschluessel.png"
                width={800}
                height={600}
                alt="Authentic Enigma settings plan from WWII"
                className="w-full rounded-xl shadow-2xl border border-gray-700"
              />
              <p className="text-center text-sm text-gray-500 mt-4">
                Authentisches Enigma-Schlüsselblatt aus dem Bundesarchiv
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
