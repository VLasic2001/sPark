namespace sPark.Models
{
    public class Favorite
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int ParkingId { get; set; }
        public Parking Parking { get; set; }
    }
}
