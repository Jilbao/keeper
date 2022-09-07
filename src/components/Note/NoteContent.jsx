import DeleteIcon from '@mui/icons-material/Delete';


export function NoteContent(props) {
    return <div>
                <p> {props.content} </p>
                <button id={props.id} onClick={()=>{props.onClick(props.id)}}><DeleteIcon/></button>
            </div> 
}