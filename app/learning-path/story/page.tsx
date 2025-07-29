"use client";
import React from "react";
import { motion } from "framer-motion";
import { QuizComponent } from "@/components/QuizComponent";
import { getProgress } from "@/lib/progress";
import { BiShield, BiBook, BiCog, BiBullseye } from "react-icons/bi";

const StoryPage = () => {
  const progress = getProgress();
  const storySection = progress.find((s) => s.id === "story");

  const features = [
    {
      icon: BiBook,
      title: "Historische Hintergründe",
      description:
        "Woher stammt die Enigma und welche Rolle spielte sie im Krieg und in der Kryptographie?",
    },
    {
      icon: BiCog,
      title: "Aufbau & Funktionsweise",
      description:
        "Wie arbeitete diese mechanische Maschine und warum galt sie als unknackbar?",
    },
    {
      icon: BiShield,
      title: "Nachrichtenaustausch",
      description:
        "Welche Verfahren nutzte man, um geheime Botschaften zu ver- und entschlüsseln?",
    },
    {
      icon: BiBullseye,
      title: "Angriffe & Codebreaking",
      description:
        "Wie gelang es schließlich, das scheinbar perfekte System zu überwinden?",
    },
  ];

  return (
    <div className="min-h-screen bg-[#101828] text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-[#145dfb] to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">🔐</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-[#145dfb] leading-tight">
              Willkommen zur Enigma-Experience
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Die Enigma-Maschine ist eines der faszinierendsten Geräte der
              Kryptographie-Geschichte. Sie steht für technische Innovation,
              geheime Kommunikation und den Wettlauf zwischen Verschlüsselung
              und Codebreaking.
            </p>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 text-left">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                In diesem Projekt bekommst du einen umfassenden Einblick in die
                Welt der Enigma: Wie sie aufgebaut war, wie Nachrichten
                verschlüsselt wurden und welche Methoden schließlich zu ihrem
                Fall führten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#145dfb]">
              📺 Die Enigma verstehen
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Schaue dir dieses Video an, um ein tieferes Verständnis für die
              Funktionsweise und historische Bedeutung der Enigma-Maschine zu
              entwickeln.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-2xl"
          >
            {/* Video Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/RzWB5jL5RX0?rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3"
                title="Enigma Machine Explained"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="mt-6 sm:mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-[#145dfb]/10 border border-[#145dfb]/30 rounded-full px-4 py-2 text-sm text-[#145dfb]">
                <span className="w-2 h-2 bg-[#145dfb] rounded-full animate-pulse"></span>
                <span>Empfohlenes Einführungsvideo</span>
              </div>
              <p className="text-sm text-gray-400 mt-3 max-w-2xl mx-auto">
                Dieses Video bietet eine hervorragende Einführung in die
                Enigma-Maschine und bereitet dich optimal auf die folgenden
                Lernabschnitte vor.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-[#145dfb]/30 to-transparent rounded-full blur-sm"></div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-sm"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#145dfb]">
              🌍 Was dich erwartet
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-[#145dfb]/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#145dfb] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#145dfb]">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
              👉 Diese interaktive App begleitet dich Schritt für Schritt durch
              diese Themen. Du lernst nicht nur die Technik und Geschichte
              kennen, sondern auch die Denkweisen hinter der Kryptanalyse, die
              moderne Informationssicherheit bis heute beeinflussen.
            </p>

            <div className="bg-gradient-to-r from-[#145dfb]/20 to-blue-600/20 backdrop-blur-sm border border-[#145dfb]/30 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-[#145dfb]">
                Bereit loszulegen?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Beantworte das Quiz unten, um den nächsten Abschnitt
                freizuschalten und deine Reise durch die Enigma-Zeitlinie
                fortzusetzen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {storySection && storySection.quiz && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <QuizComponent
                sectionId="story"
                questions={storySection.quiz}
                requiredScore={storySection.requiredScore || 80}
              />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
