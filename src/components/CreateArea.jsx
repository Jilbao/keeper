import { useState } from "react";

export function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event){       
        const {name, value} = event.target;
        
        setNote((prevValue)=>{
            if (name === "title") {
                return {...prevValue, title: value}
            }else if (name === "content"){
                return {...prevValue, content: value}
            }    
        });
        
    }

    return (
      <div>
        <form onSubmit={(event)=>{
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