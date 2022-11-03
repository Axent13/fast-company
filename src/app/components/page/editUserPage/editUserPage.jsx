import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import EditUserForm from "../../ui/editUserForm";

const EditUserPage = ({ userId }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (Object.keys(user).length > 0) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <EditUserForm
                            userId={userId}
                            sourceName={user.name}
                            sourceEmail={user.email}
                            sourceProfession={user.profession}
                            sourceSex={user.sex}
                            sourceQualities={user.qualities}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

EditUserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default EditUserPage;
