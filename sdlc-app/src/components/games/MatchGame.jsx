import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ArrowLeft, Check, Trophy } from 'lucide-react';
import { cn } from '../../lib/utils';

const originalPairs = [
  { id: 1, term: "SRS", desc: "Software Requirement Specification" },
  { id: 2, term: "DevSecOps", desc: "Seguridad integrada tempranamente (Shift-Left)" },
  { id: 3, term: "Modelo en Cascada", desc: "Lineal, estricto y difícil de retroceder" },
  { id: 4, term: "Modelo Ágil", desc: "Basado en Sprints iterativos y mucha adaptabilidad" },
  { id: 5, term: "CI/CD", desc: "Integración y Entrega Continua automatizada" }
];

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function MatchGame({ onBack }) {
  const [terms, setTerms] = useState([]);
  const [defs, setDefs] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedDef, setSelectedDef] = useState(null);
  const [matched, setMatched] = useState([]);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setTerms(shuffleArray([...originalPairs]));
    setDefs(shuffleArray([...originalPairs]));
    setMatched([]);
    setSelectedTerm(null);
    setSelectedDef(null);
  };

  const handleTermClick = (item) => {
    if (matched.includes(item.id) || selectedTerm?.id === item.id) return;
    setSelectedTerm(item);
    checkMatch(item, selectedDef);
  };

  const handleDefClick = (item) => {
    if (matched.includes(item.id) || selectedDef?.id === item.id) return;
    setSelectedDef(item);
    checkMatch(selectedTerm, item);
  };

  const checkMatch = (term, def) => {
    if (term && def) {
      if (term.id === def.id) {
        // Matched
        setTimeout(() => {
          setMatched([...matched, term.id]);
          setSelectedTerm(null);
          setSelectedDef(null);
        }, 500);
      } else {
        // Wrong match
        setIsWrong(true);
        setTimeout(() => {
          setSelectedTerm(null);
          setSelectedDef(null);
          setIsWrong(false);
        }, 800);
      }
    }
  };

  const gameWon = matched.length === originalPairs.length;

  return (
    <div className="w-full">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5" /> Volver al Menú
      </button>

      <AnimatePresence mode="wait">
        {!gameWon ? (
          <motion.div key="match-board" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="glass-effect rounded-[3rem] p-8 lg:p-12 border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-wide">Empareja el Concepto</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Terms Column */}
              <div className="space-y-4">
                <h4 className="text-primary font-semibold mb-4 text-center">Términos Clave</h4>
                {terms.map((item) => {
                  const isMatched = matched.includes(item.id);
                  const isSelected = selectedTerm?.id === item.id;
                  
                  return (
                    <motion.button
                      key={`term-${item.id}`}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isMatched ? 0.3 : 1, scale: isSelected ? 1.05 : 1 }}
                      disabled={isMatched}
                      onClick={() => handleTermClick(item)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 transition-all font-bold",
                        isSelected 
                          ? isWrong ? "bg-red-500/20 border-red-500 text-red-300" : "bg-primary/20 border-primary text-white" 
                          : isMatched ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 line-through" : "bg-surface/50 border-white/10 text-slate-300 hover:border-white/30"
                      )}
                    >
                      {item.term}
                    </motion.button>
                  );
                })}
              </div>

              {/* Definitions Column */}
              <div className="space-y-4">
                <h4 className="text-secondary font-semibold mb-4 text-center">Definiciones</h4>
                {defs.map((item) => {
                  const isMatched = matched.includes(item.id);
                  const isSelected = selectedDef?.id === item.id;

                  return (
                    <motion.button
                      key={`def-${item.id}`}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isMatched ? 0.3 : 1, scale: isSelected ? 1.05 : 1 }}
                      disabled={isMatched}
                      onClick={() => handleDefClick(item)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 transition-all text-sm",
                        isSelected 
                          ? isWrong ? "bg-red-500/20 border-red-500 text-red-300" : "bg-secondary/20 border-secondary text-white" 
                          : isMatched ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 line-through" : "bg-surface/50 border-white/10 text-slate-400 hover:border-white/30"
                      )}
                    >
                      {item.desc}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="match-win" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="glass-effect rounded-[3rem] p-12 lg:p-16 border border-white/10 text-center shadow-2xl">
            <Trophy className="w-24 h-24 mx-auto text-emerald-400 mb-8 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
            <h3 className="text-4xl font-bold text-white mb-4">¡Memoria Perfecta!</h3>
            <p className="text-xl text-slate-300 mb-8">Has dominado el vocabulario esencial del SDLC.</p>
            <div className="flex justify-center gap-4">
               <button onClick={initGame} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-white hover:bg-white/10 border border-white/10 transition-all font-semibold">
                 <RefreshCw className="w-5 h-5" /> Jugar de Nuevo
               </button>
               <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all font-semibold">
                 Regresar al Menú
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
