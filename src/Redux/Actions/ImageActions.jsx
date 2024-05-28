import axios from 'axios';
import { setImage, setResults } from './ImageSlice';

const API_URL = import.meta.env.VITE_API_URL;

export const uploadImage = (base64Image, filename) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, {
      image: base64Image.split(',')[1], 
      filename,
    });
    const { image_id } = response.data.data;
    dispatch(setImage(image_id));
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const analyzeImage = (imageId, language) => async (dispatch) => {
  try {
    console.log(imageId, language);
    const response = await axios.get(`${API_URL}/results/${imageId}/${language}`);
    // console.log("respuesta del analisis",response);
    const objects = response.data.materials;
    dispatch(setResults(objects));
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error; 
  }
};