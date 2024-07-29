using AngularWebApiTree.Models;

namespace AngularWebApiTree.Services;

public interface IJwtService
{
    string GenerateToken(User user);
}
public class JwtService : IJwtService
{
    private readonly IConfiguration _configuration;

    public JwtService(IConfiguration configuration) => _configuration = configuration;

    public string GenerateToken(User user)
    {
        return "token";
    }
}