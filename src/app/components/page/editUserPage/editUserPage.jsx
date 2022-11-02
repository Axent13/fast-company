import React from "react";
import PropTypes from "prop-types";
import EditUserForm from "../../ui/editUserForm";

const EditUserPage = ({ userId }) => {
    if (userId) {
        return <EditUserForm userId={userId} />;
    } else {
        return <h1>Loading</h1>;
    }
};

EditUserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default EditUserPage;
