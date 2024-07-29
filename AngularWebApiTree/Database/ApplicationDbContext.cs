﻿using AngularWebApiTree.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWebApiTree.Database;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}
    
    public DbSet<User> Users { get; set; }
}