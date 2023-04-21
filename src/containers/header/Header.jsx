import {Logo, NavBar, SearchBar, User} from "../../components";
import './header.styles.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar/>
      <NavBar />
      <User/>
    </div>
  );
}

export default Header