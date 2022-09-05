import { notes } from "../../note";
import { NoteContent } from "./NoteContent";
import { NoteTitle } from "./NoteTitle";

export function NoteCard() {
    return (
        notes.map((element)=>{
            return (
                <div className="note">
                    <NoteTitle title={element.title}/>
                    <NoteContent content={element.content}/>
                </div>
            )    
        })    
    );
}