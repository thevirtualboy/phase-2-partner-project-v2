import React from "react";

function BookCard({book:{title, author, genre, img, publishYear, description}}) {
    return (
        <div style={{border:"solid", width:"300px", margin:"auto", background:"white"}}>
            <img  src={img} alt={title} />
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>First published in {publishYear}</p>
            <p>Genre: {genre}</p>
            <button>Show Description</button>
            <button>Add To Bookshelf</button>
            <button>Delete from Library</button> 
        </div>
    )
}

export default BookCard