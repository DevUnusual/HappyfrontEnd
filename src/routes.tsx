import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMaps';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" component={OrphanagesMap} />
      
      <Route path="/orphanage/:id" component={Orphanage} />
      <Route path="/orphanages/create" component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;