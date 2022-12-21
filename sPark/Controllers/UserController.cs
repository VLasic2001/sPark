using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sPark.Models;
using sPark.Helpers;
using sPark;

namespace sPark.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly SParkContext _dbContext;

        public UserController(SParkContext context)
        {
            _dbContext = context;
        }

        [HttpGet("all")]
        public IList<User> GetAll()
        {
            return (this._dbContext.Users.Include(x => x.Reservations).Include(x => x.Favorites).ToList());
        }

        [HttpGet("get-by-id")]
        public User GetUserById(int id)
        {
            return this._dbContext.Users.Find(id);
        }

        [HttpGet("login")]
        public int GetUserIdByPassword(string password)
        {
            return this._dbContext.Users.FirstOrDefault(user => HashHelper.ValidatePassword(password, user.Password)).Id;
        }

        [HttpPost("register")]
        public bool RegisterUser(string username, string password, string firstName, string lastName)
        {
            var userToAdd = new User{Username=username, Password=HashHelper.Hash(password)};
            var doesUsernameExist = this._dbContext.Users.Any(user =>
                string.Equals(user.Username, userToAdd.Username, StringComparison.CurrentCultureIgnoreCase));
            if (doesUsernameExist)
                return false;
            this._dbContext.Users.Add(userToAdd);
            return true;
        }
    }
}
