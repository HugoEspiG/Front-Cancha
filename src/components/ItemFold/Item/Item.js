import React from 'react';
import "./Item.css";

const Item = (props) => {
    return (
        <>
            <div className="card tam">
                <button type="button" className="border border-0 border-light bg-transparent border-opacity-1">
                    <img src={props.img} className="card-img itemImg" alt="" />
                    <div className="card-img-overlay content">
                        <div className="center">{props.nombre}</div>
                    </div>
                </button>
            </div>
        </>
    );
};

export default Item;