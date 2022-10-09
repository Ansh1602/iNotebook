import React, {useState} from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "63409afaa2b1ef97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b1ef97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b1ef97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b1ef97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b1ef97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "63409afaa2b1ef97938a217b",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-10-07T21:32:42.438Z",
          "__v": 0
        },
        {
          "_id": "6340a16e900853ad0c82a3ac",
          "user": "633f5a748f60ee59d9f53811",
          "title": "my Tittlelee",
          "description": "Please wake up early breakfast",
          "tag": "Personal private",
          "date": "2022-10-07T22:00:14.100Z",
          "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)
    

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;