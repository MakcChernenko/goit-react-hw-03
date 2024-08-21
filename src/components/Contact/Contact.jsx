import React from "react";
import styles from "./Contact.module.css";

function Contact({ data, deleteContact }) {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.number}</p>
      <button
        type="button"
        onClick={() => {
          deleteContact(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
