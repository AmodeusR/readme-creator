"use client";

import { useState, MouseEvent } from "react";
import { useDropzone } from "react-dropzone";
import { Delete } from "../../assets";
import { curryTextGetter } from "../../utils/getFormText";
import { LanguageCode } from "../../lang/form-fields-text";
import "./image-dropzone.scss";
import { useAppDispatch } from "@/redux/hooks";
import { removeHeaderImage } from "@/redux/slices/readmeSlice";
import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export interface Image extends File {
  preview?: string;
}

type ImageDropzoneProps = {
  selectedLanguage: LanguageCode;
  size?: "small" | "normal";
  setImageFunction: ActionCreatorWithPayload<Image>;
  removeImageFunction: ActionCreatorWithoutPayload;
  imageOrigin: Image | null;
}

const ImageDropzone = ({ selectedLanguage, size = "normal", setImageFunction, removeImageFunction, imageOrigin }: ImageDropzoneProps) => {
  const getExtendedTextForm = curryTextGetter(selectedLanguage, "extended");
  const dispatch = useAppDispatch();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": []
    },
    maxFiles: 1,
    onDrop: (files) => {
      
      const preview = URL.createObjectURL(files[0]);
      
      files.map(file => {
        Object.assign(file, {
          preview
        });
      });

      dispatch(setImageFunction(files[0]));
    }
  });

  const removeImage = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(removeImageFunction());

    e.stopPropagation();
  };
  
  return (
    <>
      <div className={`image-dropzone ${isDragActive ? "image-dropzone__dragover": ""} ${size ?? "small"}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {imageOrigin?.preview ? (
          <>
            <img src={imageOrigin.preview} alt="" className="image-dropzone__image" />
            <button type="button" className="image__delete-background" onClick={(e) => removeImage(e)}>
              <Delete className="image__delete" />
            </button>
          </>
        ) : (
          <p className="image-dropzone__title">{getExtendedTextForm("screenCaptures", "desktop", "placeholder")}</p>
         )}
      </div>
    </>
  );
};

export default ImageDropzone;
