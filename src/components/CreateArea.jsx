import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});
    const [isClicked, setIsClicked] = useState(false);

    function handleChange(event){       
        const {name, value} = event.target;
        
        setNote((prevValue)=>{
            return ({...prevValue, [name]:value})
        });
        console.log(note);
    }

    function Clicked(){
      setIsClicked(true);
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
          {isClicked && <input  onChange={handleChange} name="title"
           type="text" 
           placeholder="Title" value={note.title}/>}
          <textarea onClick={Clicked} onChange={handleChange} name="content" placeholder="Take a note..."
           rows={isClicked ? "3" : "1"} value={note.content}/>
          <Zoom in={isClicked?true:false}>  
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
          
        </form>
      </div>
    );
  }