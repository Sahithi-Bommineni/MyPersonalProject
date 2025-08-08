import "../style/homepage.css";

function Header() {
  return (
    <>
    <header className="header">
        <div className="logo">Life Canvas</div>
        <div className="user-info">Welcome </div>
    </header>
    <nav className="navbar">
        <ul className="nav-menu">
            <li className="nav-item">
                <a href="/home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href="/home" className="nav-link">Games</a>
            </li>
            <li className="nav-item">
                <a href="/home" className="nav-link">Trackers</a>
            </li>
            <li className="nav-item">
                <a href="/home" className="nav-link">Settings</a>
            </li>
        </ul>
    </nav>
    </>
  );
}

export default Header;