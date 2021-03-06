import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ flag, name, population, region, capital }) => (
        <article className="country-card">
            <Link to={`/${name.toLowerCase().split("(", 1).toString().trim().split(" ").join("-")}`}>
                <div className="details">
                    <div>
                        <img src={flag} alt={`${name} flag`} />
                    </div>
                    
                    <h2>{name}</h2>
                    <div className="country-details">
                        <p><span>Population:</span> {population.toLocaleString()}</p>
                        <p><span>Region:</span> {region}</p>
                        <p><span>Capital:</span> {capital}</p>
                    </div>
                </div>
            </Link>
        </article>
)

export default Country;