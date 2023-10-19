const addTodoList = function(req, res){
    return res.render('addTodoView',{
        title: 'Add Todo'
    })
}

export default {addTodoList}