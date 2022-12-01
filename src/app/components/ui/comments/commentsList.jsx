import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Comment from "./comment";

const CommentsList = ({ comments, onDelete }) => {
    return (
        <>
            {comments && comments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {comments.map((comment) => (
                            <Comment
                                key={comment._id}
                                {...comment}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func
};

export default CommentsList;
