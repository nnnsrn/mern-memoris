import mongoose from "mongoose";

//1. create a schema for the note
//2. create a model for the note

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

}, { timestamps: true } //createAt dan updateAt automatically added by mongoose
);

const Note = mongoose.model("Note", noteSchema);
export default Note;