import { useTranslation } from 'react-i18next';
import '../styles/main.scss';
import logo from '../assets/logonav.png'

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav>
      <img src={logo} alt="logo" className='logoNav' />
      {/* <h1>{t('navbar.title')}</h1> */}
      <div className='selectNav'>
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="sv">SV</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;