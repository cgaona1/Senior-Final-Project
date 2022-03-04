import express from 'express';
import { getQuestions } from '../controllers/questions.js';

const router = express.Router();

router.route('/')
    .get(getQuestions);

export default router;