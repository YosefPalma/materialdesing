import React, { useState } from 'react';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '100vh', 
  backgroundColor: 'rgba(255, 244, 231, 0.9)', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
};

const cardStyles = {
  backgroundColor: 'rgba(255, 204, 128, 0.9)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  transition: 'all 0.4s ease',
  width: '350px',
};

const expandedCardStyles = {
  ...cardStyles,
  height: 'auto',
  maxHeight: '600px',
};

const buttonStyles = {
  marginRight: '10px',
  backgroundColor: '#ff7043',
};

const contentStyles = {
  fontFamily: "'Roboto', sans-serif",
  padding: '20px',
};

const videoContainerStyles = {
  display: 'block',
  width: '100%',
  marginTop: '20px',
};

const notificationStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#4caf50',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1000, 
};

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleButtonClick = () => {
    setIsNotificationVisible(true); 

    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 3000);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={containerStyles}>
      <div className="card" style={isExpanded ? expandedCardStyles : cardStyles}>
        <div className="card-image">
          <img src="https://www.josech.tv/content/images/2022/09/image-65.png" alt="Producto" style={{ borderRadius: '10px 10px 0 0', width: '100%' }} />
          <span className="card-title" style={{ color: '#fff', fontWeight: '500', position: 'absolute', bottom: '10px', left: '10px' }}>iPHONE 15 PRO</span>
        </div>
        <div className="card-content" style={contentStyles}>
          <p>Este teléfono cuenta con una de las mejores cámaras del mundo. Pícale a ver más para ver sus especificaciones.</p>
        </div>
        <div className="card-action">
          <button className="btn" style={buttonStyles} onClick={handleButtonClick}>Agregar al Carrito</button>
          <button className="btn" style={buttonStyles} onClick={handleExpandClick}>
            {isExpanded ? 'Cerrar' : 'Ver Más'}
          </button>
        </div>

        {isExpanded && (
          <div style={videoContainerStyles}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {isNotificationVisible && (
        <div style={notificationStyles}>
          ¡Producto agregado al carrito!
        </div>
      )}
    </div>
  );
}

export default App;
