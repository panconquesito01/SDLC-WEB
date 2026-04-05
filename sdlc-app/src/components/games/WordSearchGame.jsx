import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ArrowLeft, Trophy } from 'lucide-react';
import { cn } from '../../lib/utils';

const WORDS = ["DEVOPS", "CASCADA", "CODIGO", "AGILE", "PRUEBAS", "REQUISITO", "DISEÑO", "DESPLIEGUE"];
const GRID_SIZE = 14;

// Directions: [row_change, col_change]
const DIRS = [
  [0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]
];

function generateGrid(words, size) {
  const grid = Array.from({ length: size }, () => Array(size).fill(''));
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  words.forEach(word => {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 200) {
      attempts++;
      const dir = DIRS[Math.floor(Math.random() * DIRS.length)];
      const startR = Math.floor(Math.random() * size);
      const startC = Math.floor(Math.random() * size);
      
      let canPlace = true;
      for (let i = 0; i < word.length; i++) {
        const r = startR + (dir[0] * i);
        const c = startC + (dir[1] * i);
        
        if (r < 0 || r >= size || c < 0 || c >= size) {
          canPlace = false; break;
        }
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
          canPlace = false; break;
        }
      }
      
      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          grid[startR + (dir[0] * i)][startC + (dir[1] * i)] = word[i];
        }
        placed = true;
      }
    }
  });

  // Fill empty spaces
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
  return grid;
}

export function WordSearchGame({ onBack }) {
  const [gridData, setGridData] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  const initGame = useCallback(() => {
    setGridData(generateGrid(WORDS, GRID_SIZE));
    setSelectedCells([]);
    setFoundWords([]);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const isWordFound = () => {
    if (selectedCells.length < 2) return;
    
    // Sort selected cells by selection order
    const currentStr = selectedCells.map(c => c.letter).join('');
    const currentStrRev = selectedCells.map(c => c.letter).reverse().join('');
    
    let matchedWord = null;
    for (let word of WORDS) {
      if (!foundWords.includes(word)) {
        if (currentStr === word || currentStrRev === word) {
          matchedWord = word;
          break;
        }
      }
    }

    if (matchedWord) {
      setFoundWords([...foundWords, matchedWord]);
      setSelectedCells([]);
    } else if (selectedCells.length >= 10) {
       setSelectedCells([]);
    }
  };

  useEffect(() => {
    isWordFound();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCells]);

  const toggleCell = (r, c, letter) => {
    const existsIndex = selectedCells.findIndex(cell => cell.r === r && cell.c === c);
    if (existsIndex >= 0) {
      setSelectedCells(selectedCells.filter((_, i) => i !== existsIndex));
    } else {
      setSelectedCells([...selectedCells, { r, c, letter }]);
    }
  };

  const isSelected = (r, c) => selectedCells.some(cell => cell.r === r && cell.c === c);
  const gameWon = foundWords.length === WORDS.length;

  return (
    <div className="w-full">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5" /> Volver al Menú
      </button>

      <AnimatePresence mode="wait">
        {!gameWon ? (
          <motion.div key="word-search" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="glass-effect rounded-[3rem] p-8 lg:p-12 border border-white/5 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Sopa de Letras (Compleja)</h3>
              <button onClick={initGame} className="flex gap-2 items-center text-primary text-sm hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4" /> Generar Nuevo 
              </button>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
              {/* Dynamic Grid 14x14 */}
              <div className="inline-grid gap-1 p-4 bg-surface/50 rounded-2xl border border-white/10" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>
                {gridData.map((row, r) => (
                  row.map((letter, c) => (
                    <button
                      key={`${r}-${c}`}
                      onClick={() => toggleCell(r, c, letter)}
                      className={cn(
                        "w-7 h-7 md:w-9 md:h-9 rounded flex items-center justify-center font-bold text-xs md:text-sm border transition-colors",
                        isSelected(r, c) ? "bg-primary text-white border-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]" : "bg-transparent text-slate-300 border-white/5 hover:border-white/30"
                      )}
                    >
                      {letter}
                    </button>
                  ))
                ))}
              </div>

              {/* Words List */}
              <div className="bg-surface/30 p-6 rounded-2xl border border-white/5 w-full lg:w-64 shrink-0">
                <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2 flex justify-between">
                  <span>Encontradas:</span>
                  <span className="text-primary">{foundWords.length}/{WORDS.length}</span>
                </h4>
                <ul className="space-y-3">
                  {WORDS.map((word) => (
                    <li key={word} className={cn(
                      "font-mono text-sm font-bold uppercase transition-all tracking-widest",
                      foundWords.includes(word) ? "text-emerald-400 line-through decoration-emerald-400 opacity-50" : "text-slate-300"
                    )}>
                      {word}
                    </li>
                  ))}
                </ul>
                
                {selectedCells.length > 0 && (
                   <div className="mt-8 pt-4 border-t border-white/5 text-center">
                     <button onClick={() => setSelectedCells([])} className="text-xs text-red-400 hover:text-red-300 underline font-semibold">
                       Limpiar Letras Seleccionadas
                     </button>
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="word-search-win" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="glass-effect rounded-[3rem] p-12 lg:p-16 border border-white/10 text-center shadow-2xl">
            <Trophy className="w-24 h-24 mx-auto text-primary mb-8 drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]" />
            <h3 className="text-4xl font-bold text-white mb-4">¡Impresionante!</h3>
            <p className="text-xl text-slate-300 mb-8">Resolviste la cuadrícula compleja en tiempo récord.</p>
            <div className="flex justify-center gap-4">
               <button onClick={initGame} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-white hover:bg-white/10 border border-white/10 transition-all font-semibold">
                 <RefreshCw className="w-5 h-5" /> Nueva Cuadrícula
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
