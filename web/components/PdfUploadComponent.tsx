import React, { useCallback } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import axios from "axios";

const PdfUploadComponent: React.FC = () => {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (
      acceptedFiles.length !== 1 ||
      acceptedFiles[0].type !== "application/pdf"
    ) {
      alert("Please upload a single PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", acceptedFiles[0]);

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      alert("PDF file uploaded successfully.");
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("Error uploading PDF.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="rounded-2xl border-2 border-dashed border-gray-400 p-8 lg:p-20 text-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the PDF file here...</p>
      ) : (
        <p>
          Drag and drop a PDF file here, or click to select a file.
          <br />
          Only .pdf files will be accepted.
        </p>
      )}
    </div>
  );
};

export default PdfUploadComponent;
