const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')

routes.get('/add', userController.createUser)
routes.post('/add', userController.createUserSave)
routes.get('/remove/:id', userController.deleteUser)
routes.get('/edit/:id', userController.updateUser)
routes.post('/edit', userController.updateUserSave)
routes.get('/:id', userController.showUser)
routes.get('/', userController.showUsers)

module.exports = routes