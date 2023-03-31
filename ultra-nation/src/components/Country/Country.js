import React from 'react';

const Country = (props) => {
const {region,population}=props.country;
    return (
        <div>
           <h4>{props.country.name.common}</h4> 
           <p>poppulation: {population}</p>
           <p>Region: {region}</p>
        </div>
    );
};

export default Country;