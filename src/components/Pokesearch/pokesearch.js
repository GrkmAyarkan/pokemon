import React from 'react'
import './pokesearch.css'

function Pokesearch(props) {
    return (
        <div id="container">
            <div className="pokewrap">
                <div className="top"></div>
                <div className="content">
                    <input type={props.type} className='input' placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
}
export default Pokesearch;