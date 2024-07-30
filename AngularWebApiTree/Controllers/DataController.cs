using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AngularWebApiTree.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize] // Требует аутентификацию
public class DataController : ControllerBase
{
    [HttpGet]
    [Authorize(Roles = "Admin")] // Доступ только для администраторов
    public IActionResult GetAdminData()
    {
        return Ok(new { Message = "This is admin data" });
    }

    [HttpGet("user")]
    [Authorize(Roles = "User")] // Доступ только для пользователей
    public IActionResult GetUserData()
    {
        return Ok(new { Message = "This is user data" });
    }
}