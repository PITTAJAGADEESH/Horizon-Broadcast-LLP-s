import "./index.css";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu-container">
      {Object.keys(menuItems).map((key) => (
        <div
          className="menu-item-container"
          key={key}
          style={{ backgroundImage: `url(${menuItems[key].image})` }}
        >
          <div className="menu-overlay"></div>
          <h2 className="menu-title">{menuItems[key].title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Menu;
