import posts from "../components/posts";

const initState = {
    posts: [
        { id: 1, title: 'Abba harmonium bajate the', desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        { id: 2, title: 'Random text title 2', desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        { id: 3, title: 'More random title 3', desc: 'lorem ipsum dolo 650 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_POST': {
            let newPosts = state.posts.filter(post => post.id !== action.id)
            return {
                ...state,
                posts: newPosts
            }
        }
        case 'ADD_POST': {
            let id = state.posts.length + 1;
            action.payload.id = id;
            let newPosts = [...state.posts, action.payload]
            return {
                ...state,
                posts: newPosts
            }
        }
    }
    return state;
}

export default rootReducer;