import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DetailedInfo = ({match, countries}) => {

    const [ filteredCountryDetails ] = countries ? countries.filter(country => country.name.toLowerCase().startsWith(match.params.country.split("-").join(" "))) : [];

    const { flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = filteredCountryDetails ? filteredCountryDetails : {};

    // const borderCountries = borders.map(border => countries.filter(country => country.alpha3Code === border)).map(borderCountry => borderCountry.name);  // extract the border country names from border country codes
    let borderCountries = borders ? borders.map(border => countries.filter(country => country.alpha3Code === border)) : []; // extract the border country names from border country codes
    borderCountries = [].concat(...borderCountries) || [];
    const currencyNames = currencies ? currencies.map(currency => currency.name) : [];    // extract the currency name
    const languagesName = languages ? languages.map(language => language.name) : []; // extract the name of languages

    // console.log(borderCountries);

    return (
    <div className="country-detailed-info">
        <Link to="/">
            <div className="back-button">
                <i class="fa fa-arrow-left"></i>
                <button type="button">Back</button>
            </div>
        </Link>
        <div className="detailed-info">
            <div className="flag">
                <img src={flag} alt={`${name} flag`} />
            </div>
            <div className="info-card">
                <h1>{name || ' '}</h1>
                <ul>
                    <li><span>Native Name:</span> {nativeName || ' '}</li>
                    <li><span>Population:</span> {population ? population.toLocaleString() : ' '}</li>
                    <li><span>Region:</span> {region || ' '}</li>
                    <li><span>Sub Region:</span> {subregion || ' '}</li>
                    <li><span>Capital:</span> {capital || ' '}</li>
                    <li><span>Top Level Domain:</span> {topLevelDomain || ' '}</li>
                    <li><span>Currencies:</span> {currencyNames.toString() || ' '}</li>
                    <li><span>Languages:</span> {languagesName.toString() || ' '}</li>
                </ul>
                <div className="border-countries">
                    <span>Border Countries: </span>
                    <div className="border-countries-button">
                        {borderCountries ? borderCountries.map(borderCountry => 
                        <Link key={borderCountry.name} to={`/${borderCountry.name.toLowerCase().split("(", 1).toString().trim().split(" ").join("-")}`}>
                            <button type="button" >{borderCountry.name}</button>
                        </Link>
                        ) : ' '}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    countries: state.countryReducer.countries
})

export default connect(mapStateToProps)(DetailedInfo);