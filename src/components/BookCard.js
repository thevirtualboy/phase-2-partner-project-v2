import React, { useState } from "react";
import bookAdd from '../data/bookadd.png';
import bookAdded from '../data/bookadded.png';
import bookRemove from '../data/bookremove.png';

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border:"solid 1px #484839",
    borderRadius: "30px", 
    width:"350px",
    minHeight: "600px", 
    margin:"20px 50px", 
    background:"white",
    padding: "15px",
    boxShadow: "8px 8px 10px #A29e73",
    transition: "all .2s ease-in-out",
    position: "relative",
}


function BookCard({handleDelete, handleClick, book, book:{title, author, genre, img, publishYear, description, bookshelf}}) {
    // const [buttonText , setButtonText] = useState(bookshelf)
    const [clicked, setClicked] = useState(bookshelf)
    const [bookIcon, setBookIcon] = useState(bookAdded)

    return (
        <div className="card" style={cardStyle}>
            <img style={{height: "300px"}} src={img} alt={title} />
            <p className="bookshelfButton" title={clicked ? "Remove from Bookshelf" : "Add to Bookshelf"} onClick={() => {setClicked(!clicked); handleClick(book)}}>{clicked ? <img className="icon" src={bookIcon} onMouseOver={() => setBookIcon(bookRemove)} onMouseOut={() => setBookIcon(bookAdded)} /> : <img className="icon" src={bookAdd} />}</p>
            <h3 style={{marginTop: "1px"}}>{title}</h3>
            <p>Author: {author}</p>
            <p>First published in {publishYear}</p>
            <p>Genre: {genre}</p>
            <button>Show Description</button>
            {/* <button onClick={() => {setButtonText(!buttonText); handleClick(book)}}>{buttonText ? "Remove from Bookshelf" : "Add to Bookshelf "}</button> */}
            <button onClick={() => handleDelete(book)}>Delete from Library</button> 
        </div>
    )
}

export default BookCard