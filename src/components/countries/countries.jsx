import React, { use } from 'react';
import County from './Country/County';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            {
               
            }
        </div>
    );
};

export default Countries;