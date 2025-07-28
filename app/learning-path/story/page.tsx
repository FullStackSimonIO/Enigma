"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { getProgress } from "@/lib/progress";

const StoryPage = () => {
  const progress = getProgress();
  const storySection = progress.find((s) => s.id === "story");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">
          🔐 Willkommen zur Enigma-Experience
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-4">
            Die Enigma-Maschine ist eines der faszinierendsten Geräte der
            Kryptographie-Geschichte. Sie steht für technische Innovation,
            geheime Kommunikation und den Wettlauf zwischen Verschlüsselung und
            Codebreaking. In diesem Projekt bekommst du einen Einblick in die
            Welt der Enigma: Wie sie aufgebaut war, wie Nachrichten
            verschlüsselt wurden und welche Methoden schließlich zu ihrem Fall
            führten.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              🌍 Was dich erwartet:
            </h2>
            <ul className="space-y-2">
              <li>
                • Historische Hintergründe: Woher stammt die Enigma und welche
                Rolle spielte sie im Krieg und in der Kryptographie?
              </li>
              <li>
                • Aufbau & Funktionsweise: Wie arbeitete diese mechanische
                Maschine und warum galt sie als unknackbar?
              </li>
              <li>
                • Nachrichtenaustausch: Welche Verfahren nutzte man, um geheime
                Botschaften zu ver- und entschlüsseln?
              </li>
              <li>
                • Angriffe & Codebreaking: Wie gelang es schließlich, das
                scheinbar perfekte System zu überwinden?
              </li>
            </ul>
          </div>

          <p className="text-lg mb-4">
            👉 Diese interaktive App begleitet dich Schritt für Schritt durch
            diese Themen. Du lernst nicht nur die Technik und Geschichte kennen,
            sondern auch die Denkweisen hinter der Kryptanalyse, die moderne
            Informationssicherheit bis heute beeinflussen.
          </p>

          <div className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3 text-red-300">
              Bereit loszulegen?
            </h3>
            <p>
              Beantworte das Quiz unten, um den nächsten Abschnitt
              freizuschalten und deine Reise durch die Enigma-Zeitlinie
              fortzusetzen.
            </p>
          </div>
        </div>

        {/* Quiz Section */}
        {storySection && storySection.quiz && (
          <QuizComponent
            sectionId="story"
            questions={storySection.quiz}
            requiredScore={storySection.requiredScore || 80}
          />
        )}
      </div>
    </div>
  );
};

export default StoryPage;
