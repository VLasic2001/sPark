using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sPark.Models;
using sPark.Helpers;
using sPark;

namespace sPark.Controllers
{
    [Route("api/parkings")]
    [ApiController]
    public class ParkingController : Controller
    {
        private readonly SParkContext _dbContext;

        public ParkingController(SParkContext context)
        {
            _dbContext = context;
        }

        [HttpGet("all")]
        public IList<Parking> GetAll()
        {
            return (this._dbContext.Parkings.Include(x => x.Reservations).Include(x => x.Favorites).ToList());
        }

        [HttpGet("get-by-id")]
        public Parking GetParkingById(int id)
        {
            return this._dbContext.Parkings.Find(id);
        }

    }
}
