import { useState, MouseEvent } from "react";
import { useDropzone } from "react-dropzone";
import "./image-dropzone.scss";
import { Delete } from "../../assets";
import { curryTextGetter } from "../../utils/getFormText";
import { LanguageCode } from "../../lang/form-fields-text";

interface Image extends File {
  preview?: string;
}

type ImageDropzoneProps = {
  selectedLanguage: LanguageCode
}

const ImageDropzone = ({ selectedLanguage }: ImageDropzoneProps) => {
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
      <div className={`image-dropzone ${isDragActive ? "image-dropzone__dragover": ""}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {files[0] ? (
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
