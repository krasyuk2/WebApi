using System.ComponentModel.DataAnnotations;

namespace AngularWebApiTree.Models;

public class User
{
    
    public int Id { get; set; }
    public required string Username { get; set; }
    [EmailAddress]
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string PasswordHash { get; set; }
    public required Roles Role { get; set; }
}

public enum Roles
{
    Admin,
    Moderator,
    User
}