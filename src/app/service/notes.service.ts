import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../notes/note.model';

@Injectable({ providedIn: 'root' })
export class NotesService {

  private baseUrl = 'https://localhost:5000/api/notes'; 

  constructor(private http: HttpClient) {}

 getNotes(request: any): Observable<Note[]> {
  return this.http.post<Note[]>(`${this.baseUrl}/get-notes`, request);
}

  createNote(note: any) {
    return this.http.post(this.baseUrl, note); 


  }

}