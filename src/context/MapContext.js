import { createContext, useContext } from 'react';

export const MapContext = createContext();
export const useMapContext = () => useContext(MapContext);
