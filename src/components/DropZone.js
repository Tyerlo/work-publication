import React from "react";
import DropZone from "react-dropzone";
import JSZip from "jszip";
import "./DropZone.css";
const DroppingFiles = () => {
  const handleDrop = (files) => {
    const zip = new JSZip();

    files.forEach((file) => zip.file(file.name, file));

    zip.generateAsync({ type: "blob" }).then((blob) => {
      const zippedFiles = new File([blob], "whatever.zip", {
        lastModified: Date.now(),
        type: "application/zip"
      });

      this.setState({
        zippedFiles
      });
    });
  };

  return (
    <DropZone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} name="files" />
            <p>Drag n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </DropZone>
  );
};
export default DroppingFiles;
