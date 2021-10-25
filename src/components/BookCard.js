import React, { useState } from "react";

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border:"solid 1px #484839",
    borderRadius: "30px", 
    maxWidth:"400px", 
    margin:"10px", 
    background:"white",
    padding: "15px",
    boxShadow: "8px 8px 10px #A29e73",
    flexBasis: "20%"
}


function BookCard({handleDelete, handleClick, book, book:{title, author, genre, img, publishYear, description, bookshelf}}) {
    const [buttonText , setButtonText] = useState(bookshelf)

    return (
        <div style={cardStyle}>
            <img  src={img} alt={title} />
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>First published in {publishYear}</p>
            <p>Genre: {genre}</p>
            <button>Show Description</button>
            <button onClick={() => {setButtonText(!buttonText); handleClick(book)}}>{buttonText ? "Remove from Bookshelf" : "Add to Bookshelf "}</button>
            <button onClick={() => handleDelete(book)}>Delete from Library</button> 
        </div>
    )
}

export default BookCard