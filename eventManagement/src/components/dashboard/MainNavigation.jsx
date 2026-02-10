import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="new">Create Event</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
