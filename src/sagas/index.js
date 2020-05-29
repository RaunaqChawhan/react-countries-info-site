import { put, takeLatest, all } from 'redux-saga/effects';

function* getAllCountries() {

    // fetch all countries
    const allCountries = yield fetch('https://restcountries.eu/rest/v2/all').then(response => response.json());

    const regions = yield allCountries.map(country => country.region).sort();

    yield put({
        type: 'RECEIVED_ALL',  
        allCountries, 
        regions: regions.filter((region, index) => regions.indexOf(region) === index)
        .filter(region => !(region === "Polar" || region === ""))   //to remove empty value and "Polar" region
    });
}

function* watchAllCountries() {
    yield takeLatest('FETCH_ALL', getAllCountries);
}

export default function* rootSaga() {
    yield all([
        watchAllCountries()
    ])
}