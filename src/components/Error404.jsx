import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <h1>Whoops!</h1>
      <h2>Looks like you're lost. You should head back <Link to="/">Home</Link> where it's safe!</h2>
    </div>
  );
}

export default Error404;
