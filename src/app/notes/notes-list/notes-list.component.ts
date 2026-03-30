import { Component } from '@angular/core';
import { NotesService } from '../../service/notes.service'
import { Route,Router } from '@angular/router';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
    constructor(private notesService: NotesService, private router:Router) {} 


isLoading = true;
notes: Note[] = [];
ngOnInit() {
  this.loadNotes();
  
}

loadNotes() {
  this.notesService.getNotes({}).subscribe({
    next: (res) => {
      this.notes = res;
      this.isLoading = false;
    },
    error: () => {
      this.isLoading = false;
    }
  });
}

goToCreateNote() {
  this.router.navigate(['/notes/create']);
}
}