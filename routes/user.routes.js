const moongose = require("mongoose");
const User = moongose.model('user');

module.exports = (app) => {
    // GET USERS
    app.get(`/api/user`, async (req, res) => {
        let users = await User.find();
        return res.status(200).send(users);
    });

    //  get a user by the id 
    app.get(`/api/user/:id`, async (req, res) => {
        const { id } = req.params;
        let user = await User.findById(id);
        return res.status(200).send({
            error: false,
            user
        })
    });

    // CREATE A USER 
    app.post(`/api/user`, async (req,res) => {
        let user = await User.create(req.body);
        return res.status(200).send({
            error: false,
            user
        });
    });

    // UPDATE A USER BY ID
    app.put(`/api/user/:id`, async (req, res) => {
        const { ID } = req.params;
        let user = User.findByIdAndUpdate(ID, req.body);
        return res.status(202).send({
            error: false,
            user
        });
    });

    // DELETE USER BY ID
    app.delete(`/api/user/:id`, async (req, res) => {
        const { ID } = req.params;
        let user = User.findByIdAndDelete(ID, req.body);
        return res.status(202).send({
            error: false,
            user
        });
    })
}