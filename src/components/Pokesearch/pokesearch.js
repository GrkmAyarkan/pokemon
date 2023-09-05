import React from 'react'
import './pokesearch.css'

function Pokesearch() {
    return (
        <div id="container">
            <div className="pokewrap">
                <div className="top"></div>
                <div className="content">
                    <input type="text" class='input' placeholder='Search...' />
                    <div className="fa fa-search"></div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
}
export default Pokesearch;