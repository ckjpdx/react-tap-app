import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import KegList from './KegList';
import NavHeader from './NavHeader';

function App(){
  return (
    <div>
      <h1>React Tap App</h1>
      <NavHeader/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/keglist' component={KegList} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;