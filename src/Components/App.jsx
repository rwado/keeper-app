import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import AddNoteArea from "./AddNoteArea";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const [notes, setNotes] = useState([]);

    const handleAddNote = (note) => {
        setNotes([...notes, {...note, id: uuidv4()}])
    }

    const handleDelete = (id) => {
        setNotes(prevNotes => (prevNotes.filter((note) => note.id !== id)))
    }

    return (
        <div>
            <Header />
            <AddNoteArea addNote={handleAddNote}/>
            <Notes notes={notes} onDelete={handleDelete}/>
            <Footer />
        </div>
    )
}

export default App;