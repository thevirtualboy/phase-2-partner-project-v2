import '../App.css';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Bookshelf from './Bookshelf';
import NavBar from './NavBar';
import AddBook from './AddBook';
import Header from './Header';

const pageStyle = {
  backgroundColor: "#f3eeda",
  borderRadius: "20px 20px 0 0",
  borderTop: "solid 1px",
  boxShadow: "0 -0.5px 5px"
}

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
      <div style={pageStyle}>
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
    </div>
  );
}

export default App;
