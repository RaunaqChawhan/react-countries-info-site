import React from 'react';
import { connect } from 'react-redux';

const Loading = ({ isLoading }) => (
    isLoading ?
    <h1>Loading...</h1> :
    null
)

const mapStateToProps = state => ({
    isLoading: state.isLoading
})

export default connect(mapStateToProps)(Loading);