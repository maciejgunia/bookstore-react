import React, { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Login from "./components/Login";

export const AuthContext = React.createContext();
export const RentContext = React.createContext({ rent: () => {}, return: () => {} });

function App() {
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [activeUserId, setActiveUser] = useState();

    useEffect(() => {
        setBooks([
            { id: "1", title: "In Search of Lost Time", userId: null },
            { id: "2", title: "Ulysses", userId: null },
            { id: "3", title: "Don Quixote", userId: null }
        ]);
        setUsers([
            { id: "1", name: "Maciek", books: [] },
            { id: "2", name: "Aga", books: [] },
            { id: "3", name: "Stefan", books: [] }
        ]);
    }, []);

    const rentBook = (bookId) => {
        const newUsers = users.map((user) => {
            if (user.id === activeUserId) {
                return { ...user, books: [...user.books, bookId] };
            } else {
                return user;
            }
        });

        const newBooks = books.map((b) => {
            if (b.id === bookId) {
                return { ...b, userId: activeUserId };
            } else {
                return b;
            }
        });

        setUsers(newUsers);
        setBooks(newBooks);
    };

    const returnBook = (bookId) => {
        const newUsers = users.map((user) => {
            if (user.id === activeUserId) {
                return { ...user, books: user.books.filter((b) => b !== bookId) };
            } else {
                return user;
            }
        });
        const newBooks = books.map((b) => {
            if (b.id === bookId) {
                return { ...b, userId: null };
            } else {
                return b;
            }
        });
        setUsers(newUsers);
        setBooks(newBooks);
    };

    return (
        <div className="App">
            <AuthContext.Provider value={activeUserId}>
                <RentContext.Provider value={{ rentBook, returnBook }}>
                    <Header>
                        <Login users={users} activeUser={activeUserId} setActiveUser={setActiveUser}></Login>
                    </Header>
                    <h2>Books</h2>
                    <BookList data={books}></BookList>
                </RentContext.Provider>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
