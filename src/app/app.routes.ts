import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/note.module').then(m => m.NotesModule) },
  { path: '', redirectTo: 'notes', pathMatch: 'full' }
];