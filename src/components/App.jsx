import { Header } from "./Header";
import { Footer } from "./Footer";
import { NoteCard } from "./Note/NoteCard";
import { notes } from "../note";

export function App() {
    return (
        <div>
            <Header/>
            {notes.map((element) => {
                return (
                    <NoteCard 
                        key={element.key}
                        title={element.title}
                        content={element.content}
                    />
                    )
            })}
            <Footer/>
        </div>
        
    );
}