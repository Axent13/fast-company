import { orderBy } from "lodash";
import React, { useEffect } from "react";
import CommentsList, { AddCommentForm } from "../common/comments";
<<<<<<< HEAD
import {
    createComment,
=======
import { useDispatch, useSelector } from "react-redux";
import {
    addComment,
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment
} from "../../store/comments";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
=======
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
import { useParams } from "react-router-dom";

const Comments = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCommentsList(userId));
    }, [userId]);
    const isLoading = useSelector(getCommentsLoadingStatus());
<<<<<<< HEAD
=======
    const comments = useSelector(getComments());
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f

    const comments = useSelector(getComments());
    const handleSubmit = (data) => {
<<<<<<< HEAD
        dispatch(createComment({ data, pageId: userId }));
=======
        dispatch(addComment({ content: data.content, pageId: userId }));
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    };
    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
<<<<<<< HEAD
                            "loading..."
=======
                            "Loading..."
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
