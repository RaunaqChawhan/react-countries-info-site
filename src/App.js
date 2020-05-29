import React from 'react';
import CountryList from './containers/CountryList';
import CountrySearch from './containers/CountrySearch';
import SelectRegion from './containers/SelectRegion';
import { Switch, Route } from 'react-router-dom';
import DetailedInfo from './containers/DetailedInfo';
import Header from './containers/Header';

function App() {
  return (
    <div className="countries-app">
      <Header />
      <Switch>
        <Route exact path="/">
          <main className="main-panel">
            <nav className="selection-criteria">
              <CountrySearch />
              <SelectRegion />
            </nav>
            <CountryList />
          </main>
        </Route>
        <Route path="/:country" component={DetailedInfo} />
      </Switch>
      
    </div>
  )
}

export default App;
