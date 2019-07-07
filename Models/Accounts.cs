using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace FriendlyHands.Models
{
    public partial class Accounts
    {
        public int SerialNo { get; set; }
        public string UserName { get; set; }
        public string Pass { get; set; }
        public string Email { get; set; }
    }
}
