"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();

  console.log("picked image", pickedImage);

  const imageInput = useRef();

  const handleClick = () => {
    console.log("click");
    imageInput.current.click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];

    console.log("file", e.target.files);

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log("fileReader.result", fileReader.result);

      setPickedImage(fileReader.result);
    };

    fileReader.onerror = (e) => {
      console.error("Error reading file:", fileReader.error);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image fill src={pickedImage} alt="selected image" />}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/jpeg, image/png, image/jpg"
          ref={imageInput}
          onChange={handleInputChange}
          required
        />
        <button type="button" className={classes.button} onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
