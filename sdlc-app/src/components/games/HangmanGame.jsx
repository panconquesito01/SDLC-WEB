import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ArrowLeft, HeartPulse, Skull } from 'lucide-react';
import { cn } from '../../lib/utils';

const wordList = [
  { word: "CASCADA", hint: "Modelo secuencial estricto." },
  { word: "AGILE", hint: "Modelo iterativo e incremental." },
  { word: "PRUEBAS", hint: "Fase para detectar bugs." },
  { word: "REQUISITOS", hint: "Fase de análisis y contrato con cliente." },
  { word: "DESPLIEGUE", hint: "Llevar el código a producción." },
  { word: "SCRUM", hint: "Framework popular dentro de Agile." },
  { word: "DEVOPS", hint: "Une desarrollo y operaciones." },
  { word: "CALIDAD", hint: "El QA se asegura de la ___." }
];

const MAX_MISTAKES = 6;
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('');

export function HangmanGame({ onBack }) {
  const [targetWord, setTargetWord] = useState('');
  const [hint, setHint] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  const initGame = useCallback(() => {
    const randomObj = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(randomObj.word);
    setHint(randomObj.hint);
    setGuessedLetters([]);
    setMistakes(0);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const guess = (letter) => {
    if (guessedLetters.includes(letter) || mistakes >= MAX_MISTAKES || gameWon) return;
    
    setGuessedLetters([...guessedLetters, letter]);
    if (!targetWord.includes(letter)) {
      setMistakes(mistakes + 1);
    }
  };

  const gameWon = targetWord.length > 0 && targetWord.split('').every(l => guessedLetters.includes(l));
  const gameOver = mistakes >= MAX_MISTAKES;

  // Simple ASCII/SVG representation of hangman states can be abstracted with lives
  return (
    <div className="w-full">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5" /> Volver al Menú
      </button>

      <AnimatePresence mode="wait">
        {!gameWon && !gameOver ? (
          <motion.div key="hangman" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="glass-effect rounded-[3rem] p-8 lg:p-12 border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Ahorcado SDLC</h3>
              <div className="flex gap-2 text-red-400 font-bold items-center">
                <HeartPulse className="w-5 h-5" /> Vidas: {MAX_MISTAKES - mistakes}
              </div>
            </div>

            <div className="text-center py-6">
               <p className="text-secondary/80 text-sm font-bold uppercase tracking-widest mb-8">Pista: {hint}</p>
               
               <div className="flex flex-wrap justify-center gap-3 mb-16">
                 {targetWord.split('').map((letter, idx) => (
                   <span key={idx} className="w-12 h-14 md:w-16 md:h-16 flex items-center justify-center text-3xl font-black text-white border-b-4 border-slate-600 bg-surface/30 rounded-t-xl">
                     {guessedLetters.includes(letter) ? letter : ''}
                   </span>
                 ))}
               </div>

               <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                 {ALPHABET.map((l) => {
                   const isGuessed = guessedLetters.includes(l);
                   const isCorrect = isGuessed && targetWord.includes(l);
                   const isWrong = isGuessed && !targetWord.includes(l);

                   return (
                     <button
                       key={l}
                       disabled={isGuessed}
                       onClick={() => guess(l)}
                       className={cn(
                         "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-lg border transition-all",
                         isCorrect ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" :
                         isWrong ? "bg-red-500/10 border-red-500/30 text-red-500/50" :
                         "bg-surface border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/30"
                       )}
                     >
                       {l}
                     </button>
                   );
                 })}
               </div>
            </div>
          </motion.div>
        ) : gameWon ? (
          <motion.div key="hangman-win" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="glass-effect rounded-[3rem] p-12 lg:p-16 border border-emerald-500/30 text-center shadow-2xl">
             <HeartPulse className="w-24 h-24 mx-auto text-emerald-400 mb-8 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
             <h3 className="text-4xl font-bold text-white mb-4">¡Superviviente!</h3>
             <p className="text-xl text-slate-300 mb-8">La palabra era: <strong className="text-emerald-400 text-3xl ml-2">{targetWord}</strong></p>
             <div className="flex justify-center gap-4">
               <button onClick={initGame} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-white hover:bg-white/10 border border-white/10 transition-all font-semibold">
                 <RefreshCw className="w-5 h-5" /> Nueva Palabra
               </button>
             </div>
          </motion.div>
        ) : (
          <motion.div key="hangman-lose" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="glass-effect rounded-[3rem] p-12 lg:p-16 border border-red-500/30 text-center shadow-2xl">
             <Skull className="w-24 h-24 mx-auto text-red-500 mb-8 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
             <h3 className="text-4xl font-bold text-white mb-4">¡Ahorcado!</h3>
             <p className="text-xl text-slate-300 mb-8">La palabra correcta era: <strong className="text-red-400 text-3xl ml-2">{targetWord}</strong></p>
             <div className="flex justify-center gap-4">
               <button onClick={initGame} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-white hover:bg-white/10 border border-white/10 transition-all font-semibold">
                 <RefreshCw className="w-5 h-5" /> Reintentar
               </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
