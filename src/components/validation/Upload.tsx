import React, { FC, useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import TextError from './TextError';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { InputProps } from './types';
import Modals from '../Modals';
import CustomButton from '../CustomButton';
pdfjs.GlobalWorkerOptions.workerSrc = '/path/to/pdf.worker.js';
import { Document, Page, pdfjs } from 'react-pdf';

const FileUpload: React.FC<InputProps> = ({ name, show }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const { setFieldValue, handleSubmit, errors } = useFormikContext();
  const [isDragging, setIsDragging] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setOpen(true);
      setFile(selectedFile);
      setFieldValue(name, selectedFile);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setOpen(true);
      setFile(droppedFile);
      setFieldValue(name, droppedFile);
    }
  };
  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };
  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  const handleDocumentError = (error: Error) => {
    console.error('Error loading PDF:', error);
  };
  const { isSubmitting } = useFormikContext();
  return (
    <>
      <Grid
        item
        container
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={{
          border: `1px solid ${isDragging ? 'blue' : '#DBDBDB'}`,
          alignItems: 'center',
          minHeight: '25rem',
          borderRadius: '.5rem',
          justifyContent: 'center',
          padding: '20px',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
      >
        <input
          type="file"
          name={name}
          accept="image/*,application/pdf,.xlsx,.xls,.csv"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
        <Grid item sx={{ m: 0 }}>
          <Grid item container flexDirection="column" alignItems={'center'} sx={{ m: 0 }} justifyContent={'center'}>
            <UploadFileIcon sx={{ fontSize: '5rem', mb: 2, cursor: 'pointer' }} onClick={handleUploadButtonClick} />
            <Typography variant="h5" fontWeight={400} color="black300.main">
              Drag and drop files or click to select files to upload
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {file && show && (
        <Modals isOpen={open} title={'File Preview'} handleClose={() => setOpen(false)}>
          <Grid item md={12}>
            {file?.type.includes('pdf') ? (
              <div>
                <Document file={file} onLoadSuccess={handleDocumentLoadSuccess} onError={handleDocumentError}>
                  <Page pageNumber={pageNumber} />
                </Document>
                <div>
                  <Typography variant="h6">{file?.name}</Typography>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={pageNumber <= 1}
                    onClick={() => handlePageChange(pageNumber - 1)}
                  >
                    Previous Page
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={pageNumber >= numPages!}
                    onClick={() => handlePageChange(pageNumber + 1)}
                  >
                    Next Page
                  </Button>
                </div>
                {errors[name as keyof typeof errors] && (
                  <Typography color="error" component="p">
                    {errors[name as keyof typeof errors]}
                  </Typography>
                )}
              </div>
            ) : (
              <>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded File"
                  style={{ maxWidth: '100%', width: '100%', maxHeight: '40rem' }}
                />
                <div>
                  <Typography variant="h6">{file?.name}</Typography>
                </div>
                {errors[name as keyof typeof errors] && (
                  <Typography color="error" component="p">
                    {errors[name as keyof typeof errors]}
                  </Typography>
                )}
              </>
            )}
            <Grid item mt={4}>
              <CustomButton type="submit" title="Publish Post" onClick={handleSubmit} isSubmitting={isSubmitting} />
            </Grid>
          </Grid>
        </Modals>
      )}
    </>
  );
};
FileUpload.defaultProps = {
  show: true,
};

const FilesUpload: FC<InputProps> = (props) => {
  const { name, ...rest } = props; // Include onClick prop here

  return (
    <Grid container direction="column">
      <Field {...rest} name={name} as={FileUpload} /> {/* Pass onClick here */}
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default FilesUpload;
