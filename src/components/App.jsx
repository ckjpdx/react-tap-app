import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import KegList from './KegList';
import NavHeader from './NavHeader';
import nighttile from './../assets/images/nighttile.jpg';

function App(){
  return (
    <div style={{background: `url(${nighttile})`}}>
      <style jsx global>{`
        * {
          text-align: center;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        img {
          width: 100%
        }
        h1, h2, h3 {
          font-family: 'Kalam', cursive;
          font-size: 2.5em;
          text-transform: uppercase
        }
        h2 {
          font-size 2em
        }
        h3 {
          font-size: 1.75em
        }
      `}</style>
      <style jsx>{`
          #top-flex-bar {
            display: flex;
            background: red;
            justify-content: space-between;
            padding: 15px;
          }
      `}</style>
      <div id='top-flex-bar'>
        <h1>Sandy Hut</h1>
        <NavHeader/>
      </div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/keglist' component={KegList} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
