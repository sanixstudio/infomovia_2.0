import {Logo, NavBar, SearchBar} from "../../components";
import './header.styles.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar/>
      <NavBar />
    </div>
  );
}

export default Header