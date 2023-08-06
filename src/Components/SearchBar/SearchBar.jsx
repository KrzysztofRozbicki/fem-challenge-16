import arrow from '../../assets/icons/icon-arrow.svg';
import css from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={css.form}>
      <input
        type="text"
        name="search"
        className={css.input}
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" className={css.formBtn}>
        <img src={arrow} alt="submit" />
      </button>
    </form>
  );
};

export default SearchBar;
