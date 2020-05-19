import * as React from 'react';
import { render } from 'react-dom';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  RouteComponentProps
} from "react-router-dom";
import Blog from './pages/Blog';
import Thanks from './pages/Thanks';
import Home from './pages/Home';
import Footer from './components/Footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import { Button } from '@material-ui/core';
import 'typeface-ibm-plex-sans';
import 'typeface-montserrat';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router >
          <Header>
            <Button component={RouterLink} to="/">João Lima</Button>
            <Button color="primary" component={RouterLink} to="/">Thanks</Button>
            <Button color="primary" component={RouterLink} to="/">Blog</Button>
            <Button color="primary" component={RouterLink} to="/">Resume</Button>
          </Header>

          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/thanks' component={Thanks} />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
