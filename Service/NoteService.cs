using System;

public class NoteService
{
    private readonly NoteRepository _repo;

    public NoteService(NoteRepository repo)
    {
        _repo = repo;
    }

    public async Task<IEnumerable<dynamic>> GetNotes(GetNotesRequest request)
    {
        var notes = await _repo.GetNotes(request);

        return notes.Select(n => new
        {
            n.noteId,
            n.noteDetails,
            n.insertedDatetime,
            createdByName = n.createdByName ?? "System",
            tags = n.tags?.Split(',') ?? new string[] { }
        });
    }

    public async Task<object> CreateNote(NoteDto dto)
    {
        var noteId = await _repo.CreateNote(dto);

        return new
        {
            noteId = noteId,
            message = "Note created successfully"
        };
    }
}