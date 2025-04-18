import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 40.4168,
  lng: -3.7038
};

export function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (loadError) {
    return (
      <div className="h-[400px] bg-gray-800 rounded-lg flex items-center justify-center text-white">
        Error al cargar el mapa
      </div>
    );
  }
  
  if (!isLoaded) {
    return (
      <div className="h-[400px] bg-gray-800 rounded-lg animate-pulse" />
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={13}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
}