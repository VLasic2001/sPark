using sPark.Data.Entities.Enums;

namespace sPark.Models
{
    public class ParkingSpotType
    {
        public int Id { get; set; }
        public StatusType StatusType { get; set; }
        public int ParkingId { get; set; }
        public Parking Parking { get; set; }
        public int NumberOfAvailableSpots { get; set; }
        public int NumberOfTotalSpots { get; set; }
    }
}
