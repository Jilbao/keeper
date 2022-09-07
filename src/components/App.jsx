import { Header } from "./Header";
import { Footer } from "./Footer";
import { NoteCard } from "./Note/NoteCard";
import { CreateArea } from "./CreateArea";
import { useState } from "react";

export function App() {
    const [notes, setNotes] = useState([{title: "testtitle", content: "testcontent"}]);

    function addNote (note) {
        setNotes((prevValue)=>{
            return [...prevValue, note];
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea onSubmit={addNote}/>
            {notes.map((element) => {
                return (
                    <NoteCard                      
                        title={element.title}
                        content={element.content}
                    />
                    )
            })}
            <Footer/>
        </div>
        
    );
}