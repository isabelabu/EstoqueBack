const Router = require("express").Router;
const router = Router();

//get

router.get("/estoque/produtos", (req, res) =>{
    res.send("get")
});

router.post("/estoque/produtos", (req,res) =>{
    res.send("post");
});

router.put("/estoque/produto/:id", (req,res) =>{
    const {id} = req.params;
    res.send(`put ${id}`);
});

router.delete("/estoque/produto/:id", (req,res) =>{
    const {id} = req.params;
    res.send(`delete ${id}`);
});

module.exports = router;