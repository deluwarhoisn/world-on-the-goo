import React from 'react';
const Country = ({ Country }) => {
    console.log( Country)
    return (
        <div>
            {/* <img src={Country.flags.flags.png} alt={Country.flags.flags.alt} /> */}
            <h3>Name: </h3>
            {/* <p>population: {Country.population}</p> */}
        </div>
    );
};

export default Country;