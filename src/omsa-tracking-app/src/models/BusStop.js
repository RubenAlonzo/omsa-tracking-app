class BusStop {
  constructor(id, name, isFavorite, location, buses) {
    this.id = `${id}B`;
    this.name = name;
    this.isFavorite = isFavorite;
    this.location = location;
    this.buses = buses;
  }
}

export default BusStop;