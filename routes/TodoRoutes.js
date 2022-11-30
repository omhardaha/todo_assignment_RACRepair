const router = require("express").Router();
const ToDo = require("./TodoModel"); 

router.post("/", async (req, res) => {
    try {
        const newTodo = new ToDo(req.body);
        const message = await newTodo.save();
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const posts = await ToDo.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get("/:_id",async (req, res) => {
    try {
        const posts = await ToDo.findById(req.params._id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:_id/delete",async (req, res) => {
    try {
        const posts = await ToDo.findByIdAndDelete(req.params._id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/:id/done", async (req, res) => {
    try {
        const updatedProduct = await ToDo.findByIdAndUpdate(
            req.params.id,
            { $set:{status:"done"} },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json("m");
    }
});

module.exports = router;
