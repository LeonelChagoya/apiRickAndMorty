import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidenInfo = ({ residentsUrl }) => { //CARGAMOS LOS DATOS DE RESIDENTURL//

    const [residentItem, setResidentItem] = useState({}); //CREAMOS NUESTRO ESTADO PARA CONSUMIR LA SIGUIENTE API//

    useEffect(() => {
        axios
            .get(residentsUrl) //COMO LAS URL VIENEN YA EN OBJETO NO SE NECESITA OTRA PROPIEDAD//
            .then((res) => setResidentItem(res.data))


    }, [residentsUrl])
const status=residentItem?.status;
    return (
        <div className='cardCharacters'>
            <img className='cardimage' src={residentItem?.image} alt="" />
         
                {(status) == "Dead" ?( <div className='dead'>{status}</div>)
                 : (status) == "Alive" ?( <div className='alive'>{status}</div>): ( <div className='unknown'>{status}</div>)}
                
            


            <h4>{residentItem?.name}</h4>
            <p>Species</p><strong>{residentItem?.species}</strong>
            <p>Origin</p><strong>{residentItem?.origin?.name}</strong>
            <p>Episodes where appear</p><strong>{residentItem.episode?.length}</strong>

        </div>
    );
};

export default ResidenInfo;