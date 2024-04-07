class Bus {
  constructor(id, currentPassengers, capacity, timeToArrival, location) {
    this.busNumber = `B${id}M`;
    this.passengers = currentPassengers;
    this.capacity = capacity;
    this.status =
      timeToArrival === "00:00:00" || timeToArrival.includes("-")
        ? "Vencida"
        : null;
    this.eta = `${timeToArrival} min`;
    this.location = location;
  }
}

export default Bus;