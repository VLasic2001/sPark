namespace sPark.Models
{
    public class Reservation
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int ParkingId { get; set; }
        public Parking Parking { get; set; }
        public DateTime TimeOfEntry { get; set; }
        public DateTime TimeOfExit { get; set; }
        public double TotalPrice { get; set; }
    }
}
