import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { Link, useHistory } from "react-router-dom";
import UserCard from "../../ui/userCard";
import QuailitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments/";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((comments) => setComments(comments));
    }, []);

    const handleClick = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QuailitiesCard qualities={user.qualities} />
                        <MeetingsCard meetings={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments comments={comments} />
                    </div>
                </div>
            </div>
            // <div>
            //     <h1> {user.name}</h1>
            //     <h2>Профессия: {user.profession.name}</h2>
            //     <Qualities qualities={user.qualities} />
            //     <p>completedMeetings: {user.completedMeetings}</p>
            //     <h2>Rate: {user.rate}</h2>
            //     <button onClick={handleClick} className="btn btn-primary">
            //         {" "}
            //         Все пользователи
            //     </button>
            //     <Link to={`/users/${userId}/edit`}>
            //         <button className="btn btn-warning mx-2">Изменить</button>
            //     </Link>
            // </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
