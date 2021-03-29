const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
salt = 10;
exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.Password, salt, (err, hash) => {
        /* bcrypt.hash(req.body.password, 10).then(hash => { */
        console.log(req.body.Email)
        const user = new User({
            Email: req.body.Email,
            Joining_date: req.body.Joining_date,
            Password: hash
        });
        user
            .save()
            .then(result => {
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: "This email is alrady registered! please try anthor one"
                });
            });
    });
}

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({
            Email: req.body.Email
        })
        .then(user => {
            console.log(user)
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.Password, user.Password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign({
                    Email: fetchedUser.Email,
                    userId: fetchedUser._id
                },
                /* process.env.JWT_KEY */
                'SecretKey-for-jwt-should-be-long-key', {
                    expiresIn: "1h"
                }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchedUser._id,
                Email: fetchedUser.Email
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
}

/* ************** */
/* bgrb update w m3mlsh  */
exports.userInfo = ((req, res, next) => {
    User.findByIdAndUpdate(req.params.userId, {
        FirstName: req.body.FirstName
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('successfully updated data!')
        }
    })
})

exports.getUser = ((req, res) => {
    User.findById(req.params.userId, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})