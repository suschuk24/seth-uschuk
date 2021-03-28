import React from 'react';

const Modal = ({ onClose, currentApp }) => {
  const { name, gitHub, url, image, description } = currentApp;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/images/apps/${image}`)} alt={name} />
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
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;