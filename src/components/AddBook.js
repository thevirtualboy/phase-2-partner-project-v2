const formStyle = {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    maxWidth: "500px",
    marginLeft: "90px",
    paddingBottom: "100%"
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

function AddBook({formData, handleFormChange, handleSubmit, handleChecked}) {
    return (
        <>
            <h1 style={{marginLeft: "60px"}}>Form:</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleFormChange}
                    style={inputStyle}
                ></input>
                <input 
                    type="text" 
                    placeholder="Author" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleFormChange}
                    style={inputStyle}
                ></input>
                <input 
                    type="text" 
                    placeholder="Genre" 
                    name="genre" 
                    value={formData.genre} 
                    onChange={handleFormChange}
                    style={inputStyle}
                ></input>
                <input 
                    type="number" 
                    placeholder="Year Published" 
                    name="publishYear" 
                    value={formData.publishYear} 
                    onChange={handleFormChange}
                    style={inputStyle}
                ></input>
                <input 
                    type="text" 
                    placeholder="Cover Image URL" 
                    name="img" 
                    value={formData.img} 
                    onChange={handleFormChange}
                    style={inputStyle}
                ></input>
                <textarea 
                    placeholder="Description" 
                    style={{height: "75px"}} 
                    name="description" 
                    value={formData.description} 
                    onChange={handleFormChange}
                ></textarea>
                <span style={{alignSelf: "flex-end"}}>
                    <label>Add to Bookshelf?</label>
                    <input 
                        type="checkbox" 
                        name="bookshelf" 
                        checked={formData.bookshelf}
                        onChange={handleChecked}
                    ></input>
                </span>
                <button type="submit" style={buttonStyle}>Submit Book</button>
            </form>
        </>
    )
}

export default AddBook