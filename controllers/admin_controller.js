const User = require("../models/adminuser");
const bcrypt = require('bcryptjs');
module.exports = {

    postLogin(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({
                email: email
            })
            .then(user => {
                if (!user) {
                    return res.redirect('/login');
                }
                bcrypt
                    .compare(password, user.password)
                    .then(doMatch => {
                        if (doMatch) {
                            req.session.isLoggedIn = true;
                            req.session.user = user;
                            return req.session.save(err => {
                                console.log(err);
                                res.redirect('/');
                            });
                        }
                        res.redirect('/login');
                    })
                    .catch(err => {
                        console.log(err);
                        res.redirect('/login');
                    });
            })
            .catch(err => console.log(err));
    },
    getLogin(req, res, next) {
        res.render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            isAuthenticated: false
        })
    }
}