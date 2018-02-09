import React from 'react'; // always import core React library
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import KegList from './KegList';

function App(){
  return (
    <div>
      <h1>App Works</h1>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/keglist' component={KegList} />
      </Switch>
    </div>
  );
}

export default App;
