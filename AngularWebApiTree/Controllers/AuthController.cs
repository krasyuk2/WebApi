using System.ComponentModel.DataAnnotations;
using AngularWebApiTree.Models;
using AngularWebApiTree.Services;
using Microsoft.AspNetCore.Mvc;

namespace AngularWebApiTree.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : Controller
{
    private readonly IUserService _userService;
    private readonly IJwtService _jwtService;

    public AuthController(IUserService userService, IJwtService jwtService) =>
        (_userService, _jwtService) = (userService, jwtService);

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterModel model)
    {
        try
        {
            var user = await _userService.RegisterAsync(model.Username, model.Email, model.Password);
            return Ok(user);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
       
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginModel model)
    {
        var user = await _userService.AuthenticateAsync(model.Username, model.Password);
        if (user == null)
            return Unauthorized();
        var token = _jwtService.GenerateToken(user);
        return Ok(new { Token = token });
        
    }
}
public class RegisterModel
{
 
    public required string Username { get; set; }
    [EmailAddress]
    public required string Email { get; set; }
    public required string Password { get; set; }
    
    [Compare("Password", ErrorMessage = "Password mismatch")]
    public required string ConfirmPassword { get; set; }
}

public class LoginModel
{
    public required string Username { get; set; }
    public required string Password { get; set; }
}
