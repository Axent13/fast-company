import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { Link, useHistory } from "react-router-dom";
import UserCard from "../../ui/userCard";
import QuailitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments/";
import NewCommentForm from "../../ui/newCommentForm";
import _ from "lodash";

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
                        <NewCommentForm onSubmit={handleSubmit} />
                        <Comments
                            comments={comments}
                            onDelete={handleDeleteComment}
                        />
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
