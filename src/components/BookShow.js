import {useState} from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookEdit from "./BookEdit";

function BookShow({book}){

    const {deleteBookById} = useBooksContext();
    const [isEditMode, setIsEditMode] = useState(false); 

    const handleDeleteClick = () => deleteBookById(book.id);

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    }; 

    const onSubmit = () => {
        setIsEditMode(false);
    }

    let content = isEditMode ? <BookEdit book={book} onSubmitEdit={onSubmit}/> : <h2>{book.title}</h2>;

    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;