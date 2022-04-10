import { DELETE_POST, ADD_POST } from "./types"

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id: id
    }
}

export const addPost = (payload) => {
    return {
        type: ADD_POST,
        payload
    }
}