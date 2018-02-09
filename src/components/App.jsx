import React from 'react'; // always import core React library
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';

function App(){
  return (
    <div>
      <h1>App Works</h1>
      <Welcome/>
      <Switch>
      </Switch>
    </div>
  );
}

export default App;
