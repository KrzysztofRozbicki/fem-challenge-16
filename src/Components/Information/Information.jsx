import css from './Information.module.css';
import { useMapContext } from '../../context/MapContext';

const Information = () => {
  const { map } = useMapContext();
  const { ip, location, isp } = map;
  console.log(map);
  return (
    <section className={css.information}>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>IP ADDRESS</p>
        <p className={css.infoText}>{ip || 'XXX.XXX.XXX.XXX'}</p>
      </div>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>LOCATION</p>
        <p className={css.infoText}>
          {location?.city
            ? `${location.city}, ${location.region}, ${location.country} ${location.postalCode}`
            : 'Unknown, NY 1001'}
        </p>
      </div>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>TIMEZONE</p>
        <p className={css.infoText}>{'UTC ' + (location?.timezone || '-01:00')}</p>
      </div>
      <div className={css.informationBox}>
        <p className={css.infoHeader}>ISP</p>
        <p className={css.infoText}>{isp || 'SPACE X'}</p>
      </div>
    </section>
  );
};

export default Information;
