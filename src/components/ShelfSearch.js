const searchContainer = {
    display: "flex",
    justifyContent: "center",
}

const searchBox = {
    marginTop: "20px",
    height: "30px",
    width: "800px",
    textAlign: "center",
    border: "solid 1px lightgray",
    borderRadius: "5px"
}

function ShelfSearch({search, handleSearch}) {
    return (
        <div style={searchContainer}>
            <input
                style={searchBox}
                type="text"
                placeholder="Search books by name..."
                value={search}
                onChange={handleSearch}
            ></input>
        </div>
    )
}

export default ShelfSearch