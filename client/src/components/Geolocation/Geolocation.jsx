import {useGeolocation} from 'react-use';

export const Geolocation = () => {
  const state = useGeolocation();
  console.log(state.loading)

  return (
    <div className='Geolocation'>
      <div>
        Широта {JSON.stringify(state.latitude, null, 2)}
      </div>
      <div>
        Долгота {JSON.stringify(state.longitude, null, 2)}
      </div>
      <div>
        Скорость Движения {JSON.stringify(state.speed, null, 2)}
      </div>
    </div>
  );
};