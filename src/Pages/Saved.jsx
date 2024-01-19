import React from "react";
import SavedCard from "../components/Savedcard/Savedcard";


function Saved() {
    return (
        <div className='saved-books-conteiner container-fluid'>
            <h1>Your saved books</h1>
            <div className="conteiner-fluid d-md-flex justify-content-center">
                <SavedCard />
            </div>
            
        </div>
    )
}

export default Saved;