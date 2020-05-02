const moongose = require("mongoose");
const Partenaire = moongose.model('partenaire');

module.exports = (app) => {
    // GET USERS
    app.get(`/api/partenaire`, async (req, res) => {
        let partenaires = await Partenaire.find();
        return res.status(200).send(partenaires);
    });

    //  get a user by the id 
    // app.get(`/api/partenaire/:id`, async (req, res) => {
    //     const { id } = req.params;
    //     let partenaire = await Partenaire.findById(id);
    //     return res.status(200).send({
    //         error: false,
    //         partenaire
    //     })
    // });

    // CREATE A USER 
    // app.post(`/api/user`, async (req,res) => {
    //     let user = await User.create(req.body);
    //     return res.status(200).send({
    //         error: false,
    //         user
    //     });
    // });

    // // UPDATE A USER BY ID
    // app.put(`/api/user/:id`, async (req, res) => {
    //     const { ID } = req.params;
    //     let user = User.findByIdAndUpdate(ID, req.body);
    //     return res.status(202).send({
    //         error: false,
    //         user
    //     });
    // });

    // // DELETE USER BY ID
    // app.delete(`/api/user/:id`, async (req, res) => {
    //     const { ID } = req.params;
    //     let user = User.findByIdAndDelete(ID, req.body);
    //     return res.status(202).send({
    //         error: false,
    //         user
    //     });
    // })
}