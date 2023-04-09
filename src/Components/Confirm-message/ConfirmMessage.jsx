import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function ConfirmMessage(props) {
  const handleUserButtonClick = () => {
    confirmAlert({
      title: "Confirm deletion",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: props.handleUserButtonClick,
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div>
      <button onClick={handleUserButtonClick}>Delete User</button>
    </div>
  );
}
