/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import PdfIcon from "../../Icons/pdfIcon";

import styles from "./styles.module.scss";

interface FileUploadType {
  name: string;
  size: number;
  type: string;
}

interface PropsType {
  onDropFile: (fileDroped: any) => void;
}

export default function DropFile({ onDropFile }: PropsType) {
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [file, setFile] = useState<FileUploadType | null>(null);

  function handleDeleteFile() {
    setFile(null);
  }

  function handleDropFile(fileDroped: any) {
    setFile({
      name: fileDroped[0].name,
      size: fileDroped[0].size,
      type: fileDroped[0].type,
    });

    onDropFile(file);
  }

  const onDrop = useCallback((acceptFiles: any) => {
    handleDropFile(acceptFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/png": [".png", ".jpg"],
      "text/pdf": [".pdf", ".docx"],
    },
    onDrop,
  });

  return (
    <>
      <div {...getRootProps()} className={styles.dashed}>
        <input {...getInputProps()} />
        <div className={styles.uploadButton}>Upload</div>
        <p className={styles.uploadSubTitle}>{isDragActive ? "Solte o arquivo para fazer o upload" : "Arraste e solte o arquivo aqui"}</p>
      </div>

      <div />

      {file && (
        <div className={styles.container}>
          {!showConfirmMessage ? (
            <>
              <div className={styles.fileUploadInfo}>
                <PdfIcon />
                <h3>
                  {file.name} ({file.size})
                </h3>
              </div>
              <button onClick={() => setShowConfirmMessage(true)} className={styles.buttonDeleteFile}>
                Excluir arquivo
              </button>
            </>
          ) : (
            <div className={styles.deleteFileMessage}>
              <p className={styles.confirmMessage}>Deseja excluir o arquivo?</p>
              <button className={styles.orange} onClick={() => handleDeleteFile()}>
                Sim
              </button>
              <button className={styles.blue} onClick={() => setShowConfirmMessage(false)}>
                Não
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
