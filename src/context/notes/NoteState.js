import React, {useState} from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "63409afaa2b1ef97938a22217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afa23a2b1ef979382217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b12ef297938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afa22a2b1e34f97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa22b1e232f97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b1e11f979238a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "6340a161e900853232323ad0c82a3ac",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Tittlelee",
          "description": "Please wake up early breakfast",
          "tag": "Personal private",
          "date": "2022-10-07T22:00:14.100Z",
          "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)
    
    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO api call
        console.log('THis is added');
        
        const note = {
            "_id": "63409afaa2b1234ef97938a22217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        };
        setNotes(notes.concat(note))

    }

    // Delete a Note
    const deleteNoNote = (id) => {

    }

    // Edit a Note
    const editNoNote = (id) => {

    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNoNote, editNoNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;