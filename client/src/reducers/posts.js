
const FETCH_ALL = "FETCH_ALL";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const LIKE = "LIKE";

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((p) => p._id !== action.payload);
        case LIKE:
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}