"use client";

import { useState, MouseEvent } from "react";
import { useDropzone } from "react-dropzone";
import { Delete } from "../../assets";
import { curryTextGetter } from "../../utils/getFormText";
import { LanguageCode } from "../../lang/form-fields-text";
import "./image-dropzone.scss";

interface Image extends File {
  preview?: string;
}

type ImageDropzoneProps = {
  selectedLanguage: LanguageCode
  size?: "small" | "normal"
}

const ImageDropzone = ({ selectedLanguage, size = "normal" }: ImageDropzoneProps) => {
  const getExtendedTextForm = curryTextGetter(selectedLanguage, "extended");

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
      
      setFiles(files);
    }
  });
  const [files, setFiles] = useState<Image[]>([]);

  const removeImage = (e: MouseEvent<HTMLButtonElement>) => {
    setFiles([]);

    e.stopPropagation();
  };
  return (
    <>
      <div className={`image-dropzone ${isDragActive ? "image-dropzone__dragover": ""} ${size ?? "small"}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {files[0]?.preview ? (
          <>
            <img src={files[0].preview} alt="" className="image-dropzone__image" />
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
