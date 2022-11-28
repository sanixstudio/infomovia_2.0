import './navBar.styles.css'
import React from 'react'

const index = () => {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#playing-now">Playing Now</a>
        </li>
        <li>
          <a href="#up-coming">Upcoming</a>
        </li>
        <li>
          <a href="#top-rated">Top Rated</a>
        </li>
      </ul>
    </div>
  );
}

export default index