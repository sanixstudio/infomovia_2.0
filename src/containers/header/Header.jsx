import {Logo, NavBar} from "../../components";
import './header.styles.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header