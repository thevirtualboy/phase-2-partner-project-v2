const cardStyle = {
    // display: "flex",
    flexDirection: "column",
    alignItems: "left",
    textAlign: "left",
    border:"solid 1px lightgray",
    borderRadius: "30px", 
    maxWidth: "1000px",
    minHeight: "500px", 
    margin:"20px 50px", 
    background:"white",
    padding: "15px",
    boxShadow: "8px 8px 10px #A29e73",
    transition: "all .2s ease-in-out",
    position: "relative",
}

function BookDetailsForm({book:{title, author, genre, img, publishYear, description}}) {
    if (img === "") {
        img = "http://lgimages.s3.amazonaws.com/nc-md.gif"
    }
    if (title === "") {
        title = "Title"
    }
    if (description === "") {
        description = "Description"
    }
    
    return (
        <div>
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
                <p style={{margin:"10px"}}>
                {description}
                </p>
            </div>
        </div>

    )
}

export default BookDetailsForm