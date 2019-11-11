import axios from 'axios';

export const fetchPostList = () => {

    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({
            type: 'FETCH_POST_LIST',
            payload: response.data
        })
    }
}

export const fetchUserList = () => {

    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type: 'FETCH_USER_LIST',
            payload: response.data
        })
    }
}