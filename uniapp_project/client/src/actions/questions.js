import * as api from '../api/index.js';

//Create functions that return actions
export const getQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuestions();

        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (error){
        console.log(error.message);
    }
};

export const createQuestion = (question) => async (dispatch) => {
    try{
        const { data } = await api.createQuestion(question);

        dispatch({ type: 'CREATE', payload: data });
    }
    catch(error){
        console.log(error.message);
    }
};

export const updateQuestion = (id, question) => async (dispatch) => {
    try{
        const { data } = await api.updateQuestion(id, question);

        dispatch({ type: 'UPDATE', payload: data });
    }
    catch(error){
        console.log(error.message);
    }
}