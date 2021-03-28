import React from 'react';

const Modal = ({ onClose, currentApp }) => {
  const { name, gitHub, url, image, description } = currentApp;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h1 className="modalTitle"><strong>{name}</strong> </h1>
        <img className="app-img" src={require(`../../assets/images/apps/${image}`)} alt={name} />
        <div className="modalBody">
          <a href={gitHub} target="_blank">
            View this Repository
          </a>
          <br />
          <a href={url} target="_blank">
            View the Deployed Application
          </a>
          <p>
            {description}
          </p>
          <button type="button" onClick={onClose}>
            Return to Applications List
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;