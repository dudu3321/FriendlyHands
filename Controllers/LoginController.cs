using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FriendlyHands.Models;
using System.Linq;

namespace FriendlyHands.Controllers
{

    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        FriendlyhandsContext db;

        public LoginController(FriendlyhandsContext _db)
        {
            db = _db;
        }

        [HttpGet("/api/accounts")]
        public IEnumerable<Accounts> Get()
        {
            return this.db.Accounts.Take(10);
        }

        [HttpGet("/api/accounts/{serialNo}")]
        public Accounts GetBySerialNo(int serialNo)
        {
            return this.db.Accounts.Find(serialNo);
        }

        [HttpPost("/api/accounts/")]
        public bool CheckAccount([FromBody]Accounts userData)
        {
            if(!string.IsNullOrWhiteSpace(userData.Email) && !string.IsNullOrWhiteSpace(userData.Pass)) 
            {
                if(db.Accounts.Any(x => x.Email == userData.Email && x.Pass == userData.Pass))
                {
                    return true;
                }
                return false;
            }
            return false;
        }
    }
}