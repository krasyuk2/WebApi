using System.ComponentModel.DataAnnotations;
using AngularWebApiTree.Database;
using AngularWebApiTree.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWebApiTree.Services;

public interface IUserService
{
     Task<User> RegisterAsync(string username, string email, string password);
     Task<User> AuthenticateAsync(string username, string password);
}
public class UserService : IUserService
{
    private readonly ApplicationDbContext _context;
    
    public UserService(ApplicationDbContext context) => _context = context;

    public async Task<User> RegisterAsync(string username, string email, string password)
    {
        if (await _context.Users.AnyAsync(u => u.Username == username))
            throw new Exception("Username already exists");
        
        var passwordHash = BCrypt.Net.BCrypt.HashPassword(password);

        var user = new User
        {  
            Username = username,
            Email = email,
            Password = password,
            PasswordHash = passwordHash,
            Role = Roles.User
        };
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<User> AuthenticateAsync(string username, string password)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
            return null;
        return user;
    }
}
    


