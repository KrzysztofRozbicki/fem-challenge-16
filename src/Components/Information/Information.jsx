import css from './Information.module.css';

const Information = () => {
  return (
    <section className={css.information}>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>IP ADDRESS</p>
        <p className={css.infoText}>XXX.XXX.XXX.XXX</p>
      </div>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>LOCATION</p>
        <p className={css.infoText}>Unknown, NY 1001</p>
      </div>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>TIMEZONE</p>
        <p className={css.infoText}>UTC -01:00</p>
      </div>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>ISP</p>
        <p className={css.infoText}>SPACE X</p>
      </div>
    </section>
  );
};

export default Information;
