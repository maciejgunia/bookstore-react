import Book from "./Book";
import s from "./BookList.module.css";

const BookList = ({ data }) => {
    return (
        <div className={s.bookList}>
            {data.map((book) => (
                <Book key={book.id} data={book}></Book>
            ))}
        </div>
    );
};

export default BookList;
