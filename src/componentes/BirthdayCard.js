import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BirthdayCard.css'; // Tu CSS que has compartido

const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate(); 

  const handleSorpresa = () => {
    setShowMessage(true);
    // Redirigir después de 2 segundos
    setTimeout(() => {
      navigate('/regalo');
    }, 2000);
  };

  return (
    <div className="card">
      <h1>🎉Feliz Cumpleaños Claudia🎂</h1>
      <h2>😍Eres increible😍</h2>
      <img className="imagen-clau" src='./imagenes/cumpleClau.jpeg' alt="Cumpleaños Claudia" />

      <button className="button-sorpresa" onClick={handleSorpresa}>
        Sorpresa
      </button>

      {showMessage && (
      <div className="mensaje-sorpresa">
        <p>😍 La primera sopresa 😍</p>
        <p>...Relax...</p>
      </div>
      )}
    </div>
  );
};

export default BirthdayCard;
