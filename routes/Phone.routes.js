const {default: mongoose } = require('mongoose');

const router = require("express").Router();
const Phone = require('../models/Phone.model');



// Show all phones

router.get('/phones', (req, res, next) => {
    Phone.find()
        .then((response) => {
            res.json(response)
        })
        .catch(err => console.log("error getting phones", err));
        res.status(500).json({
            message: "error getting phones",
            error: err
        })
})


// show phones by id

router.get('/phones/:id', (req, res,next) => {
    const { id } = req.params;
    console.log("Phone", req.body);

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ message: "Specified id is not valid"});
        return;
    }

    Phone.findById(id)
        .then((phone) => res.json(phone))
        .catch((err)=> {
            console.log("error getting phone by id, server", err);
            res.status(500).json({
                message: "error getting phone details",
                error: err
            })
        } )

})

module.exports = router;