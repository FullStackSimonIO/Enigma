"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { DesignHero } from "@/components/design/DesignHero";
import { ExplosionView } from "@/components/design/ExplosionView";
import { RotorNotchDisplay } from "@/components/design/RotorNotchDisplay";
import { CryptographyDescription } from "@/components/cryptography/CryptographyDescription";
import { AlgorithmVisualization } from "@/components/cryptography/AlgorithmVisualization";
import { InteractiveEncryption } from "@/components/cryptography/InteractiveEncryption";
import { getProgress } from "@/lib/progress";

const DesignPage = () => {
  const progress = getProgress();
  const designSection = progress.find((s) => s.id === "design");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Futuristic Hero Section */}
      <DesignHero
        title="Der Aufbau der Enigma"
        description="Beim Drücken einer Taste wird der elektrische Stromkreis zunächst durch das Steckerbrett geleitet, wo manuell gesteckte Kabelbuchsen eine erste Buchstabenvertauschung erzwingen (beispielsweise A → J). Das so transformierte Signal passiert anschließend die feststehende Eintrittswalze (ETW), die als Eingangstor zu den Rotoren dient. Nun durchläuft der Strom das eigentliche kryptographische Herzstück der Maschine – die Rotoren. Jeder dieser individuell verdrahteten Walzen besitzt 26 Kontakte und dreht sich nach jedem Tastenanschlag durch einen präzisen Mechanismus weiter: Eine mechanische Kerbe (Notch) löst dabei die Rotorvorrückung aus, sodass sich der nächste Rotor bewegt, sobald der vorherige eine bestimmte Position erreicht. Diese kontinuierliche Positionsänderung verändert den Verschlüsselungspfad für jeden Buchstaben dynamisch.

Nach Passieren der Rotoren trifft der Strom auf die Umkehrwalze (UKW), die ihn auf einem veränderten Pfad durch die Walzen zurückleitet. Dieser bidirektionale Stromfluss – Hinweg durch die Rotorenfolge, Rückweg in umgekehrter Reihenfolge – erklärt das fundamentale Prinzip, warum ein Buchstabe niemals auf sich selbst verschlüsselt werden kann: Der Rückweg folgt stets einem anderen Kontaktpfad als der Hinweg. Das rücklaufende Signal passiert erneut die Eintrittswalze und durchläuft abschließend ein zweites Mal das Steckerbrett, wo erneut eine Vertauschung stattfindet (beispielsweise G → S). Erst dann leuchtet die entsprechende Lampe im Lampenfeld auf."
      />

      {/* Explosion View - Signal Flow Visualization */}
      <ExplosionView />
      {/* Rotor and Notch Display */}
      <RotorNotchDisplay />

      {/* Cryptography Section */}
      <CryptographyDescription />
      <AlgorithmVisualization />
      <InteractiveEncryption />

      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Teste dein Wissen zu
              <span className="text-red-400"> Aufbau & Kryptographie</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Teste dein Verständnis der genialen Konstruktionsprinzipien und
              kryptographischen Algorithmen der Enigma-Maschine
            </p>
          </div>

          {designSection && designSection.quiz && (
            <QuizComponent
              sectionId="design"
              questions={designSection.quiz}
              requiredScore={80}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
