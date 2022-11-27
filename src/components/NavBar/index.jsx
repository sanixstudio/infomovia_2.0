import './navBar.styles.css'
import React from 'react'

const index = () => {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <a href="#1">Home</a>
        </li>
        <li>
          <a href="#1">Playing Now</a>
        </li>
        <li>
          <a href="#1">Upcoming</a>
        </li>
        <li>
          <a href="#1">Top Rated</a>
        </li>
      </ul>
    </div>
  );
}

export default index