import axios from 'axios';
import Bus from '../models/Bus';
import BusStop from '../models/BusStop';

export const fetchBusData = async () => {
  try {
    const response = await axios.get('http://localhost:5073/api/BusTracking?busStopId=123');
    const busStops = response.data.payload.map(
      (busStop) => 
        new BusStop(
            busStop.id,
            busStop.name,
            busStop.isFavorite,
            {
              latitude: busStop.location.latitude,
              longitude: busStop.location.longitude,
            },
            busStop.buses.map(
              (bus) => 
                new Bus(
                  bus.id,
                  bus.currentPassengers,
                  bus.capacity,
                  bus.timeToArrival,
                  {
                    latitude: bus.location.latitude,
                    longitude: bus.location.longitude,
                  }
                )
            )
          )
    );
    return busStops;
  } catch (error) {
    console.error('Error fetching bus stop data:', error);
    return [];
  }
};