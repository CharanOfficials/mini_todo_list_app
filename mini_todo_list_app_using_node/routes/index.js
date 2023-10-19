import express from 'express'
const router = express.Router()
// Controller imports
import indexController from '../controllers_actions/indexController.js'
import todoListController from '../controllers_actions/addTodoController.js' 
import editTodoController from '../controllers_actions/editTodoController.js' 

// controller routes
router.get('/add_todo', todoListController.addTodoList)
router.get('/edit-todo/', editTodoController.editTodoList)
router.get('/', indexController.home)

export default router