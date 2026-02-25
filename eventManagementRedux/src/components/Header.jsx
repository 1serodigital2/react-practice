import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="events">Events</NavLink>
        </li>
        <li>
          <NavLink to="create-new">Create new event</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
