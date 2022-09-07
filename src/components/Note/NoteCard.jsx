import { NoteContent } from "./NoteContent";
import { NoteTitle } from "./NoteTitle";


export function NoteCard(props) {
    return (
        <div className="note">
            <NoteTitle title={props.title} />
            <NoteContent content={props.content} id={props.id} onClick={props.onClick}/>
        </div>   
    );
}