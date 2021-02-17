import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      name="photo-form"
      title="New Place"
      buttonText="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={name}
        className="form__input form__input_theme_light js-input-title"
        name="name"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={link}
        type="url"
        className="form__input form__input_theme_light js-input-link"
        name="link"
        placeholder="Image link"
        required
        onChange={(e) => setLink(e.target.value)}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
