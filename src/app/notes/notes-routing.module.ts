import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesListComponent } from '../notes/notes-list/notes-list.component';
import { CreateNoteComponent } from '../notes/note-create/note-create.component';
const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'create', component: CreateNoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}