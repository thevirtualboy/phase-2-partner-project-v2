import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                to="/bookshelf"
                exact
            >
                Bookshelf
            </NavLink>
            <NavLink
                to="/addbook"
                exact
            >
                Add a Book
            </NavLink>
        </div>
    )
}

export default NavBar