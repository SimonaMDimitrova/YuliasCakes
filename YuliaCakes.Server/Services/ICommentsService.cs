namespace Services;

using DTOs;

public interface ICommentsService
{
    Task<IEnumerable<CommentDTO>> GetAllAsync();

    Task AddAsync(AddCommentDTO addCommentDTO);
}
