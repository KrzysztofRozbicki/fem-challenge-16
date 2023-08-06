import SearchBar from '../SearchBar/SearchBar';
import Information from '../Information/Information';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>IP Address Tracker</h1>
      <SearchBar />
      <div className={css.infoBox}>
        <Information />
      </div>
    </header>
  );
};

export default Header;
