import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { Link } from "react-router-dom";

const User = ({ match }) => {
    const userId = match.params.userId;
    const [user, setUser] = useState();
    api.users.getById(userId).then((data) => setUser(data));
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <p>
                    <QualitiesList qualities={user.qualities} />
                </p>
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button>
                    <Link
                        className="text-decoration-none text-black"
                        to="/users"
                    >
                        Все Пользователи
                    </Link>
                </button>
            </>
        );
    }
    return <h1>Loading</h1>;
};

User.propTypes = {
    match: PropTypes.object.isRequired
};

export default User;
