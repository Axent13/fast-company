import { createAction, createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import commentService from "../services/comment.service";
import { getCurrentUserId } from "./users";
import { nanoid } from "nanoid";
=======
import { nanoid } from "nanoid";
import commentService from "../services/comment.service";
import localStorageService from "../services/localStorage.service";

>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
<<<<<<< HEAD
        commentsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commetnCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
=======
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentAdded: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        commentAddFailed: (state, action) => {
            state.error = action.payload;
        },
        commentRemoveFailed: (state, action) => {
            state.error = action.payload;
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (comment) => comment._id !== action.payload
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
            );
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
<<<<<<< HEAD
    commentsReceved,
    commentsRequestFiled,
    commetnCreated,
    commentRemoved
} = actions;

const addCommentRequested = createAction("comments/addCommentRequested");
const removeCommentRequested = createAction("comments/removeCommentRequested");
=======
    commentsReceived,
    commentsRequestFailed,
    commentAdded,
    commentAddFailed,
    commentRemoved,
    commentRemoveFailed
} = actions;

const commentAddRequested = createAction("comments/commentAddRequested");
const commentRemoveRequested = createAction("comments/commentRemoveRequested");
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
<<<<<<< HEAD
        dispatch(commentsReceved(content));
    } catch (error) {
        dispatch(commentsRequestFiled(error.message));
    }
};
export const createComment = (payload) => async (dispatch, getState) => {
    dispatch(addCommentRequested());
=======
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const addComment = (payload) => async (dispatch) => {
    dispatch(commentAddRequested());
    console.log("payload:", payload);
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    const comment = {
        ...payload,
        _id: nanoid(),
        created_at: Date.now(),
<<<<<<< HEAD
        userId: getCurrentUserId()(getState())
    };
    try {
        const { content } = await commentService.createComment(comment);
        dispatch(commetnCreated(content));
    } catch (error) {
        dispatch(commentsRequestFiled(error.message));
    }
};
export const removeComment = (commentId) => async (dispatch) => {
    dispatch(removeCommentRequested());
=======
        userId: localStorageService.getUserId()
    };
    try {
        console.log(comment);
        const { content } = await commentService.createComment(comment);
        console.log("content:", content);
        dispatch(commentAdded(content));
    } catch (error) {
        dispatch(commentAddFailed(error.message));
    }
};

export const removeComment = (commentId) => async (dispatch) => {
    dispatch(commentRemoveRequested());
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    try {
        const { content } = await commentService.removeComment(commentId);
        if (content === null) {
            dispatch(commentRemoved(commentId));
        }
    } catch (error) {
<<<<<<< HEAD
        dispatch(commentsRequestFiled(error.message));
=======
        dispatch(commentRemoveFailed(error.message));
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    }
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
