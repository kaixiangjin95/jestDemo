const TodoModel = require('../models/todo.model')
exports.createTodo = async  (req, res, next) => {
   try{
    const createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
   }
   catch(err){
        next(err);
   }
     
};

exports.getTodos = async(req, res, next)=>{

    try{
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos);
    }
    catch(err){
        next(err);
    }
   
};

exports.getTodoById = async(req, res, next) => {
    try {
        const todo = await TodoModel.findById(req.params.todoId);
        res.status(200).json(todo);
    } catch (err) {
        next(err);
    }
    TodoModel.findById(req.params.todoId);
}