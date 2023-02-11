import { createAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import commentService from "../services/comment.service";
import localStorageService from "../services/localStorage.service";

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
            );
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
    commentsReceived,
    commentsRequestFailed,
    commentAdded,
    commentAddFailed,
    commentRemoved,
    commentRemoveFailed
} = actions;

const commentAddRequested = createAction("comments/commentAddRequested");
const commentRemoveRequested = createAction("comments/commentRemoveRequested");

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const addComment = (payload) => async (dispatch) => {
    dispatch(commentAddRequested());
    console.log("payload:", payload);
    const comment = {
        ...payload,
        _id: nanoid(),
        created_at: Date.now(),
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
    try {
        const { content } = await commentService.removeComment(commentId);
        if (content === null) {
            dispatch(commentRemoved(commentId));
        }
    } catch (error) {
        dispatch(commentRemoveFailed(error.message));
    }
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
