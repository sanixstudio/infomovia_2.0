import {Logo, NavBar, SearchBar} from "../../components";
import User from "../../components/user/User";
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