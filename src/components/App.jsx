import React from 'react'; // always import core React library
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import KegList from './KegList';

function App(){
  return (
    <div>
      <h1>React Tap App</h1>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/keglist' component={KegList} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
