namespace Services;

using Data;
using DTOs;

using MongoDB.Driver;

public class CommentsService : ICommentsService
{
    IMongoDatabase db;

    public CommentsService(IMongoClient mongoClient)
    {
        this.db = mongoClient.GetDatabase(DB.DBName);
    }

    public async Task<IEnumerable<CommentDTO>> GetAllAsync()
    {
        var collection = GetCommentsCollection();

        var dbComments = await collection.Find(_ => true)
                                         .ToListAsync();

        var commentsDTO = dbComments.ToList()
                                    .OrderByDescending(x => x.CreatedOn)
                                    .Select(x => new CommentDTO
                                    {
                                        Id = x.Id,
                                        Author = x.Author,
                                        Content = x.Content,
                                    })
                                    .ToList();

        return commentsDTO;
    }

    public async Task AddAsync(AddCommentDTO addCommentDTO)
    {
        var collection = GetCommentsCollection();

        var comment = new Comment(addCommentDTO.Author, addCommentDTO.Content);
        await collection.InsertOneAsync(comment);
    }

    private IMongoCollection<Comment> GetCommentsCollection()
    {
        return db.GetCollection<Comment>(DBCollections.Comments); // make it generic, eventually ???
    }
}
