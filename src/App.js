import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BirthdayCard from './componentes/BirthdayCard';

function App() {
  const navigate = useNavigate();

  const handleSorpresa = () => {
    navigate('/regalo'); // SPA: navegación sin recargar la página
  }

  return (
    <Routes>
      <Route path="/" element={<BirthdayCard onSorpresaClick={handleSorpresa} />} />
    </Routes>
  );
}

export default App;
