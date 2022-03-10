import React from 'react';
import { useSelector } from 'react-redux';


const Catalog: React.FC = () => {

    //Acesando o Store
    // Podemos usa o useStore mas é melhor usar o userSelector 

    const catalog = useSelector(state => state);

    console.log(catalog);
    
    

    return(
        <h1>Catalog</h1>
    )
}

export default Catalog;
