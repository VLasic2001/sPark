using sPark.Enums;

namespace sPark.Models
{
    public class Parking
    {
        public int Id { get; set; }
        public string ParkingName { get; set; }
        public string Location { get; set; }
        public Neighbourhood Neighbourhood { get; set; }
        public double Price { get; set; }
        public ICollection<ParkingSpotType> ParkingSpotTypes { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
        public ICollection<Favorite> Favorites { get; set; }

    }
}
