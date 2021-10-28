import BookCard from "./BookCard"


const homeStyle = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    justifyContent: "space-around",
}

function Bookshelf({handleDelete, bookshelf, updateShelf, deleteBook}) {
    const displayBooks = bookshelf.map(book =>
        <BookCard
            key={book.id}
            book={book}
            updateShelf={updateShelf}
            deleteBook={deleteBook}
            handleDelete={handleDelete}
        />)

    return (
        <div style={homeStyle}>
            {displayBooks}
        </div>
    )
}

export default Bookshelf