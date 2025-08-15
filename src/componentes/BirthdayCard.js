import React, { useState } from 'react';
import '../styles/BirthdayCard.css'; // Tu CSS que has compartido
import cumpleImg from '../imagenes/cumpleClau.jpeg'; // Ajusta la ruta de tu imagen

const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSorpresa = () => {
    setShowMessage(true);
    // Redirigir después de 2 segundos
    setTimeout(() => {
      window.location.href = 'https://nicciamalaga.com/';
    }, 2000);
  };

  return (
    <div className="card">
      <h1>🎉Feliz Cumpleaños Claudiaaa🎉</h1>
      <h2>😍Eres increibleee😍</h2>
      <img className="imagen-clau" src={cumpleImg} alt="Cumpleaños Claudia" />

      <button className="button-sorpresa" onClick={handleSorpresa}>
        Sorpresa
      </button>

      {showMessage && (
      <div className="mensaje-sorpresa">
        <p>😍 La primera sorpresita 😍</p>
        <p>...RELAX...</p>
      </div>
      )}
    </div>
  );
};

export default BirthdayCard;
