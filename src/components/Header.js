import React from 'react'

const headerBoxStyle = { 
    marginBottom: "0", 
}

const h1Style = {
    marginLeft: "50px", 
    marginTop: "10px", 
    marginBottom: "10px",
    padding: "2px 10px",
    height: "100px",
    textAlign: "center",
    fontVariant: "small-caps",
    borderRadius: "10px 10px 0 0",
    background: "#7e6349",
    position: "absolute"
}

const h4Style = {
    marginLeft: "80px", 
    marginTop: "10px", 
    marginBottom: "0", 
    paddingBottom: "18px",
    position: "relative",
    top: "55px",
    width: "300px",
    padding: "5px",
    paddingTop: "0",
    paddingBottom: "100px",
    textAlign: "center",
    fontVariant: "small-caps",
    borderRadius: "10px 10px 0 0",
    background: "#b59d89",
}

function Header() {
    return (
        <div style={headerBoxStyle}>
            <h1 style={h1Style}>Book Nook</h1>
            <h4 style={h4Style}>Save and Display Your Favorite Books</h4>
        </div>
    )
}

export default Header