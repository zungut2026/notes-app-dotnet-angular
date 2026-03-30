

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../service/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  noteForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private notesService: NotesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      noteTypeId: [null, Validators.required],
      tags: [[]]
    });
  }

  submit(): void {
  if (this.noteForm.invalid) return;

  this.isSubmitting = true;

  const formValue = this.noteForm.value;

  const payload = {
    noteDetails: formValue.content,   
    createdBy: 'Thandeka',           
    isPinned: false                  
  };

  this.notesService.createNote(payload).subscribe({
    next: (res) => {
      console.log('Note created:', res);
      this.router.navigate(['/notes']);
    },
    error: (err) => {
      console.error('Error creating note:', err);
      this.isSubmitting = false;
    }
  });
}

  onTagsChange(event: any) {
  const value = event.target.value;
  const tagsArray = value.split(',').map((tag: string) => tag.trim());
  this.noteForm.patchValue({ tags: tagsArray });
}
}