import React from "react";
import PropTypes from "prop-types";
import Comment from "./comment";

const CommentsList = ({ comments }) => {
    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">add comment</div>
            </div>

            {comments && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {comments.map((comment) => (
                            <Comment key={comment._id} {...comment} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsList;
