import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          src="/images/infomovia.png"
          alt="logo"
          style={{ width: "200px" }}
        />
      </Link>
    </div>
  );
}
