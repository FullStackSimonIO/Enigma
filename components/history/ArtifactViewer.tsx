"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BiZoomIn,
  BiZoomOut,
  BiRotateLeft,
  BiRotateRight,
  BiInfoCircle,
} from "react-icons/bi";

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
    date: "May 15, 1942",
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
    description: "Key used during the Battle of the Coral Sea",
    significance:
      "This key configuration was used for critical naval communications during one of the first major carrier battles.",
  },
  {
    id: "1943-07-20",
    date: "July 20, 1943",
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
    description: "Atlantic U-boat operations key",
    significance:
      "Used by U-boat wolfpacks during intense Atlantic convoy battles.",
  },
  {
    id: "1944-06-06",
    date: "June 6, 1944",
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
    description: "D-Day invasion communications",
    significance:
      "Critical key used during the Normandy landings - one of the most important days in WWII.",
  },
];

export const ArtifactViewer = () => {
  const [selectedKey, setSelectedKey] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

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
            Artifact <span className="text-red-500">Viewer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Examine historical Enigma machine keys and their wartime
            significance
          </p>
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
                      ? "border-red-500 bg-red-500/10"
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
                      Currently viewing
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
                    Machine Key - {currentKey.date}
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
                        <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block font-bold">
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
                        Historical Significance
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {currentKey.significance}
                      </p>

                      <div className="mt-4 grid sm:grid-cols-2 gap-4">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <h5 className="font-semibold text-red-400 mb-1">
                            Encryption Strength
                          </h5>
                          <p className="text-sm text-gray-400">
                            ~159 quintillion possible combinations
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3">
                          <h5 className="font-semibold text-red-400 mb-1">
                            Key Distribution
                          </h5>
                          <p className="text-sm text-gray-400">
                            Changed daily at midnight
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
      </div>
    </section>
  );
};
