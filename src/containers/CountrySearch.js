import React from 'react';
import { connect } from 'react-redux';
import { setSearchCategory } from '../actions';

class CountrySearch extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log(this.inputRef.current.value);
        let country = this.inputRef.current.value.toLowerCase();
        this.props.setSearchCategory({category: 'FETCHBY_COUNTRY', country});
        // this.props.setSearchCategory()
    }

    render() {
        return (
            <div className="search-input">
                <i class="fa fa-search"></i>
                <input ref={this.inputRef} type="text" placeholder="Search for a country..." onChange={this.handleChange} />
            </div>
        )
    }
}

export default connect(null, {setSearchCategory})(CountrySearch);