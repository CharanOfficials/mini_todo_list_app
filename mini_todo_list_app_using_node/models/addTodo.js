import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    DueDate: {
        type: String,
        required: true
    },
    DueTime: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        default: "Yet to start",
        required: true
    },
    RecentlyDeleted: {
        type: Boolean,
        default: false,
        required: true
    },
    time : { 
        type : Date, 
        default: Date.now }
})

const Todo = mongoose.model('Todo', todoSchema)
export default Todo