import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../components/layout/SectionContainer';
import { BrainCircuit, BookType, LayoutGrid, ChevronRight, Skull } from 'lucide-react';
import { QuizGame } from '../components/games/QuizGame';
import { MatchGame } from '../components/games/MatchGame';
import { WordSearchGame } from '../components/games/WordSearchGame';
import { HangmanGame } from '../components/games/HangmanGame';

const gamesList = [
  {
    id: 'quiz',
    name: 'Quiz de Ingeniería',
    desc: 'Pon a prueba tus fundamentos técnicos en 5 preguntas cruciales.',
    icon: BrainCircuit,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'group-hover:border-primary/50'
  },
  {
    id: 'match',
    name: 'Empareja Conceptos',
    desc: 'Relaciona cada término clave con su definición técnica exacta.',
    icon: LayoutGrid,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'group-hover:border-emerald-400/50'
  },
  {
    id: 'words',
    name: 'Sopa de Letras',
    desc: 'Cuadrícula compleja 14x14 autogenerada con conceptos ocultos.',
    icon: BookType,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'group-hover:border-secondary/50'
  },
  {
    id: 'hangman',
    name: 'Ahorcado SDLC',
    desc: 'Salva el proyecto adivinando la palabra secreta con pistas técnicas.',
    icon: Skull,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'group-hover:border-red-400/50'
  }
];

export function GamesPage() {
  const [activeGame, setActiveGame] = useState(null);

  const renderGame = () => {
    switch (activeGame) {
      case 'quiz': return <QuizGame onBack={() => setActiveGame(null)} />;
      case 'match': return <MatchGame onBack={() => setActiveGame(null)} />;
      case 'words': return <WordSearchGame onBack={() => setActiveGame(null)} />;
      case 'hangman': return <HangmanGame onBack={() => setActiveGame(null)} />;
      default: return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-24 min-h-screen pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none" style={{ animationDelay: '2s' }} />

      <SectionContainer id="games-hub" className="bg-transparent">
        <SectionHeader title="Zona Interactiva" subtitle={activeGame ? "Jugando..." : "Selecciona un Juego"} />
        
        <div className="max-w-4xl mx-auto mt-8">
          <AnimatePresence mode="wait">
            {!activeGame ? (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {gamesList.map((game) => {
                  const Icon = game.icon;
                  return (
                    <button
                      key={game.id}
                      onClick={() => setActiveGame(game.id)}
                      className={`group p-8 rounded-3xl glass-effect border border-white/5 transition-all hover:-translate-y-2 text-left ${game.border} relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors pointer-events-none" />
                      
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${game.bg}`}>
                        <Icon className={`w-7 h-7 ${game.color}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{game.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{game.desc}</p>
                      
                      <div className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors mt-auto">
                        Jugar Ahora <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="game-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-center"
              >
                {renderGame()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionContainer>
    </motion.div>
  );
}
