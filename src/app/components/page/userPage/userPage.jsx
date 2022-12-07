import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
<<<<<<< HEAD
=======
import { Link, useHistory } from "react-router-dom";
>>>>>>> 0b635349964d689a561ecd7aff7eb21c431c4fbc
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
<<<<<<< HEAD
import Comments from "../../ui/comments";
=======
import Comments from "../../ui/comments/";
import NewCommentForm from "../../ui/newCommentForm";
import _ from "lodash";
>>>>>>> 0b635349964d689a561ecd7aff7eb21c431c4fbc

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
<<<<<<< HEAD
=======

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((comments) => setComments(comments));
    }, []);

    const handleSubmit = (data) => {
        console.log("data to add", { ...data, pageId: userId });
        api.comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };

    const handleDeleteComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComments(comments.filter((comment) => comment._id !== id));
        });
    };

    const handleClick = () => {
        history.push("/users");
    };

    const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);

>>>>>>> 0b635349964d689a561ecd7aff7eb21c431c4fbc
    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
<<<<<<< HEAD
                        <Comments />
=======
                        <NewCommentForm onSubmit={handleSubmit} />
                        <Comments
                            comments={comments}
                            onDelete={handleDeleteComment}
                        />
>>>>>>> 0b635349964d689a561ecd7aff7eb21c431c4fbc
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
