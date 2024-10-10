import { Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Details from './features/details/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
