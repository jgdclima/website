import * as React from 'react';
import { render } from 'react-dom';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps 
} from "react-router-dom";
import Blog from './pages/Blog';
import Thanks from './pages/Thanks';
import Home from './pages/Home';
import Footer from './components/Footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router >
        <Header>
          <Link to='/'>João Lima</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/thanks'>Thanks</Link>
        </Header>

        <Route path='/' exact component={Home}/>
        <Route path='/blog' component={Blog} />
        <Route path='/thanks' component={Thanks} />
        <Footer/>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
