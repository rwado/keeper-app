import React from "react";
import { Delete } from "@mui/icons-material"



const Notes = (props) => {

    const handleDelete = (id) => {
      props.onDelete(id)
    }

 
    return (
        <div >
          {props.notes.map((note) =>
            <div className="note" key={note.id}>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <button onClick={() => handleDelete(note.id)}>
                    <Delete/>
                </button>

            </div>
          )}
        </div>
    );
}

export default Notes;