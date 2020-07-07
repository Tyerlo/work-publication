import React, { Fragment } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import "./UploadFiles.css";
import convertSize from "convert-size";
import { FormText } from "reactstrap";
const DroppingFiles = (props) => {
  const { setFieldValue } = props;

  const MAX_SIZE = 2000000;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
    },
    multiple: true,
    maxSize: { MAX_SIZE },
    accept: "application/pdf, application/msword"
  });

  const ErrorMessage = ({ children }) => (
    <div
      style={{
        fontStyle: "italic",
        color: "red"
      }}
    >
      {children}
    </div>
  );

  const acceptedFilesItems = acceptedFiles.map((file) => {
    const convertToMB = convertSize(file.size, "MB", { accuracy: 2 });

    return (
      <li key={file.path}>
        {file.size > MAX_SIZE ? (
          <ErrorMessage>
            {file.name} is too big, try with a smaller file
          </ErrorMessage>
        ) : (
          <Fragment>
            {file.path} - {convertToMB} MB
          </Fragment>
        )}
      </li>
    );
  });

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
    <section>
      <FormText color="black"> Max size 2MB</FormText>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} name="files" />
        <p>Drag n' drop some files here, or click to select files</p>
      </div>

      <aside>
        <h5>Files</h5>

        <ul>{acceptedFilesItems}</ul>
      </aside>
    </section>
  );
};
export default DroppingFiles;
