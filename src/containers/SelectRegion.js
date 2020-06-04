import React from 'react';
import { connect } from 'react-redux';
import { setSearchCategory } from '../actions';

const SelectRegion = ({ regions, setSearchCategory }) => {

    const handleChange = (event) => {
        console.log('change');
        console.log(event.target.value);
        let region = event.target.value;
        setSearchCategory({category: 'FETCHBY_REGION', region});
    }

    return (
        <div className="region-wrapper">
            <select defaultValue="filter" onChange={handleChange}>
                <option value="filter" disabled hidden>Filter by Region</option>
                {regions ? 
                    regions.map(
                    region => <option key={region} value={region}>{region}</option>
                ) :
                null}
            </select>
            {/* <i class="fa fa-chevron-circle-down"></i> */}
            <i class="fa fa-angle-down"></i>
        </div>
    )
}

const mapStateToProps = state => ({
    regions: state.countryReducer.regions
})

export default connect(mapStateToProps, {setSearchCategory})(SelectRegion)