import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notesvalue = <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesvalue);
        console.log(notes)
        let noteid: Guid;
        let index = 0;


        notes.forEach((note) => {
            if (note.id === id) {
                console.log(notes)
                noteid = note.id


                notes.splice(index, 4)
                console.log(notes)

                //localStorage.setItem('notes',JSON.stringify(notes))




            }
            index++;
        })








    }

    public addNote(note: Note): void {
        localStorage.clear()
        let notesvalue = <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesvalue);
        if (!notes) {
            notes = [];
            notes.push(note)
            localStorage.setItem('notes', JSON.stringify(notes))
        }


    }

    public getNotes(): Note[] {
        let notesvalue = <string>localStorage.getItem('notes');
        return <Note[]>JSON.parse(notesvalue);

    }

}