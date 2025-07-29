"use client";
import { CodebreakingHero } from "@/components/codebreaking/CodebreakingHero";
import { KeyspaceCalculator } from "@/components/codebreaking/KeyspaceCalculator";
import { BruteForceFormula } from "@/components/codebreaking/BruteForceFormula";
import { TacticsResume } from "@/components/codebreaking/TacticsResume";
import { TuringBombExplanation } from "@/components/codebreaking/TuringBombExplanation";
import { GitHubDownload } from "@/components/codebreaking/GitHubDownload";
import { QuizComponent } from "@/components/QuizComponent";

export default function CodebreakingPage() {
  const quizQuestions = [
    {
      id: "1",
      question:
        "Was war der Hauptgrund, warum Brute-Force-Angriffe gegen Enigma scheiterten?",
      options: [
        "Unzureichende Rechenleistung in den 1940er Jahren",
        "Der mathematische Schlüsselraum war zu groß",
        "Tägliche Schlüsseländerungen machten es unpraktikabel",
        "Alle der oben genannten",
      ],
      correctAnswer: 3,
      explanation:
        "Alle Faktoren trugen bei: 1,59×10²³ mögliche Schlüssel, begrenzte 1940er-Technologie und tägliche Schlüsseländerungen erforderten Lösungen innerhalb von 24 Stunden, was Brute-Force unmöglich machte.",
    },
    {
      id: "2",
      question:
        "Wie lange braucht ein moderner Computer um die Enigma mittels Brute-Force zu knacken?",
      options: ["Eine Million Jahre", "2500 Jahre", "40 Sekunden", "2 Tage"],
      correctAnswer: 1,
      explanation:
        "Das Knacken der Enigma dauerte mit modernen Methoden in etwa 2500 Jahre.",
    },
    {
      id: "3",
      question:
        "Auf welche Grundlage basiert die Turing-Bombe zur Enigma-Knackung?",
      options: [
        "N-Gramme",
        "Index of Coincidence",
        "Known Plaintext Attacks",
        "Alle der oben genannten",
      ],
      correctAnswer: 3,
      explanation:
        "Die Turing-Bombe nutzte bekannte Klartextfragmente (Cribs) und mathematische Muster (wie N-Gramme) zur effizienten Suche nach Enigma-Schlüsseln, indem sie die Rotor-Einstellungen automatisierte.",
    },
    {
      id: "4",
      question: "Was der genannten Optionen ist ein N-Gramm?",
      options: [
        "Reiberknödel (das ö)",
        "Flaschenhals (das große F)",
        "Suppe (das doppel-P)",
        "Schließlich (das sch)",
      ],
      correctAnswer: 3,
      explanation:
        "N-Gramme sind wiederkehrende Buchstabenkombinationen, die in der Enigma-Kryptographie verwendet werden, um Muster zu erkennen und Angriffe zu erleichtern.",
    },
    {
      id: "5",
      question:
        "Warum war das Steckerbrett der komplexeste Teil der Enigma zum Knacken?",
      options: [
        "Es hatte die meisten möglichen Konfigurationen",
        "Es veränderte die Rotor-Schaltung",
        "Es wurde anders verschlüsselt",
        "Es erforderte physischen Zugang",
      ],
      correctAnswer: 0,
      explanation:
        "Das Steckerbrett mit 10 Paaren hatte etwa 150 Billionen mögliche Konfigurationen, weit mehr als Rotorpositionen (17.576) oder Auswahlen (60), was es zur größten Komponente des Schlüsselraums machte.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#101828]">
      <CodebreakingHero
        title="Knacken des Enigma-Codes"
        description="Das Knacken der Enigma zählt zu den größten Errungenschaften der Kryptographiegeschichte.

Die enorme Komplexität der Maschine stellte jahrzehntelang selbst erfahrene Kryptoanalytiker vor große Herausforderungen. Doch mit Beharrlichkeit, mathematischem Genie und technischer Innovation gelang es, diese scheinbar unüberwindbare Verschlüsselung zu brechen.

In den frühen Tagen des Zweiten Weltkriegs stützten sich die Codebreaker auf traditionelle Techniken: Sie analysierten abgefangene Funksprüche, suchten nach wiederkehrenden Mustern und nutzten menschliche Fehler aus.

Eine der wichtigsten Entwicklungen war die sogenannte 'Bombe' - eine elektromechanische Maschine von Alan Turing und seinem Team in Bletchley Park. Die Bombe automatisierte die Suche nach dem richtigen Enigma-Schlüssel.

Heutzutage sind Enigma-Verschlüsselungen mit modernen Computern vergleichsweise leicht zu knacken. Was früher Tage oder Wochen dauerte, ist nun oft eine Sache von Sekunden."
      />

      <BruteForceFormula />
      <TacticsResume />
      <TuringBombExplanation />
      <GitHubDownload
        repoUrl="https://github.com/Petitoto/Enigma-Cracker"
        repoName="Enigma Cracker"
        description="Dieses Python-Script implementiert verschiedene Angriffsmethoden gegen die Enigma-Maschine. Von Brute-Force-Ansätzen bis hin zu ausgeklügelten Crib-basierten Attacken - erlebe selbst, wie die Codebreaker von Bletchley Park die 'unknackbare' Verschlüsselung überwunden haben."
        fileName="enigma_cracker.py"
      />
      <QuizComponent
        sectionId="codebreaking"
        questions={quizQuestions}
        requiredScore={80}
      />
    </main>
  );
}
