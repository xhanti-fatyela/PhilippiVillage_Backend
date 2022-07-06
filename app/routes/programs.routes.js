const { programs } = require("../models/index.js");

module.exports = app => {
    const programs = require("../controllers/programs.controller.js")
  
    let router = require("express").Router()
    
 router.get('/', (req, res) => {
     res.json({messege: "Welcome to my backend app"});
 })
 
    router.post("/", programs.create)
 
    router.get("/all", programs.findAll)
 
    router.get("/published", programs.findAllPublished)
 
    router.get("/:id", programs.findOne)
 
    router.put("/:id", programs.update)
 
    router.delete("/:id", programs.delete)
 
    router.delete("/", programs.deleteAll)
 
    app.use("/api/programs", router)
 }