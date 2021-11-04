import s from "./Header.module.css";

const Header = ({ children }) => {
    return (
        <div className={s.header}>
            <h1>Bookstore</h1>
            {children}
        </div>
    );
};

export default Header;
