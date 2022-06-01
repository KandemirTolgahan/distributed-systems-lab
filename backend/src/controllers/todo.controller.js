const { ApiSuccess, ApiError } = require('../helpers/ApiResponse')
const db = require("./../models")
const Task = db.tasks

exports.test = (req, res) => {
    res.status(200).send("App is up und running")
}

exports.getTodos = async (req, res) => {
    Task.findAll()
        .then(data => {
            let tasks = data.map(task => ({ id: task.id, todo: task.todo, priority: task.priority }))
            res.status(200).json(ApiSuccess([], tasks));
        })
        .catch(err => {
            res.status(500).json(ApiError([["server.error", 5001]]));
        });
}

exports.createTodo = async (req, res) => {
    const task = {
        todo: req.body.todo,
        priority: req.body.priority
    }

    Task.create(task)
        .then(data => {
            res.status(200).json(ApiSuccess(["todo.createdSuccessfully"]))
        })
        .catch(err => {
            res.status(500).json(ApiError([["server.error", 5001]]));
        });
}


exports.getTodo = async (req, res) => {
    const searchId = req.params.id
    Task.findByPk(searchId)
        .then(data => {
            if (data) {
                let task = { id: data.id, todo: data.todo, priority: data.priority }
                res.status(200).json(ApiSuccess([], task))
            } else {
                res.status(404).json(ApiError([["todo.doesNotExist", 5002]]))
            }
        })
        .catch(err => {
            res.status(500).json(ApiError([["server.error", 5001]]))
        })
}

exports.deleteTodo = async (req, res) => {
    const searchId = req.params.id
    Task.destroy({
        where: { id: searchId }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).json(ApiSuccess(["todo.deletedSuccessfully"]))
            } else {
                res.status(404).json(ApiError([["todo.doesNotExist", 5002]]))
            }
        })
        .catch(err => {
            res.status(500).json(ApiError([["server.error", 5001]]))
        })
}

exports.updateTodo = async (req, res) => {
    const updateId = req.body.id
    Task.update(req.body, {
        where: { id: updateId }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).json(ApiSuccess(["todo.updatedSuccessfully"]))
            } else {
                res.status(404).json(ApiError([["todo.doesNotExist", 5002]]))
            }
        })
        .catch(err => {
            res.status(500).json(ApiError([["server.error", 5001]]))
        })
}