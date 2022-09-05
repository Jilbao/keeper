import { Header } from "./Header";
import { Footer } from "./Footer";
import { NoteCard } from "./Note/NoteCard";


export function App() {
    return (
        <div>
            <Header/>
            <NoteCard/>
            <Footer/>
        </div>
        
    );
}