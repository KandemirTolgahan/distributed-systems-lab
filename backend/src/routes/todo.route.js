const express = require('express')
const router = express.Router()
const controller = require('../controllers/todo.controller')

/*
 * description: test Endpoint
 * method:      GET
 * route:       /api/test
 * codes:       [200]
 */
router.route("/api/test")
    .get(controller.test)

/*
 * description: returns a list of todos
 * method:      GET
 * route:       /todos/
 * codes:       [200, 500]
 */
router.route("/todos/")
    .get(controller.getTodos)

/*
 * description: returns single todo if todo exists
 * method:      GET
 * route:       /todos/:id
 * codes:       [200, 404, 500]
 */
router.route("/todos/:id")
    .get(controller.getTodo)

/*
 * description: creates new todo from json in reques body
 * method:      POST
 * route:       /todos/
 * codes:       [200]
 */
router.route("/todos/")
    .post(controller.createTodo)

/*
* description: deletes todo if exists
* method:      DELETE
* route:       /todos/:id
* codes:       [200, 404, 500]
*/
router.route("/todos/:id")
    .delete(controller.deleteTodo)

/*
 * description: changes priority of todo
 * method:      PUT
 * route:       /todos/
 * codes:       [200, 404, 500]
 */
router.route("/todos/")
    .put(controller.updateTodo)

module.exports = router