import React from 'react';
import { Link } from 'react-router-dom';

function NavHeader(){
  let linkStyle = {
    textDecoration: 'none',
    color: 'black',
    padding: 10,
    margin: 5,
    background: 'gray',
    borderRadius: 5
  }
  return (
    <div id='flex-container'>
      <style jsx>{`
          #flex-container {
            display: flex;
            justify-content: space-around;
          }
          p {
            font-size: 0.8em;
            color: orange;
            text-transform: uppercase;
            letter-spacing: 5px;

          }
          `}</style>
      <div>
        <p>Navigation</p>
      </div>
      <div>
        <nav>
          <Link to='/' style={linkStyle}>Welcome</Link>
          <Link to='/keglist' style={linkStyle}>Keg List</Link>
        </nav>
      </div>
    </div>
  );
}

export default NavHeader;
