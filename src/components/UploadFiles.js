import React, { Fragment } from "react";
import { useDropzone } from "react-dropzone";
import "./UploadFiles.css";
import convertSize from "convert-size";
import { FormText } from "reactstrap";
const DroppingFiles = (props) => {
  const { setFieldValue, files } = props;

  const MAX_SIZE = 2000000;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
    },
    multiple: true,
    maxSize: { MAX_SIZE },
    accept:
      "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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

  return (
    <section>
      <FormText color="muted"> Accepted files: docx, doc and pdf</FormText>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} name="files" />
        <p>Drag n' drop some files here, or click to select files</p>
      </div>
      <FormText color="muted">Max size 2MB</FormText>
      <aside>
        <h5>Files</h5>

        <ul>{acceptedFilesItems}</ul>
      </aside>
    </section>
  );
};
export default DroppingFiles;
