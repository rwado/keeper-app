import React,{ useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';




export default function AddNoteArea(props) {
    const [note, setNote] = useState({id: "", title: "", content: ""})
    const [isExpanded, setExpanded] = useState(false);

    const onAddHandle = (event) => {
        event.preventDefault();
        props.addNote(note);
        setNote({title: "", content: ""})
    }

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        
        setNote(prevValue => ({
            ...prevValue,
            [name] : value
        }))
    }

    const expand = () => {
        setExpanded(true)
    }

    return (
    <div>
        <form className="create-note">
            {isExpanded && (
              <input
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleOnChange}
              />
            )}
          
          <textarea
             name="content"
             onClick={expand}
             placeholder="Take a note..."
             rows={isExpanded ? 3 : 1}
             value={note.content}
             onChange={handleOnChange}
          />
          <Zoom in={isExpanded}>
            <Fab onClick={onAddHandle}>
                <AddIcon/>
            </Fab>
          </Zoom>
        </form>
      </div>
    )
}