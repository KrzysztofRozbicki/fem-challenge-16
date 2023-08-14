import css from './Information.module.css';
import { useMapContext } from '../../context/MapContext';

const Information = () => {
  const { map } = useMapContext();
  const { ip, location, isp } = map;
  console.log(map);
  return (
    <section className={css.information}>
      <div className={css.informationBox}>
        <h2 className={css.infoHeader}>IP ADDRESS</h2>
        <p className={css.infoText}>{ip || 'XXX.XXX.XXX.XXX'}</p>
      </div>
      <div className={css.informationBox}>
        <h2 className={css.infoHeader}>LOCATION</h2>
        <p className={css.infoText}>
          {location?.city
            ? `${location.city}, ${location.region}, ${location.country} ${location.postalCode}`
            : 'Unknown, NY 1001'}
        </p>
      </div>
      <div className={css.informationBox}>
        <h2 className={css.infoHeader}>TIMEZONE</h2>
        <p className={css.infoText}>{'UTC ' + (location?.timezone || '-01:00')}</p>
      </div>
      <div className={css.informationBox}>
        <h2 className={css.infoHeader}>ISP</h2>
        <p className={css.infoText}>{isp || 'SPACE X'}</p>
      </div>
    </section>
  );
};

export default Information;
