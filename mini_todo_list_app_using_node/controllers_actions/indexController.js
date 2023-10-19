import Todo from '../models/addTodo.js' // to add schema data
const home = function(req, res){
    Todo.find({
    })
    .then(todo=>{
        return res.render('homeView.ejs', {
            title: "Home",
            todo_list: todo
        })
    })
    .catch(err=>{
        console.log("Error while fetching the contact", err)
        return res.status(500).send("Error in creating the contact");
    })}

export default {home}