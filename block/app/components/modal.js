import React from "react";
import "./styles.css";

const modal = (props) => {
  const { author, title, content, category } = props.selectedBlock;
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-container" onClick={props.handleModalClose}>
      <div className="modal-wrapper" onClick={stopPropagation}>
        <p className="modal-title">{title}</p>
        <p className="modal-content">{content}</p>
        </div>
    </div>
  );
};

export default modal;
