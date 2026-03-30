using System;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/notes")]
public class NotesController : ControllerBase
{
    //private readonly NoteService _service;

    //public NotesController(NoteService service)
    //{
    //    _service = service;
    //}

    [HttpGet]
    public IActionResult Test()
    {
        return Ok("API is working");
    }

    //[HttpPost("get-notes")]
    //public async Task<IActionResult> GetNotes([FromBody] GetNotesRequest request)
    //{
    //    var result = await _service.GetNotes(request);
    //    return Ok(result);
    //}

    //[HttpPost]
    //public async Task<IActionResult> Create([FromBody] NoteDto dto)
    //{
    //    var result = await _service.CreateNote(dto);
    //    return Ok(result);
    //}
}
    