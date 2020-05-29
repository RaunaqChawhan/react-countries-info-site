import React from 'react';
import { connect } from 'react-redux';
import Country from './Country';

const CountryList = ({ countries }) => (
    countries ?
    <section className="countries-container">
        {countries.map(country => <Country key={country.name} {...country} />) }
    </section> :
    null
)

const getFilteredCountries = (countries, criteria) => {
    switch(criteria.category) {
        case 'FETCHBY_COUNTRY':
            console.log(countries.filter(country => country.name.toLowerCase().startsWith(criteria.country)));
            return countries.filter(country => country.name.toLowerCase().startsWith(criteria.country));
        case 'FETCHBY_REGION':
            console.log(countries.filter(country => country.region === criteria.region));
            return countries.filter(country => country.region === criteria.region);
        case 'ALL':
            return countries;
        default:
            throw new Error('Unknown criteria' + criteria.category);
    }
}

const mapStateToProps = state => ({
    // countries: state.countryReducer.countries,
    countries: getFilteredCountries(state.countryReducer.countries, state.searchCriteriaReducer),
    regions: state.countryReducer.regions,
    criteria: state.searchCriteriaReducer
})

export default connect(mapStateToProps)(CountryList);