import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import '../styles/main.scss';

const ResultsList = () => {
  const { t } = useTranslation();
  const results = useSelector((state) => state.image.results);
  // console.log("materiales en el global",results);

  return (
    <div className="results-list">
      <h2>{t('results.title')}</h2>
      {results.length > 0 ? (
        <table className="results-table">
          <thead>
            <tr>
              <th>{t('results.detected_item')}</th>
              <th>{t('results.count')}</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.product_name}</td>
                <td>{result.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{t('results.none')}</p>
      )}
    </div>
  );
};

export default ResultsList;
