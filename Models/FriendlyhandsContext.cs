using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace FriendlyHands.Models
{
    public partial class FriendlyhandsContext : DbContext
    {
        public IConfiguration Configuration { get; }

        public FriendlyhandsContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public FriendlyhandsContext(DbContextOptions<FriendlyhandsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            { 
                optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.HasKey(e => e.SerialNo);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(100);
            });
        }
    }
}
