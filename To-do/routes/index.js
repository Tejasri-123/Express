const  express = require("express")
const router = express.Router()
const Todo = require("../models/Todo");

//Routes
router.get("/",async (req,res) => {
    const allTodo = await Todo.find();
    res.render("index",{todo:allTodo})

    res.render("index")

})

module.exports = router