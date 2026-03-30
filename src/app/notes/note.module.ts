import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesListComponent } from './notes-list/notes-list.component';
import { CreateNoteComponent } from './note-create/note-create.component';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  declarations: [
    NotesListComponent,
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotesRoutingModule 
  ]
})
export class NotesModule {}