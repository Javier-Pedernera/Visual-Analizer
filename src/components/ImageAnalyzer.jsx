import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import '../styles/main.scss';

const ImageAnalyzer = ({ imageId, onResults }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeImage = async () => {
    if (!imageId) return;

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`http://127.0.0.1:5000/process/${imageId}`);
      const objects = response.data.data.objects;
      onResults(objects);
    } catch (error) {
      console.log("setea el error");
      setError(t('analyzer.error'));
      console.error('Error analyzing image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-analyzer">
      <button onClick={analyzeImage} disabled={loading || !imageId}>
        {loading ? t('analyzer.button.analyzing') : t('analyzer.button.analyze')}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageAnalyzer;