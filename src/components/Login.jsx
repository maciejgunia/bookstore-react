import "./Login.module.css";

const Login = ({ users, activeUser, setActiveUser }) => {
    return (
        <div>
            <select value={activeUser} onChange={(e) => setActiveUser(e.target.value)}>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
                <option value="">logged out</option>
            </select>
        </div>
    );
};

export default Login;
