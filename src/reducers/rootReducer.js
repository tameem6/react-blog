
const initState = {
    posts: [
        { id: 1, title: 'Abba harmonium bajate the', desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        { id: 2, title: 'Random text title 2', desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        { id: 3, title: 'More random title 3', desc: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;