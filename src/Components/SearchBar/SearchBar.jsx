import { useState, useEffect } from 'react';
import arrow from '../../assets/icons/icon-arrow.svg';
import css from './SearchBar.module.css';
import { fetchIpData } from '../../utils/IPApi';
import { useMapContext } from '../../context/MapContext';

const SearchBar = () => {
  const { setMap } = useMapContext();
  const [input, setInput] = useState('');

  const checkForDomain = input => {
    const periodCount = input.split('.').length - 1;
    if (periodCount === 1) return true;
    return false;
  };

  const fetchMap = async () => {
    const isDomain = checkForDomain(input);
    const data = await fetchIpData(input, isDomain);
    await setMap(data);
  };

  const handleIpSubmit = async event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;
    setInput(inputValue);
    event.target.reset();
  };

  useEffect(() => {
    fetchMap();
  }, [input]);

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
