import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavCompo from './Component/NavCompo';
import MainCompo from './Component/MainCompo';
import Redirection from './Component/Redirection';
import Footer from './Component/Footer';
import CheckReview from './Component/CheckReview';
import Commingsoon from './Component/Commingsoon';
import './App.css';

function App() {
  return (
    <Router>
      <NavCompo />
      <Routes>
        <Route path="/" element={<MainCompo />} />
        <Route path="/submitted" element={<Redirection />} />
        <Route path="/check-reviews" element={<CheckReview />} />
        <Route path="/coming-soon" element={<Commingsoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
