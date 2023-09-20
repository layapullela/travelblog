import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ZionPage from './components/zion';  // Import the ResumePage component
import BrycePage from './components/bryce';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zion" element={<ZionPage />} /> {/* Make sure this line is here */}
        <Route path="/bryce" element={<BrycePage />} />
        {/* Add more Routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

