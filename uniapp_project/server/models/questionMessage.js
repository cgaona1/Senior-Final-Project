import mongoose from 'mongoose';

//Schema for question
const questionSchema = mongoose.Schema({
    questionTitle: String,
    questionMessage: String,
    questionCreator: String,
    questionTags: [String],
    upvoteCount:{
        type: Number,
        default: 0
    },
    downvoteCount:{
        type: Date,
        default: new Date()
    }
});

//Model for question
const QuestionMessage = mongoose.model('QuestionMessage', questionSchema);
