import React from 'react';
import sandyhut from './../assets/images/sandyhut.jpg';

function Welcome(){
  return (
    <div>
      <img src={sandyhut}/>
      <h2>Sandy Hut</h2>
      <h3>The Danny DeVito of Divebars</h3>
      <p>Since 1923 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Welcome;
