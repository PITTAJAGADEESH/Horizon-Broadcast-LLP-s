import "./index.css";

const Header = ({ onLanguageChange }) => {
  return (
    <div className="header">
      <h1 className="company-name">Horizon Broadcast LLP</h1>
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#tvShows">TV Shows</a>
          </li>
          <li>
            <a href="#sports">Sports</a>
          </li>
          <li>
            <a href="#live">Live</a>
          </li>
        </ul>
      </nav>
      <div className="language-selector">
        <label htmlFor="language">Language: </label>
        <select id="language" onChange={onLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
