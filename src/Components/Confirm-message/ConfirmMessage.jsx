import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./react-confirm-alert.css";
import "animate.css/animate.min.css";

export default function ConfirmMessage(props) {
  const handleUserButtonClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Confirm Deletion</h1>
            <p>Are you sure you want to delete this user?</p>
            <div className="button-group">
              <button className="secondary" onClick={onClose}>
                No
              </button>
              <button
                className="primary"
                onClick={() => {
                  props.handleDeleteUser();
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <div className="confirm-message">
      <button onClick={handleUserButtonClick} className="delete-button">
        Delete User
      </button>
    </div>
  );
}
