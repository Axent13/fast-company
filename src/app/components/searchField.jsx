import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ value, onChange }) => {
    return (
        <div className="input-group">
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-100"
                placeholder="Search..."
            />
        </div>
    );
};

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchField;
