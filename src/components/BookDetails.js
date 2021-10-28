import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import bookAdd from '../data/bookadd.png';
import bookAdded from '../data/bookadded.png';
import bookRemove from '../data/bookremove.png';

const main = {
    display:"flex",
    flexWrap:"wrap",
    marginTop:"20px",
    justifyContent:"space-around",
}

const cardStyle = {
    flexDirection: "column",
    // alignItems: "left",
    // textAlign: "left",
    border:"solid 1px lightgray",
    borderRadius: "20px", 
    maxWidth:"1000px",
    minHeight: "500px", 
    margin:"20px 50px", 
    background:"white",
    padding: "15px",
    boxShadow: "8px 8px 10px #A29e73",
    transition: "all .2s ease-in-out",
    position: "relative",
}

function BookDetails({handleDelete, updateShelf}) {
    const [book, setBook] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [bookIcon, setBookIcon] = useState(bookAdded)

    const id = useParams().id

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setBook(data)
                setIsLoaded(true)
            })
        }, [])

    function handleClick() {
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bookshelf: !bookshelf,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                setBook(data)
                updateShelf(data)
            })
    }

    if(!isLoaded) return <h1>Loading</h1>

    const {title, author, genre, img, publishYear, description, bookshelf} = book

    return (
        <div style={main}>
            <div className="book-details" style={cardStyle}>
                <div style={{display:"flex", margin:"10px"}}>
                    <div style={{width:"25%"}}>
                        <img style={{height: "290px", paddingRight:"20px"}} src={img} alt={title}></img>
                    </div>
                    <div style={{width:"25%"}}>
                        <h1>{title}</h1>
                        <h3>Author: {author}</h3>
                        <h4>First Published in {publishYear}</h4>
                        <h4> Genre: {genre}</h4>
                    </div>
                    <div style={{width:"50%", textAlign:"right", paddingRight:"10px"}}>
                        <p 
                        className="bookshelfButton"
                        title={bookshelf ? "Remove from Bookshelf" : "Add to Bookshelf"}
                        onClick={handleClick}
                        >
                            {bookshelf ?
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

                <button style={{marginLeft:"10px", marginTop:"20px"}} onClick={() => handleDelete(book)}>
                    Delete from Library
                </button> 
                <Link to="/"><button style={{marginLeft:"10px", marginTop:"20px"}}>Return to Library</button></Link>
                
                <h4 style={{marginLeft:"10px"}}>Description</h4>
                <p style={{margin:"10px", marginTop:"20px"}}>
                {description}
                </p>
            </div>
        </div>

    )
}

export default BookDetails