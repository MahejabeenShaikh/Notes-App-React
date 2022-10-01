 import React from 'react';
 import Note from './Note';
 import AddNote from './AddNote';
 import "./Note.css"
 
 const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
   return (
     <div className='notesList'> 
      {notes.map((notes)=> (
        <Note id={notes.id} text={notes.text} date={notes.date} handleDeleteNote={handleDeleteNote}/>
       
      ))}
       <AddNote handleAddNote={handleAddNote}/>
      
     </div>
   )
 }
 
 export default NotesList;