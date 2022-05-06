import express from 'express';
import { getQuestions, createQuestion, updateQuestion, deleteQuestion } from '../controllers/questions.js';

const router = express.Router();

router.route('/')
    .get(getQuestions)
    .post(createQuestion);

router.route('/:id')
    .patch(updateQuestion)
    .delete(deleteQuestion);

export default router;