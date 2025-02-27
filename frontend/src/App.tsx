import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import RequestHelp from './pages/RequestHelp';
import Footer from './components/Footer';
import VolunteerRegistration from './components/VolunteerRegistration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/volunteer-registration" element={<VolunteerRegistration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;