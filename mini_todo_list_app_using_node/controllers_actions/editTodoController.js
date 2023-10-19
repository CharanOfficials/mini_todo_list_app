const editTodoList = function(req, res){
    return res.render('editTodoView',{
        title: 'Edit Todo'
    })
}

export default {editTodoList}