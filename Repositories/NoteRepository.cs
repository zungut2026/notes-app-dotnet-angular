using System;
using Dapper;
using Microsoft.Data.SqlClient;
public class NoteRepository
{
    private readonly IConfiguration _config;

    public NoteRepository(IConfiguration config)
    {
        _config = config;
    }
    public async Task<IEnumerable<dynamic>> GetNotes(GetNotesRequest request)
    {
        return new List<dynamic>
    {
        new {
            noteId = 1,
            noteDetails = "Demo note",
            createdByName = "Thandeka",
            insertedDatetime = DateTime.Now,
            isPinned = false
        }
    };
    }
    public async Task<int> CreateNote(NoteDto dto)
    {
        using var connection = new SqlConnection(_config.GetConnectionString("Default"));

        var sql = @"
INSERT INTO Note.note
(
    note_details,
    created_by,
    inserted_datetime,
    is_pinned
)
VALUES
(
    @NoteDetails,
    @CreatedBy,
    GETDATE(),
    @IsPinned
);

SELECT CAST(SCOPE_IDENTITY() as int);
";

        var noteId = await connection.ExecuteScalarAsync<int>(sql, new
        {
            NoteDetails = dto.NoteDetails,
            CreatedBy = dto.CreatedBy,
            IsPinned = dto.IsPinned
        });

        return noteId;
    }
}
