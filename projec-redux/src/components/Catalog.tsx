import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { addProductToCart } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';


const Catalog: React.FC = () => {

    const dispatch = useDispatch()
    const [ catalog, setCatalog ] = useState<IProduct[]>([]);
    
    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    }, [])

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product))
    }, [dispatch]);

    return(

        <div>

            <h1>Catalog</h1>
    
            {catalog.map(product => (
              <article>
                 <strong>{product.title}</strong> {"  - "}
                 <span>{product.price}</span> {"  "}

                 <button
                  type="button"
                  onClick={() => handleAddProductToCart(product)}

                  >Comprar</button>
              </article>  
            ))}
        </div>
    )
}

export default Catalog;
