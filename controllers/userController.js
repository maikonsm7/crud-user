const { where } = require('sequelize')
const User = require('../models/User')

class userController{
    static createUser(req, res){
        res.render('user/create')
    }

    static createUserSave(req, res){
        const user = {
            name: req.body.name,
            email: req.body.email
        }
        User.create(user)
        .then(res.redirect('/user'))
        .catch(e => console.log(e))
    }
    
    static showUsers(req, res){
        User.findAll({raw: true})
        .then(data => {
            res.render('user/all', {users: data})
        })
        .catch(e => console.log(e))
    }

    static showUser(req, res){
        const id = req.params.id
        User.findOne({where: {id}, raw: true})
        .then(data => {
            res.render('user/one', {user: data})
        })
        .catch(e => console.log(e))
    }

    static updateUser(req, res){
        const id = req.params.id
        User.findOne({where: {id}, raw: true})
        .then(data => res.render('user/edit', {user: data}))
        .catch(e => console.log(e))
    }

    static updateUserSave(req, res){
        const id = req.body.id
        const user = {
            name: req.body.name,
            email: req.body.email
        }
        User.update(user, {where: {id}})
        .then(res.redirect('/user'))
        .catch(e => console.log(e))
    }

    static deleteUser(req, res){
        const id = req.params.id
        User.destroy({where: {id}})
        .then(res.redirect('/user'))
        .catch(e => console.log(e))
    }
}

module.exports = userController