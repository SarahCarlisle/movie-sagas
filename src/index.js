import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from "redux-saga/effects";

//Importing Axios
import axios from "axios";


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("GET_MOVIE", getMovieSaga);
    yield takeEvery("GET_GENRES", getGenresSaga);
    yield takeEvery("DELETE_MOVIE", deleteMovieSaga);
}

function* getMovieSaga(action) {
    try {
        console.log("payload in getMovieSaga", action.payload);
        const response = yield axios.post("/api/movie", action.payload);
        yield put({ type: "SET_MOVIE", payload: response.data });
    } catch (err) {
        alert("Unable to get movie from the server", err);
    }
}

function* getGenresSaga(action) {
    try {
        const response = yield axios.get("/api/genre");

        yield put({ type: "SET_GENRES", payload: response.data });
    } catch (err) {
        alert("Unable to get genres from the server");
    }
}

function* deleteMovieSaga(action) {
    try {
        const response = yield axios.delete(`api/movie/${action.payload}`);
        yield put({ type: "GET_MOVIE" });
    } catch (err) {
        alert("Unable to remove movie");
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use DONE
const storeInstance = createStore(
    combineReducers({
        movies: moviesReducer,
        genres: genresReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
