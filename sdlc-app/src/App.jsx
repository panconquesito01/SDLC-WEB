import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/sections/SourcesSection';
import { HomePage } from './pages/HomePage';
import { ConceptPage } from './pages/ConceptPage';
import { PhasesPage } from './pages/PhasesPage';
import { ModelsPage } from './pages/ModelsPage';
import { DevOpsPage } from './pages/DevOpsPage';
import { ExamplePage } from './pages/ExamplePage';
import { AuthorsPage } from './pages/AuthorsPage';
import { GamesPage } from './pages/GamesPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/concepto" element={<ConceptPage />} />
        <Route path="/fases" element={<PhasesPage />} />
        <Route path="/modelos" element={<ModelsPage />} />
        <Route path="/devops" element={<DevOpsPage />} />
        <Route path="/ejemplo" element={<ExamplePage />} />
        <Route path="/juegos" element={<GamesPage />} />
        <Route path="/autores" element={<AuthorsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
