import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/main.scss';
import { analyzeImage } from '../Redux/Actions/ImageActions';


const ImageAnalyzer = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const imageId = useSelector((state) => state.image.image);
  

  // console.log(imageId);
  const handleAnalyzeImage = async () => {
    if (!imageId) return;

    try {
      setLoading(true);
      setError(null);
      await dispatch(analyzeImage(imageId, i18n.language));
    } catch (error) {
      setError(t('analyzer.error'));
      console.error('Error analyzing image:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="image-analyzer">
      <button onClick={handleAnalyzeImage} disabled={loading || !imageId}>
        {loading ? t('analyzer.button.analyzing') :  t('analyzer.button.analyze')}
      </button>
    
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageAnalyzer;
