import * as api from '../api/index.js';

//Create functions that return actions
export const getQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuestions();

        dispatch({type: 'FETCH_ALL', payload: data});
    }
    catch (error){
        console.log(error.message);
    }
};