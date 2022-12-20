using Microsoft.EntityFrameworkCore;
using sPark.Models;

namespace sPark
{
    public class SParkContext : DbContext
    {
        public DbSet<Parking> Parkings { get; set; }
        public DbSet<ParkingSpotType> ParkingSpotTypes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Favorite> Favorites { get; set; }
        public SParkContext(DbContextOptions<SParkContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Reservation>().HasKey(rp => new {rp.UserId, rp.ParkingId});
            modelBuilder.Entity<Reservation>()
                .HasOne(rp => rp.User)
                .WithMany(r => r.Reservations)
                .HasForeignKey(rp => rp.UserId);
            modelBuilder.Entity<Reservation>()
                .HasOne(rp => rp.Parking)
                .WithMany(p => p.Reservations)
                .HasForeignKey(rp => rp.ParkingId);

            modelBuilder.Entity<Favorite>()
                .HasKey(rp => new {rp.UserId, rp.ParkingId});
            modelBuilder.Entity<Favorite>()
                .HasOne(rp => rp.User)
                .WithMany(r => r.Favorites)
                .HasForeignKey(rp => rp.UserId);
            modelBuilder.Entity<Favorite>()
                .HasOne(rp => rp.Parking)
                .WithMany(p => p.Favorites)
                .HasForeignKey(rp => rp.ParkingId);
        }
    }
}
