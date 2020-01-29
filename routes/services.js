const router = require("express").Router();
const Op = require("sequelize").Op;

const Service = require("../db/models/Service");

router.get("/", (req, res) => {
    Service.findAll()
        .then(services => {
            res.json(services)
        })
})

router.get("/:serviceName", (req, res) => {

    const service = req.params.serviceName;

    Service.findAll({
        where: {
            title: {
                [Op.iLike]: `%${service}%`
            }
        }
    })
        .then(services => {
            res.json(services);
        })
        .catch(err =>
            console.log(err, "Failed to retrieve all services at /api/services/:serviceName")
        )
});

module.exports = router;