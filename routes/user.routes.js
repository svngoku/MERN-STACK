const moongose = require("mongoose");
const User = moongose.model('users');


module.exports = (app) => {
    // GET USER 
    app.get(`/api/user`, async (req, res) => {
        let users = await User.find();
        return res.status(200).send(users);
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
        const { id } = req.params;
        let user = User.findByIdAndUpdate(id, req.body);
        return res.status(202).send({
            error: false,
            user
        });
    });

    // DELETE USER BY ID
    app.delete(`/api/user/:id`, async (req, res) => {
        const { id } = req.params;
        let user = User.findByIdAndDelete(id, req.body);
        return res.status(202).send({
            error: false,
            user
        });
    })
}