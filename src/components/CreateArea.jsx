import { useState } from "react";

export function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event){       
        const {name, value} = event.target;
        
        setNote((prevValue)=>{
            return ({prevValue, [name]:value})
        });
        
    }

    return (
      <div>
        <form
            className="create-note" 
            onSubmit={(event)=>{
            event.preventDefault()
            props.onSubmit(note)
            setNote({title: "", content: ""})
        }}>
          <input onChange={handleChange} name="title" type="text" placeholder="Title" value={note.title}/>
          <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }