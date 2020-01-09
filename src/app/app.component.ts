import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note} from '../note.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  notes: Note[] = [
  {id: 1, text: "Note #1"}, 
  {id: 1, text: "Note #2"}, 
  {id: 1, text: "Note #3"}];
  
  newNote: Note;


  saveNote(noteForm: NgForm) {
    console.log( (noteForm.value as Note).text);
    this.notes.push(noteForm.value as Note);
  }
  // name = 'Angular';
}
