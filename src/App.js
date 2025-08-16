import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BirthdayCard from './componentes/BirthdayCard';
import Regalo from './Regalo'; // 👈 crea este componente

function App() {
  const navigate = useNavigate();

  const handleSorpresa = () => {
    navigate('/regalo');
  };

  return (
    <Routes>
      <Route path="/" element={<BirthdayCard onSorpresaClick={handleSorpresa} />} />
      <Route path="/regalo" element={<Regalo />} />
    </Routes>
  );
}

export default App;
