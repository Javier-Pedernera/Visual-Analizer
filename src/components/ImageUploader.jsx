import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import '../styles/main.scss';
import image from '../assets/PhotoAdd.svg';

const ImageUploader = ({ onImageUpload }) => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);


  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreview(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      console.log(base64Image);
      uploadImage(base64Image);
    };
    reader.readAsDataURL(file);
  }, []);
// se le quita el prefijo base64, preguntar a Charras si es necesario
  const uploadImage = async (base64Image) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', {
        image: base64Image.split(',')[1], 
      });
      const { image_id } = response.data.data;
      onImageUpload(image_id);
      setError(null); 
    } catch (error) {
      console.error('Error uploading image:', error);
      setError(t('uploader.error'));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div className='upLoaderContainer'>
      {preview ? (
        <>
        <img src={preview} className='image-preview' alt="preview" />
          {error && <p className="error-message">{error}</p>}
        </>
          
        ) : (<div {...getRootProps()} className={`image-uploader ${preview ? 'small' : ''}`}>
        <input {...getInputProps()} />
          <>
            <p>{t('uploader.instruction')}</p>
            <img src={image} className={preview ? 'imageAdd' : 'imageAdded'} alt="addImage" />
          </>
        
      </div>)}
      
    </div>
  );
};

export default ImageUploader;