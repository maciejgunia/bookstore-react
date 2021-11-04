import { useContext } from "react";
import { AuthContext, RentContext } from "../App";
import s from "./Book.module.css";

const Book = ({ data }) => {
    const activeUserId = useContext(AuthContext);
    const { rentBook, returnBook } = useContext(RentContext);

    return (
        <div className={s.book}>
            <span className={s.id}>{data.id}</span>
            <span>{data.title}</span>
            {activeUserId && data.userId === null && <button onClick={() => rentBook(data.id)}>Rent this book</button>}
            {activeUserId === data.userId && <button onClick={() => returnBook(data.id)}>Return this book</button>}
        </div>
    );
};

export default Book;
