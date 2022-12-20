using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sPark.Models;

namespace sPark.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly SParkContext _dbContext;

        public UserController(SParkContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public IList<Parking> Get()
        {
            return (_dbContext.Parkings.Include(x => x.Reservations).ToList());
        }
    }
}
