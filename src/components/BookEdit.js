import {useState} from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({book, onSubmitEdit}){

    const [title, setTitle] = useState(book.title);
    const {editBookById} = useBooksContext();

    const handleChange = event => setTitle(event.target.value);

    const handleClick = event => {
        event.preventDefault();
        onSubmitEdit();
        editBookById(book.id, title)
    };

    return(
            <form className="book-edit" onSubmit={handleClick}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button is-primary">Save</button>
            </form>
        );
}

export default BookEdit;