"use client";

import { MouseEvent } from "react";
import { useDropzone } from "react-dropzone";
import { Delete } from "../../assets";
import { curryTextGetter } from "../../utils/getFormText";
import "./image-dropzone.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Image } from "./ImageDropzone";


export type Positions = 1 | 2 | 3;

export type ImageWithPosition = {
  payload: Image,
  position: Positions;
}

type SmallImageDropzoneProps = {
  setImageFunction: ActionCreatorWithPayload<ImageWithPosition>;
  removeImageFunction: ActionCreatorWithPayload<Positions>;
  imageOrigin: Image | null;
  position: Positions;
}

const SmallImageDropzone = ({ setImageFunction, removeImageFunction, imageOrigin, position }: SmallImageDropzoneProps) => {
  const { creatorFormLanguage } = useAppSelector(state => state.readme);
  const getExtendedTextForm = curryTextGetter(creatorFormLanguage, "extended");
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

      dispatch(setImageFunction({payload: files[0], position}))
    }
  });

  const removeImage = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(removeImageFunction(position));

    e.stopPropagation();
  };
  
  return (
    <>
      <div className={`image-dropzone ${isDragActive ? "image-dropzone__dragover": ""} small`} {...getRootProps()}>
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

export default SmallImageDropzone;
