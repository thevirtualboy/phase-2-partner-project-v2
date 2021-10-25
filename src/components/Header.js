import React from 'react'

const headerBoxStyle = {
    backgroundColor: "#eaeded", 
    marginBottom: "0", 
}

const h1Style = {
    marginLeft: "50px", 
    marginTop: "10px", 
    marginBottom: "10px"
}

const h4Style = {
    marginLeft: "80px", 
    marginTop: "10px", 
    marginBottom: "0", 
    paddingBottom: "18px"
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