import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import {getItems} from '../../../api/ItemApi';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            const resp = await getItems();
            setData(resp);
            setLoading(false);
        }
        loadData();
    }, [])

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> : <ItemList data={data}/>
            }
        </>
    );
};

export default ItemListContainer;