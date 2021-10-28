import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import bookAdd from '../data/bookadd.png';
import bookAdded from '../data/bookadded.png';
import bookRemove from '../data/bookremove.png';

const cardStyle = {
    // display: "flex",
    flexDirection: "column",
    alignItems: "left",
    textAlign: "left",
    border:"solid 1px lightgray",
    borderRadius: "30px", 
    width:"1000px",
    minHeight: "500px", 
    margin:"20px 50px", 
    background:"white",
    padding: "15px",
    boxShadow: "8px 8px 10px #A29e73",
    transition: "all .2s ease-in-out",
    position: "relative",
}

function BookDetails({handleClick, handleDelete}) {
    const [book, setBook] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [bookIcon, setBookIcon] = useState(bookAdded)

    const id = useParams().id

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setBook(data)
                setIsLoaded(true)
                if (data.bookshelf === true) {
                    setClicked(true)
                }
            })
        }, [])

    if(!isLoaded) return <h1>Loading</h1>

    const {title, author, genre, img, publishYear, description} = book

    return (
        <div style>
            <div class="book-details" style={cardStyle}>
                <div style={{display:"flex", margin:"10px"}}>
                <img style={{height: "300px", paddingRight:"20px"}} src={img} alt={title}></img>
                <div>
                    <h1>{title}</h1>
                    <h3>Author: {author}</h3>
                    <h4>First Published in {publishYear}</h4>
                    <h4> Genre: {genre}</h4>
                </div>
                </div>
                <p className="bookshelfButton" title={clicked ? "Remove from Bookshelf" : "Add to Bookshelf"} onClick={() => {setClicked(!clicked); handleClick(book)}}>{clicked ? <img className="iconDetail" src={bookIcon} onMouseOver={() => setBookIcon(bookRemove)} onMouseOut={() => setBookIcon(bookAdded)} /> : <img className="iconDetail" src={bookAdd} />}</p>
                <button style={{marginLeft:"10px"}} onClick={() => handleDelete(book)}>Delete from Library</button> 
                <Link to="/"><button style={{marginLeft:"10px"}}>Return to Library</button></Link>
                <p style={{margin:"10px"}}>
                {description}
                </p>
            </div>
        </div>

    )
}

export default BookDetails