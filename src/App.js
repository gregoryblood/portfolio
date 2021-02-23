import React from 'react';
import Title from './Components/Title'
import Body from './Components/Body'
import { useRouteMatch, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import MusicMajik from './Pages/musicmagik';
import WhatToWear from './Pages/whattowear';
import PureHoney from './Pages/purehoney';
import Ships from './Pages/ships';
import MasterBlaster from './Pages/masterblaster';
import Capstone from './Pages/capstone';
import Overseer from './Pages/overseer';
import KingsGambit from './Pages/kingsgambit'

class App extends React.Component  {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
        <Route path="/capstone">
            <Capstone/>
          </Route>
          <Route path="/master-blaster">
            <MasterBlaster/>
          </Route>
          <Route path="/whattowear">
            <WhatToWear/>
          </Route>
          <Route path="/musicmajik">
            <MusicMajik/>
          </Route>
          <Route path="/purehoney">
            <PureHoney/>
          </Route>
          <Route path="/ships">
            <Ships/>
          </Route>
          <Route path="/overseer">
            <Overseer/>
          </Route>
          <Route path="/kings-gambit">
            <KingsGambit/>
          </Route>
          <Route path="/">
            <Title/>
            <Body/>
          </Route>
        </Switch>
        
      </div>
    );
  }
}
//<Navbar/>
export default App;
