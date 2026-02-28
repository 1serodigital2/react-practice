import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="events">Events</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
