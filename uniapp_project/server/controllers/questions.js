import mongoose from "mongoose";
import Question from "../models/questionMessage.js";

//HTTP status codes https://www.restapitutorial.com/httpstatuscodes.html

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

export const updateQuestion = async function (req, res) {
    const { id: _id } = req.params;
    const question = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Question Not Found');

    const updatedQuestion = await Question.findByIdAndUpdate(_id, question, { new: true });

    res.status(201).json(updatedQuestion);
}