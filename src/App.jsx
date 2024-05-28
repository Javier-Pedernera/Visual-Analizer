import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ImageAnalyzer from './components/ImageAnalyzer';
import ResultsList from './components/ResultsList';
import './styles/main.scss';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
 

  return (
    <div className='appContainer'>
      <Navbar />
      <div className='description'>
        <h1 >{t('description')}</h1>
        <ImageUploader />
      <ImageAnalyzer />
      <ResultsList />
      </div>
      <Footer />
    </div>
    
  );
};

export default App;