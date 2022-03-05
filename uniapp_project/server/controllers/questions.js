import Question from "../models/questionMessage.js";

export const getQuestions = async function (req, res) {
    try{
        const questions = await Question.find();

        res.status(200).json(questions);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createQuestion = async function (req, res) {
    const question = req.body;

    const newQuestion = new Question(question);
    try{
        await newQuestion.save();

        res.status(201).json(newQuestion);
    }
    catch (error){
        res.status(409).json({ message: error.message});
    }
}