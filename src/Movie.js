import React from "react";
import ProtoTypes from 'prop-types';

function Movie({ id, title, year, summary, poster }) {
    return <h4>{title}</h4>;
}

Movie.ProtoTypes = { 
    id:ProtoTypes.number.isRequired,
    year:ProtoTypes.number.isRequired,
    title:ProtoTypes.number.isRequired,
    summary:ProtoTypes.number.isRequired,
    poster:ProtoTypes.number.isRequired,
};

export default Movie;