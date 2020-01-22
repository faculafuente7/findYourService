const seed = require("express").Router();
const Service = require('../db/models/Service')

seed.get("/", (req,res)=>{
    Service.bulkCreate([
        {
            title: "Puppis Veterinary",
            description: "Pet Products Store",
            active: true
        },
        {
            title: "Pet Shop Dolcetto",
            description: "Pet Products Store",
            active: true
        },
        {
            title: "City Animals Veterinary",
            description: "Veterinary",
            active: true
        },
        {
            title: "Farmavet Veterinary",
            description: "Veterinary",
            active: true
        },
        {
            title: "Remax ",
            description: "Property Company",
            active: true
        },
        {
            title: "M & C Inmobiliaria ",
            description: "Property Company",
            active: true
        },
        {
            title: "Del Parque Propiedades ",
            description: "Property Company",
            active: true
        },
        {
            title: "McDonals ",
            description: "Fast Food",
            active: true
        },
        {
            title: "Burger King ",
            description: "Fast Food",
            active: true
        },
        {
            title: "Mostaza ",
            description: "Fast Food",
            active: true
        },
        {
            title: "Subway ",
            description: "Fast Food",
            active: true
        },
        {
            title: "Garbarino ",
            description: "Home Goods Store",
            active: true
        },
        {
            title: "Fravega ",
            description: "Home Goods Store",
            active: true
        },
        {
            title: "Falabella ",
            description: "Home Goods Store",
            active: true
        },
        {
            title: "COTO ",
            description: "Market",
            active: true
        },
        {
            title: "Carrefour ",
            description: "Market",
            active: true
        },
        {
            title: "Disco ",
            description: "Market",
            active: true
        },
        {
            title: "Maipo ",
            description: "Theater",
            active: true
        },
        {
            title: "Opera Orbis ",
            description: "Theater",
            active: true
        },
        {
            title: "Galeria Jardin",
            description: "Mall",
            active: true
        },
        
        
    ])
    .then(() => res.send("Services succesfully seeded. "));
});

module.exports = seed;