import React from 'react';
import Item from '../Item/Item';

const ItemList = (props) => {
    return (
        <div className="row justify-content-center">
        {props.data.map((cerv)=>
        <div key={cerv.id} className="col-3 distancia" align="center">
            <Item id={cerv.id} nombre={cerv.nombre} img={cerv.img}></Item>
        </div>)}
    </div>
    );
};

export default ItemList;