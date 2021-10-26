const formStyle = {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    maxWidth: "500px",
    marginLeft: "90px",
}

const inputStyle = {
    width: "250px"
}

const buttonStyle = {
    width: "150px", 
    height: "50px", 
    alignSelf: "flex-end", 
    marginTop: "15px"
}

function AddBook({formData: {title, author, genre, publishYear, img, description, bookshelf}, handleFormChange, handleSubmit, handleChecked}) {
    return (
        <div style={{height: "100vh"}}>
            <h1 style={{marginLeft: "60px"}}>Form:</h1>
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
                    style={{height: "75px"}} 
                    name="description" 
                    value={description} 
                    onChange={handleFormChange}
                ></textarea>
                <span style={{alignSelf: "flex-end"}}>
                    <label>Add to Bookshelf?</label>
                    <input 
                        type="checkbox" 
                        name="bookshelf" 
                        checked={bookshelf}
                        onChange={handleChecked}
                    ></input>
                </span>
                <button type="submit" style={buttonStyle}>Submit Book</button>
            </form>
        </div>
    )
}

export default AddBook