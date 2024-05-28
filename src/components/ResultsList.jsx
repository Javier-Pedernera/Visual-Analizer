import { useTranslation } from 'react-i18next';
import '../styles/main.scss';

const ResultsList = ({ results }) => {
  const { t } = useTranslation();
  return (
    <div className="results-list">
      <h2>{t('results.title')}</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      ) : (
        <p>{t('results.none')}</p>
      )}
    </div>
  );
};

export default ResultsList;