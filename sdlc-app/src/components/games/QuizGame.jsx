import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Trophy, RefreshCw, BrainCircuit, ArrowLeft } from 'lucide-react';
import { cn } from '../../lib/utils';

export const questions = [
  { text: "¿Cuál es el principal objetivo del Modelo DevSecOps?", options: ["Retrasar pruebas de seguridad", "Shift-Left (Seguridad Temprana)", "Eliminar QA"], correct: 1 },
  { text: "En el Modelo Cascada, un error hallado en producción es...", options: ["Económicamente desastroso", "Barato de corregir", "Parte del diseño"], correct: 0 },
  { text: "¿Cuál es el entregable inamovible de la Fase de Análisis?", options: ["Código fuente", "Documento de Diseño", "Software Requirement Specification (SRS)"], correct: 2 },
  { text: "El término 'CI/CD' significa:", options: ["Continuous Integration / Deployment", "Cyber Incident / Detection", "Custom Interface / Design"], correct: 0 },
  { text: "¿Qué Modelo es mejor para Software Avanzado de alto riesgo (Ej. Nuclear)?", options: ["Modelo V (Testeo Paralelo)", "Modelo Ágil", "RAD (Desarrollo Rápido)"], correct: 0 }
];

export function QuizGame({ onBack }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === questions[currentQ].correct) setScore(score + 1);
    
    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="w-full">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5" /> Volver al Menú
      </button>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-effect rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-primary" />
                <span className="text-white font-bold text-lg tracking-wide uppercase">Quiz Técnico</span>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-surface text-primary font-bold text-sm border border-white/5">
                Pregunta {currentQ + 1} / {questions.length}
              </span>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{questions[currentQ].text}</h3>
            </div>

            <div className="space-y-4">
              {questions[currentQ].options.map((option, idx) => {
                let btnClass = "bg-surface/50 border-white/10 hover:border-primary/50 hover:bg-white/5 text-slate-300";
                let icon = null;
                if (selectedAnswer !== null) {
                  if (idx === questions[currentQ].correct) {
                    btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
                    icon = <CheckCircle2 className="w-6 h-6 shrink-0" />;
                  } else if (idx === selectedAnswer) {
                    btnClass = "bg-red-500/20 border-red-500 text-red-300";
                    icon = <XCircle className="w-6 h-6 shrink-0" />;
                  } else {
                    btnClass = "bg-surface/20 border-white/5 text-slate-500 opacity-50";
                  }
                }
                return (
                  <button key={idx} disabled={selectedAnswer !== null} onClick={() => handleAnswer(idx)} className={cn("w-full p-6 flex items-center justify-between gap-4 rounded-2xl border-2 transition-all font-medium text-left text-lg group", btnClass)}>
                    <span>{option}</span>
                    {icon && <span>{icon}</span>}
                  </button>
                )
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-effect rounded-[3rem] p-12 lg:p-16 border border-white/10 text-center shadow-2xl relative">
            <Trophy className="w-24 h-24 mx-auto text-yellow-400 mb-8 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]" />
            <h3 className="text-4xl font-bold text-white mb-4">¡Completado!</h3>
            <p className="text-xl text-slate-300 mb-8">Puntaje Final: <span className="text-primary font-black text-3xl mx-2">{score}</span> / {questions.length}</p>
            <div className="flex justify-center gap-4">
               <button onClick={resetQuiz} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-white hover:bg-white/10 border border-white/10 transition-all font-semibold">
                 <RefreshCw className="w-5 h-5" /> Reintentar
               </button>
               <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all font-semibold shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                 Regresar al Menú
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
