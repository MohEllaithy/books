import useBooksContext from "../hooks/useBooksContext";
import BookShow from "./BookShow";

function BookList(){

    const {books} = useBooksContext();

    const renderedBooksList = books.map(book => <BookShow key={book.id} book={book} />);                             

    return(
        <div className="book-list">{renderedBooksList}</div>
    );
}

export default BookList;