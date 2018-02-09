import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import KegList from './KegList';
import NavHeader from './NavHeader';

function App(){
  let topFlexBar = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20
  };
  return (
    <section>
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
      `}</style>
    <div style={topFlexBar}>
        <h1>React Tap App</h1>
        <NavHeader/>
      </div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/keglist' component={KegList} />
        <Route component={Error404}/>
      </Switch>
    </section>
  );
}

export default App;
