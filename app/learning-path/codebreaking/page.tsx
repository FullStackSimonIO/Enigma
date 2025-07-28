import { CodebreakingHero } from "@/components/codebreaking/CodebreakingHero";
import { KeyspaceCalculator } from "@/components/codebreaking/KeyspaceCalculator";
import { SpeedComparison } from "@/components/codebreaking/SpeedComparison";
import { BruteForceFormula } from "@/components/codebreaking/BruteForceFormula";
import { TacticsResume } from "@/components/codebreaking/TacticsResume";
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
        "Was war die effektivste Codeknacking-Methode in Bletchley Park?",
      options: [
        "Häufigkeitsanalyse",
        "Crib-basierte Angriffe mit der Bombe",
        "Reine mathematische Kryptoanalyse",
        "Abfangen deutscher Codebücher",
      ],
      correctAnswer: 1,
      explanation:
        "Crib-basierte Angriffe mit bekannten Klartextfragmenten (wie Wetterberichte) kombiniert mit der Bombe-Maschine waren am erfolgreichsten und knackten Codes typischerweise in 20 Minuten bis 2 Stunden.",
    },
    {
      id: "3",
      question:
        "Wie lange würden moderne Computer für einen Brute-Force-Angriff auf einen Enigma-Schlüssel benötigen?",
      options: [
        "Ein paar Tage",
        "Mehrere Monate",
        "Tausende von Jahren",
        "Millionen von Jahren",
      ],
      correctAnswer: 3,
      explanation:
        "Selbst mit modernen GPU-Clustern, die Milliarden von Schlüsseln pro Sekunde testen, würde das Brute-Force des vollständigen Enigma-Schlüsselraums aufgrund der astronomischen Anzahl von Möglichkeiten noch Millionen von Jahren dauern.",
    },
    {
      id: "4",
      question: "Was machte Bedienerfehler so wertvoll für Codeknacker?",
      options: [
        "Sie enthüllten die Rotor-Verdrahtung",
        "Sie lieferten bekannte Klartextfragmente",
        "Sie reduzierten den effektiven Schlüsselraum",
        "Sie legten die Steckerbrett-Einstellungen offen",
      ],
      correctAnswer: 2,
      explanation:
        "Bedienerfehler wie die Wiederverwendung von Einstellungen, schwache Nachrichtenschlüssel oder Verfahrensfehler reduzierten effektiv den Schlüsselraum, der durchsucht werden musste, was das Knacken viel schneller machte.",
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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
      <CodebreakingHero
        title="Knacken des Enigma-Codes"
        description="Das Knacken der Enigma zählt zu den größten Errungenschaften der Kryptographiegeschichte. Die enorme Komplexität der Maschine, die durch Millionen von Einstellungsmöglichkeiten praktisch unknackbar schien, stellte jahrzehntelang selbst erfahrene Kryptoanalytiker vor große Herausforderungen. Doch mit Beharrlichkeit, mathematischem Genie und technischer Innovation gelang es, diese scheinbar unüberwindbare Verschlüsselung zu brechen – zuerst mit klassischen Methoden, später mithilfe moderner Computer.

In den frühen Tagen des Zweiten Weltkriegs stützten sich die Codebreaker zunächst auf traditionelle Techniken: Sie sammelten und analysierten abgefangene Funksprüche, suchten nach wiederkehrenden Mustern und nutzten menschliche Fehler bei der Bedienung der Enigma aus. Polnische Mathematiker wie Marian Rejewski legten mit der Analyse der frühen Enigma-Modelle den Grundstein für den späteren Erfolg der Alliierten. Eine der wichtigsten Entwicklungen war die sogenannte „Bombe“, eine elektromechanische Maschine, die von Alan Turing und seinem Team in Bletchley Park weiterentwickelt wurde. Die Bombe automatisierte die Suche nach dem richtigen Enigma-Schlüssel und beschleunigte das Knacken der Codes entscheidend – eine detaillierte Beschreibung folgt später.

Heutzutage sind Enigma-Verschlüsselungen mit modernen Computern und Algorithmen vergleichsweise leicht zu knacken. Was früher Tage oder Wochen dauern konnte, ist nun oft eine Sache von Sekunden. Die enorme Rechenleistung ermöglicht es, alle möglichen Kombinationen systematisch zu überprüfen und so den Schlüssel zu finden.

Das Knacken der Enigma steht somit exemplarisch für den Fortschritt in der Kryptographie: von mühsamer Handarbeit über frühe Rechenmaschinen bis hin zu hochmodernen Computern, die selbst die komplexesten Codes entschlüsseln können.
"
      />
      <KeyspaceCalculator />
      <BruteForceFormula />
      <TacticsResume />
      <QuizComponent
        sectionId="codebreaking"
        questions={quizQuestions}
        requiredScore={80}
      />
    </main>
  );
}
