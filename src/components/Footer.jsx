import { useTranslation } from 'react-i18next';
import '../styles/main.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t('footer.text')}</p>
    </footer>
  );
};

export default Footer;