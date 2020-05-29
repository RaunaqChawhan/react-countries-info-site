import React from 'react';
import { fetchAll } from '../actions';
import { connect } from 'react-redux';

const Button = ({ fetchAll }) => (
    <button onClick={fetchAll}>Country Data</button>
)

export default connect(null, {fetchAll})(Button)