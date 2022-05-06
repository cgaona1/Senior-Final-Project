import express from 'express';
import { getQuestions, createQuestion } from '../controllers/questions.js';

const router = express.Router();

router.route('/')
    .get(getQuestions)
    .post(createQuestion);

router.route('/id')
    .patch(updateQuestion);

export default router;