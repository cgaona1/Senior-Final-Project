import axios from 'axios';

const url = 'http://localhost:3000/questions';

export const fetchQuestions = () => axios.get(url);