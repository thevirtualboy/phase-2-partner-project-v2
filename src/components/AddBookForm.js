import BookDetailsForm from "./BookDetailsForm"

const formStyle = {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    maxWidth: "500px",
    marginLeft: "90px",
    background: "#b59d89",
    padding: "50px",
    border: "none",
    borderRadius: "0 10px 10px 10px"
}

const inputStyle = {
    width: "250px",
    border: "none",
    borderRadius: "5px",
    padding: "3px"
}

const descriptionStyle = {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','sansSerif'",
    height: "100px", 
    border: "none", 
    borderRadius: "5px"
}

const buttonStyle = {
    width: "150px", 
    height: "50px", 
    alignSelf: "flex-end", 
    marginTop: "15px",
    border: "solid 1px black",
    borderRadius: "5px",
}

const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1750px",
    margin: "auto",
    paddingTop: "100px"
}

const formLabelStyle = {
    marginLeft: "60px", 
    marginBottom: "0px",
    textAlign: "center",
    fontVariant: "small-caps",
    background: "#b59d89",
    border: "none",
    borderRadius: "10px 10px 0 10px",
    padding: "5px",
    width: "200px"
}

function AddBookForm({formData, formData: {title, author, genre, publishYear, img, description, bookshelf}, handleFormChange, handleSubmit, handleChecked}) {
    return (
        <div style={containerStyle}>
            <div style={{width: "600px", marginTop: "0px"}}>
                <h1 style={formLabelStyle}>Book Info:</h1>
                <form style={formStyle} onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        name="title" 
                        value={title} 
                        onChange={handleFormChange}
                        style={inputStyle}
                    ></input>
                    <input 
                        type="text" 
                        placeholder="Author" 
                        name="author" 
                        value={author} 
                        onChange={handleFormChange}
                        style={inputStyle}
                    ></input>
                    <input 
                        type="text" 
                        placeholder="Genre" 
                        name="genre" 
                        value={genre} 
                        onChange={handleFormChange}
                        style={inputStyle}
                    ></input>
                    <input 
                        type="number" 
                        placeholder="Year Published" 
                        name="publishYear" 
                        value={publishYear} 
                        onChange={handleFormChange}
                        style={inputStyle}
                    ></input>
                    <input 
                        type="text" 
                        placeholder="Cover Image URL" 
                        name="img" 
                        value={img} 
                        onChange={handleFormChange}
                        style={inputStyle}
                    ></input>
                    <textarea 
                        placeholder="Description" 
                        style={descriptionStyle} 
                        name="description" 
                        value={description} 
                        onChange={handleFormChange}
                    ></textarea>
                    <span style={{alignSelf: "flex-end"}}>
                        <label style={{fontVariant: "small-caps"}}>Add to Bookshelf?</label>
                        <input 
                            id="checkbox"
                            type="checkbox" 
                            name="bookshelf" 
                            checked={bookshelf}
                            onChange={handleChecked}
                        ></input>
                    </span>
                    <button id="formButton" type="submit" style={buttonStyle}>Submit Book</button>
                </form>
            </div>
            <div style={{width: "1100px"}}>
                <BookDetailsForm book={formData} />
            </div>
        </div>
    )
}

export default AddBookForm