"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { CryptographyHero } from "@/components/cryptography/CryptographyHero";
import { CryptographyDescription } from "@/components/cryptography/CryptographyDescription";
import { AlgorithmVisualization } from "@/components/cryptography/AlgorithmVisualization";
import { InteractiveEncryption } from "@/components/cryptography/InteractiveEncryption";
import { getProgress } from "@/lib/progress";

const CryptographyPage = () => {
  const progress = getProgress();
  const cryptographySection = progress.find((s) => s.id === "cryptography");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Hero Section */}
      <CryptographyHero
        title="Kryptographie"
        description="Die Enigma-Maschine gilt als eines der komplexesten kryptographischen Geräte ihrer Zeit. Ihre enorme Sicherheit basierte auf einer Kombination mehrerer mathematischer und elektromechanischer Prinzipien, die zusammen unglaubliche Mengen an möglichen Schlüsseln erzeugten.

Zentrales Element waren die drei Rotoren: Jeder Rotor hatte 26 unterschiedliche Positionen (Buchstaben A bis Z). Da die Enigma drei Rotoren gleichzeitig verwendete, ergaben sich allein daraus 26³, also 17.576 mögliche Rotorstellungen. Doch das war erst der Anfang.

Zusätzlich zum Rotorprinzip nutzte die Enigma ein sogenanntes Steckerbrett, auf dem 10 Kabelpaare gesteckt wurden, um Buchstabenpaare zu vertauschen. Diese Steckerbrett-Einstellungen ergaben ungefähr 100 Milliarden (10¹⁰) zusätzliche Kombinationen. Diese enorme Zahl sorgte dafür, dass die Enigma selbst für die damaligen besten Kryptographen nahezu unlösbar schien.

Alle Einstellungen zusammengenommen – Rotorpositionen, Walzenwahl und Steckerbrett-Kombinationen – ergaben insgesamt etwa 150 Billionen (150T) unterschiedliche Verschlüsselungsmöglichkeiten. Diese beeindruckende Zahl garantierte, dass ohne exakte Kenntnis der täglichen Einstellungen, der sogenannten „Tagesschlüssel“, Nachrichten praktisch nicht entschlüsselt werden konnten.

Dennoch nutzten Codebreaker wie Alan Turing und sein Team Schwachstellen und Muster der Enigma aus, um die riesige Menge möglicher Schlüssel systematisch zu reduzieren. Sie entwickelten spezielle Maschinen (die berühmte „Bombe“), die automatisiert Kombinationen testeten.

Die Enigma verdeutlicht damit eindrucksvoll, wie entscheidend die Kombination aus Mathematik, Technik und menschlicher Intuition für die Kryptographie ist – und wie selbst astronomisch große Zahlen nicht garantieren, dass ein System vollkommen sicher ist."
      />

      {/* Description Section */}
      <CryptographyDescription />

      {/* Algorithm Visualization */}
      <AlgorithmVisualization />
      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meistere die Fragen zur{" "}
              <span className="text-purple-400">Kryptographie</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Teste dein Verständnis der Verschlüsselungsalgorithmen und
              mathematischen Prinzipien von Enigma
            </p>
          </div>

          {cryptographySection && cryptographySection.quiz && (
            <QuizComponent
              sectionId="cryptography"
              questions={cryptographySection.quiz}
              requiredScore={cryptographySection.requiredScore || 80}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CryptographyPage;
