import { useState } from 'react';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Map from './Components/Map/Map';
import { MapContext } from './context/MapContext';

function App() {
  const [map, setMap] = useState('');
  return (
    <Container>
      <MapContext.Provider value={{ map, setMap }}>
        <Header />
        <Map />
      </MapContext.Provider>
    </Container>
  );
}

export default App;
