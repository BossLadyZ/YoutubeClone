import React from 'react';
import '@fontsource/roboto';
import Header from './Header';
import Sidebar from './Sidebar';
import Mainarea from './Mainarea';
import SearchPage from './SearchPage'
import './AllCss/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className= {classes.root}> 
      
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/">
        <div className= "app__page">
          <Sidebar />
          <Mainarea/>
    </div>
        </Route>
        <Route exact path="/search/:searchTerm">
        <div className= "app__page">
          <Sidebar />
          <SearchPage/>
    </div>
        </Route>
      </Switch>
    </Router>

    
    
     
      {/** Sidebar */}
      {/** Main Area */}
      {/** footer */}
    </div>
  );
}

export default App;
