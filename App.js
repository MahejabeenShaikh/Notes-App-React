import  { useEffect, useState } from 'react'
import {nanoid} from "nanoid";
import Header from './Components/Header';
import Search from './Components/Search';
import NotesList from './Components/NotesList';
import "./Components/Note.css";
 
const App = () => {
    const [notes, setNotes] = useState(
      () => { 
        const savedData = localStorage.getItem('notes-data');
        const parsedData = JSON.parse(savedData);
        return parsedData || [
    {
      id: nanoid(),
      text : "This is My First note!",
      date : "09/22/2022"
    },
    
    {
      id: nanoid(),
      text : "Pick up the Groceries",
      date : "09/23/2022"
    },

    {
      id: nanoid(),
      text : "New Note",
      date : "09/24/2022"
    },

    {
      id: nanoid(),
      text : "Type here to Make Note....",
      date : "09/25/2022"
    },
  ];
});

  const [searchText, setSearchText] = useState('');

  const[darkMode, setDarkMode] =useState(false);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes]);

   
  

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !==id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='main'>
      <Header handleToggleDarkMode = {setDarkMode}/>
     <Search handleSearchNote={setSearchText}/>
    <NotesList 
    notes={notes.filter((note)=>
      note.text.toLowerCase().includes(searchText))} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}/>
    </div>
    </div>
  )
}

export default App;