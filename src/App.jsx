import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './Hero';
import Resume from './components/Resume';
import Learning from './components/Learning';
import CoffeeSocial from './components/CoffeeSocial';

function App() {
  return (
    <Router>
      <div className="font-serif text-center">
        {/* Navigation Tabs */}
        <nav className="bg-white shadow-md py-4">
          <ul className="flex justify-center gap-8 text-lg text-teal-700">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/learning">Learning</Link></li>
            <li><Link to="/coffee">Coffee Social</Link></li>
          </ul>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/coffee" element={<CoffeeSocial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
