import React from 'react';
import { Link } from 'react-router-dom';

function NavHeader(){
  return (
    <div>
      <nav>
        <Link to='/'>Welcome</Link>
        <Link to='/keglist'>Keg List</Link>
      </nav>
    </div>
  );
}

export default NavHeader;
