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

    function removeNote(id){
        console.log("delete");
        setNotes((prevValue)=>{
            return prevValue.filter((value, index) => {
                return index !== id
            })
        })
    };

    return (
        <div>
            <Header/>
            <CreateArea onSubmit={addNote}/>
            {notes.map((element, index) => {
                return (
                    <NoteCard         
                        key={index}
                        id={index}             
                        title={element.title}
                        content={element.content}
                        onClick={removeNote}
                    />
                    )
            })}
            <Footer/>
        </div>
        
    );
}