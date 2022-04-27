import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Random from './pages/Random';
import About from './pages/About';
import { InfonimeProvider } from './context/InfonimeContext';

function App() {
  return (
    <InfonimeProvider>
      <Router>
        <div>
          <Navbar />
          <main className="container mx-auto text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/random" element={<Random />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </InfonimeProvider>
  );
}

export default App;
