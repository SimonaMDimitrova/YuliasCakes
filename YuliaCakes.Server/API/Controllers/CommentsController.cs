namespace API.Controllers;

using Services;

using Microsoft.AspNetCore.Mvc;
using DTOs;

[ApiController]
[Route("api/[controller]")]
public class CommentsController : ControllerBase
{
    private readonly ICommentsService commentsService;

    public CommentsController(ICommentsService commentsService)
    {
        this.commentsService = commentsService;
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll()
    {
        try
        {
            var comments = await commentsService.GetAllAsync();

            if (comments == null || !comments.Any())
            {
                return this.NotFound();
            }
            else
            {
                return this.Ok(comments);
            }
        }
        catch (Exception ex)
        {
            return this.BadRequest("Something went wrong. Call the admins!");
        }
    }

    [HttpPost("Add")]
    public async Task<IActionResult> Add(AddCommentDTO addCommentDTO)
    {
        try
        {
            await this.commentsService.AddAsync(addCommentDTO);

            return this.Ok();
        }
        catch (Exception)
        {
            return this.BadRequest("Something went wrong. Call the admins!");
        }
    }
}
