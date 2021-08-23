const Todo = require('../schemas/todo');


//get all todos
async function getIt(req, res) {
    let tempTodos;

    try{
        tempTodos = await Todo.find();
    }catch(err){
        console.log(err + ' could not get all todos')
    }

    if (tempTodos.length === 0){
        console.log('could not find anything')
    }
    res.json(tempTodos);
}
//post a todo
async function postIt(req, res){
    let tempTodo = new Todo({
        text: req.body.text,
        done: req.body.done
    })

    try{
        await tempTodo.save();
    }catch(err){
        console.log(err + ' this went wrong')
    }
    res.status(201)
    .json(tempTodo); 
}
//get single todo based on its id
async function getOne(req, res){
    let tempId = req.params._id;

    let tempTodo;

    try{
        tempTodo = await Todo.findById(tempId);
    }catch(err){
        console.log(err + 'could not find the todo')
    }

    if(!tempTodo){
        console.log('could not find any todo with that id');
    }

    res.json({tempTodo: tempTodo.toObject()});
}
//delete a todo based on its id
async function deletIt(req, res){
    let tempId = req.params._id;

    let tempTodo;

    try{
        tempTodo = await Todo.findById(tempId);
    }catch(err){
        console.log(err + 'could not find the todo')
    }

    if(tempTodo){
        try{
            await tempTodo.remove()
        }catch(err){
            console.log('could not remove ' + err);
        }
    }

    res.status(200).json({message: 'deleted order'});
}
//patch a single todo based on its id
async function patchIt(req, res){
    let tempId = req.params._id;

    let tempTodo;

    try{
        tempTodo = await Todo.findById(tempId);
    }catch(err){
        console.log(err + 'could not find the todo for patching')
    }

    if(tempTodo){
        tempTodo.text = req.body.text;
        tempTodo.done = req.body.done;

        try{
            await tempTodo.save();
    }catch(err){
        console.log(err + 'could not update the todo')
    }

    res.json({tempTodo: tempTodo.toObject({getters: true})})
    }
}

exports.getIt = getIt;
exports.postIt = postIt;
exports.getOne = getOne;
exports.deletIt = deletIt;
exports.patchIt = patchIt;