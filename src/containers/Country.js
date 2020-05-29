import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ flag, name, population, region, capital }) => (
        <article className="country-card">
            <Link to={`/${name}`}>
                <div className="details">
                    <div>
                        <img src={flag} alt={`${name} flag`} />
                    </div>
                    
                    <h1>{name}</h1>
                    <div className="country-details">
                        <p><span>Population:</span> {population}</p>
                        <p><span>Region:</span> {region}</p>
                        <p><span>Capital:</span> {capital}</p>
                    </div>
                </div>
            </Link>
        </article>
)

export default Country;