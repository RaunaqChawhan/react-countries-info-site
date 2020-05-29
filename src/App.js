import React from 'react';
// import Loading from './containers/Loading';
// import Button from './containers/Button';
import CountryList from './containers/CountryList';
import CountrySearch from './containers/CountrySearch';
import SelectRegion from './containers/SelectRegion';
import { Switch, Route } from 'react-router-dom';
import DetailedInfo from './containers/DetailedInfo';
import Header from './containers/Header';

// function App() {
//   return (
//     <div className='App'>
//       <CountrySearch />
//       <SelectRegion />
//       {/* <Button /> */}
//       <CountryList />
//       <Loading />
//     </div>
//   )
// }

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
            {/* <Button /> */}
            <CountryList />
            {/* <Loading /> */}
          </main>
        </Route>
        <Route path="/:country" component={DetailedInfo} />
      </Switch>
      
    </div>
  )
}

export default App;
