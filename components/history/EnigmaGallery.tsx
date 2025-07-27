"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronLeft, BiChevronRight, BiInfoCircle } from "react-icons/bi";

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
      "The first military version of Enigma, used extensively by the German Army and Air Force.",
    features: [
      "3 rotors from a set of 5",
      "Plugboard with 6 cables",
      "26-letter keyboard",
      "Reflector B or C",
    ],
    image: "/enigma-m1.jpg",
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
      "Enhanced naval version with improved security features for submarine communications.",
    features: [
      "3 rotors from a set of 8",
      "Plugboard with 10 cables",
      "Additional rotor positions",
      "Weather-resistant design",
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
      "The most advanced 3-rotor naval Enigma, featuring enhanced encryption complexity.",
    features: [
      "3 rotors from a set of 8",
      "Thin reflectors",
      "Improved plugboard",
      "Enhanced key distribution",
    ],
    image: "/enigma-m3.jpg",
    specifications: {
      rotors: 3,
      reflectors: 2,
      plugboard: true,
      weight: "13 kg",
    },
  },
];

export const EnigmaGallery = () => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

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
            Enigma <span className="text-red-500">Models</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the evolution of Enigma machines through their most
            significant variants
          </p>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
                  <motion.div
                    className="text-6xl text-red-500/30"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ⚙️
                  </motion.div>
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-red-400 text-sm font-semibold">
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
                    <BiChevronLeft className="text-red-500 text-xl" />
                  </motion.button>

                  <div className="flex space-x-2">
                    {enigmaModels.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedModel(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === selectedModel ? "bg-red-500" : "bg-gray-600"
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
                    <BiChevronRight className="text-red-500 text-xl" />
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
                <p className="text-red-400 text-lg mb-4">
                  Introduced in {currentModel.year}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {currentModel.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Key Features
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
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specifications Toggle */}
                <motion.button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center space-x-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BiInfoCircle className="text-red-500" />
                  <span className="text-red-400">
                    {showDetails ? "Hide" : "Show"} Specifications
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
                        Technical Specifications
                      </h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Rotors:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.rotors}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Reflectors:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.reflectors}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Plugboard:</span>
                          <span className="text-white ml-2">
                            {currentModel.specifications.plugboard
                              ? "Yes"
                              : "No"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Weight:</span>
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
