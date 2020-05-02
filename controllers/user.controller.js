const User = require('../models/user.model');

const createUser = (req, res) => {
    const body = req.body;
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        })
    }
    const user = new User(body)
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

const updateUser = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({
        _id: req.params.id}, (err, user) => {
            if(err) {
                return res.status(404).json({
                    err,
                    message: "User not found"
                })
            }
            user.firstname = body.firstname;
            user.lastname = body.lastname;
            user.password = body.password;
            user.login = body.firstname + body.lastname;

            // Save and send to db
            user.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

const deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.ID }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

// const getUserB= async (req, res) => {
//     await Movie.findOne({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!movie) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }
//         return res.status(200).json({ success: true, data: movie })
//     }).catch(err => console.log(err))
// }
const getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers
}