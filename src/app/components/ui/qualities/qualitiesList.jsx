import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ ids }) => {
    return (
        <>
            {ids.map((id) => (
                <Quality key={id} id={id} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    ids: PropTypes.array
};

export default QualitiesList;
