import React from "react";
import SavedCard from '../components/SavedCard/SavedCard';

function Saved() {
    return (
        <div className='saved-books-conteiner container-fluid'>
            <h1>Your saved books</h1>
            <div className="conteiner-fluid d-md-flex">
                <SavedCard />
            </div>
            
        </div>
    )
}

export default Saved;