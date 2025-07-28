"use client";
import React from "react";
import { motion } from "framer-motion";
import { QuizComponent } from "@/components/QuizComponent";
import { getProgress } from "@/lib/progress";
import { HistoryHero } from "@/components/history/HistoryHero";
import { EnigmaGallery } from "@/components/history/EnigmaGallery";
import { ChainOfCommand } from "@/components/history/ChainOfCommand";
import { ArtifactViewer } from "@/components/history/ArtifactViewer";

const HistoryPage = () => {
  const progress = getProgress();
  const historySection = progress.find((s) => s.id === "history");

  return (
    <div className="min-h-screen bg-[#101828] text-white">
      {/* Hero Section */}
      <HistoryHero
        title="Die Geschichte der Enigma"
        description="Entdecke die faszinierende Reise der Enigma-Maschine, von ihren kommerziellen Ursprüngen bis hin zu ihrer Rolle als Rückgrat der deutschen Militärkommunikation im Zweiten Weltkrieg."
        backgroundImage="/enigma-background.jpg"
      />

      {/* Enigma Models Gallery */}
      <EnigmaGallery />

      {/* Chain of Command */}
      <ChainOfCommand />

      {/* Artifact Viewer */}
      <ArtifactViewer />

      {/* Quiz Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Teste dein <span className="text-[#145dfb]">Wissen</span>
            </h2>
            <div className="bg-gradient-to-r from-[#145dfb]/20 to-blue-600/20 backdrop-blur-sm border border-[#145dfb]/30 rounded-2xl p-6 sm:p-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Beantworte die Fragen unten, um den nächsten Abschnitt
                freizuschalten und deine Reise durch die Enigma-Zeitlinie
                fortzusetzen.
              </p>
            </div>
          </motion.div>

          {historySection && historySection.quiz && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <QuizComponent
                sectionId="history"
                questions={historySection.quiz}
                requiredScore={historySection.requiredScore || 80}
              />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
