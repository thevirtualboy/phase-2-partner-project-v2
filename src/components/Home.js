import React from "react";
import BookCard from "./BookCard"

const homeStyle = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    justifyContent: "space-around",
}

function Home({allBooks, updateShelf, handleClick}) {
    const displayBooks = allBooks.map(book => <BookCard key={book.id} book={book} updateShelf={updateShelf} handleClick={handleClick} />)

    return (
        <div style={homeStyle}>
            {displayBooks}
        </div>
    )
}

export default Home