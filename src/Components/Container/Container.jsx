import css from './Container.module.css';

const Container = ({ children }) => {
  return <div className={css.containerBox}>{children}</div>;
};

export default Container;
