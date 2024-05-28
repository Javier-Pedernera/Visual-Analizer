import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ImageAnalyzer from './components/ImageAnalyzer';
import ResultsList from './components/ResultsList';
import './styles/main.scss';

const App = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleImageUpload = (file) => {
    setImage(file);
  };

  const handleResults = (results) => {
    setResults(results);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: '1', padding: '20px' }}>
        <h1>Image Analyzer App</h1>
        <ImageUploader onImageUpload={handleImageUpload} imageLoaded={!!image} />
        <ImageAnalyzer image={image} onResults={handleResults} />
        {/* {image && (
          <div className='imagePreview'>
            <h2>Image Preview</h2>
            <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '30%' }} />
            <ImageAnalyzer image={image} onResults={handleResults} />
          </div>
        )} */}
        <ResultsList results={results} />
      </div>
      <Footer />
    </div>
  );
};

export default App;