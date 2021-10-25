import React from "react";
import BookCard from "./BookCard"

function Home({allBooks}) {
    const displayBooks = allBooks.map(book => <BookCard key={book.id} book={book}/>)

    return (
        <div>
            {displayBooks}
        </div>
    )
}

export default Home