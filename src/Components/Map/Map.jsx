import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerSvg from '../../assets/icons/icon-location.svg';
import css from './Map.module.css';
import { useMapContext } from '../../context/MapContext';

const customIcon = new L.Icon({
  iconUrl: markerSvg,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
  popupAnchor: [0, -56],
});

const Map = () => {
  const [coordinates, setCoordinates] = useState([40, 0]);
  const { map } = useMapContext();
  const { location } = map;
  useEffect(() => {
    if (location) {
      setCoordinates([location.lat, location.lng]);
    }
  }, [location]);
  return (
    <div className={css.map}>
      <MapContainer
        key={coordinates.toString()}
        center={coordinates}
        zoom={13}
        className={css.mapContainer}
      >
        {/* Add a tile layer as the base map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add a marker to a specific location on the map */}
        <Marker position={coordinates} icon={customIcon}>
          <Popup>A marker indicating a specific location.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
