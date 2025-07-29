"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

export const TuringBombExplanation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#101828]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Die <span className="text-[#145dfb]">Turing-Bombe</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div
              className={`text-gray-300 text-justify leading-relaxed transition-all duration-300 ${
                isExpanded ? "" : "line-clamp-3"
              }`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "none" : "3",
                WebkitBoxOrient: "vertical",
                overflow: isExpanded ? "visible" : "hidden",
              }}
            >
              <p className="mb-4">
                Die Turing-Bombe zielte darauf ab, mittels der
                Known-Plaintext-Attacke die tagesaktuellen Steckerverbindungen
                herauszufinden. Hierfür wird beispielsweise angenommen, dass das
                Wort &quot;WETTERBERICHT&quot; dem Chiffretext
                &quot;ATQBGGYWCRYBG&quot; zugeordnet wurde. Betrachten wir die
                zweite Stelle des Chiffretextes &quot;T&quot;. Dies wird in die
                Enigma eingegeben und zu &quot;E&quot; entschlüsselt. Nun muss
                eine zweite Vermutung angestellt werden. Nehmen wir an, am
                Steckerbrett sind &quot;T&quot; und &quot;A&quot; verbunden. Wir
                verwenden nun die mittels N-Grammen und IC ermittelte
                wahrscheinlichste Walzenstellung.
              </p>

              <p className="mb-4">
                Wenn also die Taste &quot;T&quot; gedrückt wird, wird der
                Buchstabe &quot;A&quot; an die Walzen gesendet. Da bekannt ist,
                wie die einzelnen Walzen verdrahtet sind, ist auch bekannt,
                welcher Buchstabe nach der Verschlüsselung durch die Walzen
                herauskommt. Bei &quot;A&quot; erhalten wir beispielsweise
                &quot;P&quot;. Da wir aber festgelegt haben, dass als Ergebnis
                der Entschlüsselung &quot;E&quot; herauskommen soll, besteht die
                Wahrscheinlichkeit, dass &quot;P&quot; und &quot;E&quot; am
                Steckerbrett miteinander verbunden sind.
              </p>

              <p className="mb-4">
                Nun betrachten wir weitere Stellen des Chiffretextes, an denen
                der Buchstabe &quot;T&quot; ver- bzw. entschlüsselt wird, und
                wiederholen dieses Verfahren. Hierbei wird immer angenommen,
                dass &quot;T&quot; mit &quot;A&quot; verbunden ist.
              </p>

              <div className="bg-gray-800/50 rounded-lg p-4 mb-4 font-mono text-sm">
                <div className="text-cyan-400 mb-2">Beispiel-Analyse:</div>
                <div className="space-y-1 text-gray-300">
                  <div>WETTERBERICHT → ATQBGGYWCRYBG (Steckerbrett: P - E)</div>
                  <div>WETTERBERICHT → ATQBGGYWCRYBG (Steckerbrett: Q - K)</div>
                  <div>WETTERBERICHT → ATQBGGYWCRYBG (Steckerbrett: X - B)</div>
                  <div className="text-red-400">
                    WETTERBERICHT → ATQBGGYWCRYBG (Steckerbrett: T - G)
                  </div>
                </div>
              </div>

              <p className="mb-4">
                Die letzte Zeile stellt jedoch ein Problem dar, da wir
                ursprünglich angenommen hatten, dass &quot;T&quot; mit
                &quot;A&quot; verbunden ist. Daraus folgt, dass &quot;T&quot;
                unmöglich mit &quot;A&quot; verbunden sein kann, da dies
                bedeuten würde, dass &quot;T&quot; gleichzeitig mit
                &quot;G&quot; verbunden ist.
              </p>

              <p className="mb-4">
                Anschließend wird das Verfahren mit &quot;T&quot; und
                &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, usw. wiederholt.
                Sollten alle Buchstaben von &quot;A&quot; bis &quot;Z&quot;
                unmöglich sein, so ist die Position der Walzen falsch. In diesem
                Fall wird die nächstwahrscheinlichste Walzenstellung gewählt,
                und das Verfahren wird wiederholt.
              </p>

              <p className="mb-4">
                Um den Rechenaufwand erheblich zu verkürzen, benutzte Turing
                zwei Tricks. Der erste Trick ist mathematischer Natur. Da
                bewiesen wurde, dass die Verbindung zwischen &quot;T&quot; und
                &quot;A&quot; ausgeschlossen ist, folgt daraus auch, dass
                Verbindungen wie &quot;P&quot; mit &quot;E&quot;, &quot;Q&quot;
                mit &quot;K&quot;, &quot;X&quot; mit &quot;B&quot; und
                &quot;T&quot; mit &quot;G&quot; unzulässig sind. Der zweite
                Trick lag in der Bauweise der Bombe. Hierbei wurden nicht
                jeweils die resultierenden Steckerverbindungen von &quot;T&quot;
                mit &quot;A&quot; berechnet, sondern alle resultierenden
                Verbindungen gleichzeitig.
              </p>

              <p className="mb-4">
                Schlussendlich erhält man durch die Turing-Bombe nicht die eine
                richtige Steckerverbindung, sondern eine Menge verschiedener
                Steckerverbindungen für die wahrscheinlichsten Walzenstellungen.
                Diese müssen letztendlich per Hand auf ihre Gültigkeit überprüft
                werden. Im Verlauf des Zweiten Weltkriegs wurden über 200
                Turing-Bomben gebaut. Dies führte dazu, dass die täglichen
                Enigma-Einstellungen innerhalb von 25 Minuten geknackt werden
                konnten.
              </p>
            </div>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 text-[#145dfb] hover:text-blue-300 font-medium flex items-center space-x-2 transition-colors duration-200 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isExpanded ? "Weniger anzeigen" : "Mehr lesen"}</span>
              <BiChevronDown
                className={`transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
