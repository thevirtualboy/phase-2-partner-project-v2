import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Bookshelf from './Bookshelf';
import NavBar from './NavBar';
import AddBook from './AddBook';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bookshelf">
          <Bookshelf />
        </Route>
        <Route exact path="/addbook">
          <AddBook />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
