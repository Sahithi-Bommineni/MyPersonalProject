import { useState, useEffect } from "react";
import "../style/homepage.css";

function Header() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Fetch user data from backend API
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUsername(user.username); // Assuming the user object has a 'name' property
        }
    }, []);

    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem("user");
        // Redirect to login page
        window.location.href = "/login";
    };

  return (
    <>
    <div className="header">
    <header>
        <div className="logo">Life Canvas</div>
        <div className="user-info">Welcome, {username}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    </header>
    <nav className="navbar">
        <ul className="nav-menu">
            <li className="nav-item">
                <a href="/home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/games" className="nav-link">Games</a>
            </li>
            <li className="nav-item">
                <a href="/home" className="nav-link">Trackers</a>
            </li>
            <li className="nav-item">
                <a href="/home" className="nav-link">Settings</a>
            </li>
            <li className="nav-item">
                <a href="/home" className="nav-link">Settings</a>
            </li>
        </ul>
    </nav>
    </div>
    </>
  );
}

export default Header;