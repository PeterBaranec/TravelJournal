import "../components/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faEarthEurope} className="nav__icon" />
      <h2 className="nav__title">my travel journal.</h2>
    </nav>
  );
}

export default Navbar;
