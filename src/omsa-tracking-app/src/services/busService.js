import axios from 'axios';
import Bus from '../models/Bus';

export const fetchBusData = async () => {
  try {
    const response = await axios.get('http://localhost:5073/api/BusTracking?busStopId=123');
    const buses = response.data.payload.map(
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
    );
    return buses;
  } catch (error) {
    console.error('Error fetching bus data:', error);
    return [];
  }
};