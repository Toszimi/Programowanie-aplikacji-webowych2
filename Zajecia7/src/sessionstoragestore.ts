import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        console.log('kot')

    }

    public addNote(note: Note): void {
        let notesvalue = <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesvalue);
        if (!notes) {
            notes = [];
            notes.push(note)
            sessionStorage.setItem('notes', JSON.stringify(notes))
        }
    }

    public getNotes(): Note[] {
        let notesvalue = <string>sessionStorage.getItem('notes');
        return <Note[]>JSON.parse(notesvalue);
    }

}