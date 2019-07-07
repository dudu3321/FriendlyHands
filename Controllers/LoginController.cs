using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace FriendlyHands.Controllers {

    [Route ("api/[controller]")]
    public class LoginController : Controller {
        public LoginController () {
        }

        public IEnumerable<String> Get () {
            return new String[] { "Value1", "Value2" };
        }
    }
}