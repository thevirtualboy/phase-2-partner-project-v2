import React, { useState } from "react";
import bookAdd from '../data/bookadd.png';
import bookAdded from '../data/bookadded.png';
import bookRemove from '../data/bookremove.png';
import { Link } from "react-router-dom";

const cardStyle = {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border:"solid 1px lightgray",
    borderRadius: "20px", 
    width:"310px",
    height: "425px", 
    margin:"20px 20px", 
    background:"white",
    padding: "15px",
    paddingBottom: "35px",
    boxShadow: "8px 8px 10px #A29e73",
    transition: "all .2s ease-in-out",
    position: "relative",
}


function BookCard({handleDelete, handleClick, book, book:{title, author, img, bookshelf}}) {
    const [clicked, setClicked] = useState(bookshelf)
    const [bookIcon, setBookIcon] = useState(bookAdded)

    return (
        <div className="card" style={cardStyle}>
            <div style={{display:"flex", margin:"10px"}}>
                <div style={{width:"80%", textAlign:"right"}}>
                    <img style={{height: "290px"}} src={img} alt={title} />
                </div>
                <div style={{width:"20%", textAlign:"right"}}>
                    <p
                        className="bookshelfButton"
                        title={clicked ? "Remove from Bookshelf" : "Add to Bookshelf"}
                        onClick={() => {setClicked(!clicked); handleClick(book)}}
                    >
                        {clicked ?
                            <img
                                className="icon"
                                src={bookIcon}
                                alt="book icon"
                                onMouseOver={() => setBookIcon(bookRemove)}
                                onMouseOut={() => setBookIcon(bookAdded)}
                            />
                            :
                            <img
                                className="icon"
                                src={bookAdd}
                                alt="book icon"
                            />
                        }
                    </p>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{author}</p>
            <Link to={`/book/${book.id}`}><button style={{marginRight:"10px"}}>Show Details</button></Link>
            <button onClick={() => handleDelete(book)}>Delete from Library</button> 
        </div>
    )
}

export default BookCard