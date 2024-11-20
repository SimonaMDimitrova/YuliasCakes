namespace Data;

using DTOs;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;

[BsonIgnoreExtraElements]
public class Comment
{
    [BsonConstructor]
    public Comment(string author, string content)
    {
        this.Author = author;
        this.Content = content;
        
        this.CreatedOn = DateTime.Now;
    }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string Author { get; set; }

    public string Content { get; set; }

    public DateTime CreatedOn { get; set; }
}
