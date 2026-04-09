"use client";

import { useState } from 'react';

export default function Juego() {
  // Ajustamos la posición inicial para que esté a la derecha del centro
  const [posicion, setPosicion] = useState({ left: 'calc(50% + 70px)', top: 'calc(50% + 65px)' });
  const [mensaje, setMensaje] = useState("¿Eres un Therian?");
  const [ocultarBotones, setOcultarBotones] = useState(false);

  const moverBoton = () => {
    // Al moverlo, usamos valores aleatorios
    const x = Math.floor(Math.random() * 70) + 15;
    const y = Math.floor(Math.random() * 70) + 15;
    setPosicion({ left: `${x}%`, top: `${y}%` });
  };

  const confirmar = () => {
    
    setMensaje(" 🐵 ¡Sabía que eras un Therian! 🐻 ");
    setOcultarBotones(true);
  };

  return (
    <div style={{ 
      height: '100vh', 
      backgroundColor: '#e7e591', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <h1 style={{ color: '#8f6e00', fontSize: '3.5rem', textAlign: 'center', padding: '0 20px', marginBottom: '100px' }}>
        {mensaje}
      </h1>
      
      {!ocultarBotones && (
        <>
          {/* Botón SÍ: Se queda en el centro izquierdo */}
          <button 
            onClick={confirmar}
            style={{
                ...estiloBoton,
                position: 'absolute',
                left: 'calc(50% - 70px)', // Posición fija a la izquierda del centro
                top: 'calc(50% + 65px)',
                transform: 'translate(-50%, -50%)',
            }}
          >
            Sí
          </button>

          {/* Botón NO: Aparece a la derecha, pero luego se mueve */}
          <button 
            onMouseEnter={moverBoton}
            style={{ 
              ...estiloBoton, 
              position: 'absolute', 
              left: posicion.left, 
              top: posicion.top,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
          >
            No
          </button>
        </>
      )}
    </div>
  );
}

const estiloBoton: React.CSSProperties = {
  padding: '15px 40px',
  fontSize: '1.5rem',
  cursor: 'pointer',
  borderRadius: '50px',
  border: 'none',
  backgroundColor: '#e1b94d',
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
};