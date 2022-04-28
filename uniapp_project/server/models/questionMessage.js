import mongoose from 'mongoose';

//Schema for question
const questionSchema = mongoose.Schema({
    questionTitle: String,
    questionMessage: String,
    questionCreator: String,
    questionTags: [String],
    upVoteCount:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

//Model for question
const Question = mongoose.model('Question', questionSchema);

export default Question;