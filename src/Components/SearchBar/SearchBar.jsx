import { useState, useEffect } from 'react';
import arrow from '../../assets/icons/icon-arrow.svg';
import css from './SearchBar.module.css';
import { fetchIpData } from '../../utils/IPApi';
import { useMapContext } from '../../context/MapContext';

const SearchBar = () => {
  const { setMap } = useMapContext();
  const [ip, setIp] = useState('');

  const fetchMap = async () => {
    const data = await fetchIpData(ip);
    await setMap(data);
  };

  const handleIpSubmit = async event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;
    setIp(inputValue);
    event.target.reset();
  };

  useEffect(() => {
    fetchMap();
  }, [ip]);

  return (
    <form onSubmit={handleIpSubmit} className={css.form}>
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
