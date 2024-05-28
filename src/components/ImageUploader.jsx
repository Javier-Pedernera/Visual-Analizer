import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { resetImage } from '../Redux/Actions/ImageSlice';
import image from '../assets/PhotoAdd.svg';
import { uploadImage } from '../Redux/Actions/ImageActions';

const ImageUploader = () => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const imageId = useSelector((state) => state.image.image);
  const results = useSelector((state) => state.image.results);
  // console.log(imageId);
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreview(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      dispatch(uploadImage(base64Image, file.name)).catch((error) => {
        console.error('Error uploading image:', error);
        setError(t('uploader.error'));
      });
    };
    reader.readAsDataURL(file);
  }, [dispatch, t]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
    },
    maxFiles: 1,
  });

  const handleLoadNewImage = () => {
    setError(null);
    dispatch(resetImage() );
    setPreview(null)
  };
  return (
    <div className='upLoaderContainer'>
      {preview ? (
        <>
        <img src={preview} className='image-preview' alt="preview" />
          {error && <p className="error-message">{error}</p>}
        </>
        ) : (
        <div {...getRootProps()} className={`image-uploader ${preview ? 'small' : ''}`}>
          <input {...getInputProps()} />
          <>
            <p className='instrucc'>{t('uploader.instruction')}</p>
            <img src={image} className={preview ? 'imageAdd' : 'imageAdded'} alt="addImage" />
          </>
        </div>
      )}
       {results.length? <button onClick={handleLoadNewImage}>{t('analyzer.button.newImage')}</button> : <div></div> } 
    </div>
  );
};

export default ImageUploader;
