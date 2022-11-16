import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import EditUserForm from "../../ui/editUserForm";

const EditUserPage = ({ userId }) => {
    return userId ? (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <EditUserForm userId={userId} />
                </div>
            </div>
        </div>
    ) : (
        <h1>Loading</h1>
    );
};

EditUserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default EditUserPage;
