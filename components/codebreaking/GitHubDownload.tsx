"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BiDownload,
  BiCode,
  BiLogoGithub,
  BiTerminal,
  BiPlay,
} from "react-icons/bi";

interface GitHubDownloadProps {
  repoUrl: string;
  repoName: string;
  description: string;
  fileName: string;
}

export const GitHubDownload = ({
  repoUrl,
  repoName,
  description,
  fileName,
}: GitHubDownloadProps) => {
  const handleDownload = () => {
    window.open(repoUrl, "_blank");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Probiere es selbst aus!
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lade dir unser Python-Script herunter und versuche selbst, die
            Enigma zu knacken
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#145dfb]/50 transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#145dfb] to-blue-600 rounded-xl flex items-center justify-center">
                <BiLogoGithub className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{repoName}</h3>
                <p className="text-[#145dfb] text-sm">Python Enigma Cracker</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <BiCode className="text-[#145dfb]" />
              <span className="text-sm text-gray-400">Python</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <BiTerminal className="text-[#145dfb] text-xl mb-2" />
                <h4 className="font-semibold text-white mb-1">Kommandozeile</h4>
                <p className="text-sm text-gray-400">
                  Einfache Bedienung über Terminal
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <BiPlay className="text-[#145dfb] text-xl mb-2" />
                <h4 className="font-semibold text-white mb-1">
                  Sofort starten
                </h4>
                <p className="text-sm text-gray-400">
                  Keine komplexe Installation nötig
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <BiCode className="text-[#145dfb] text-xl mb-2" />
                <h4 className="font-semibold text-white mb-1">Open Source</h4>
                <p className="text-sm text-gray-400">
                  Quellcode einsehbar und anpassbar
                </p>
              </div>
            </div>
          </div>

          {/* File Info */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BiCode className="text-[#145dfb] text-xl" />
                <div>
                  <h4 className="font-semibold text-white">{fileName}</h4>
                  <p className="text-sm text-gray-400">Python Script</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Dateigröße</p>
                <p className="font-semibold text-white">~15 KB</p>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">
              📋 Schnellstart Anleitung
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#145dfb] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="text-white font-medium">
                    Repository klonen oder herunterladen
                  </p>
                  <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                    git clone {repoUrl}
                  </code>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#145dfb] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="text-white font-medium">
                    Python-Abhängigkeiten installieren
                  </p>
                  <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                    pip install -r requirements.txt
                  </code>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#145dfb] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="text-white font-medium">Script ausführen</p>
                  <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                    python {fileName}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#145dfb] to-blue-600 hover:from-[#145dfb]/80 hover:to-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
          >
            <BiDownload className="text-xl" />
            <span>Auf GitHub herunterladen</span>
            <BiLogoGithub className="text-xl" />
          </motion.button>

          {/* Note */}
          <div className="mt-6 p-4 bg-[#145dfb]/10 border border-[#145dfb]/30 rounded-lg">
            <p className="text-sm text-gray-300 text-center">
              💡 <strong>Hinweis:</strong> Benötigt Python 3.7+ und die in
              requirements.txt aufgelisteten Bibliotheken
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
