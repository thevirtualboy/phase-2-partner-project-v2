import '../App.css';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Bookshelf from './Bookshelf';
import NavBar from './NavBar';
import AddBook from './AddBook';
import Header from './Header';

function App() {
  const [allBooks, setAllBooks] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => setAllBooks(data))
  }, [])

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home allBooks={allBooks}/>
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
