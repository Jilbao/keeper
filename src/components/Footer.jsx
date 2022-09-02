const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export function Footer() {
    return (
        <footer>
            <p>Copyright by Jilbao, {currentYear}</p>
        </footer>
    );
}