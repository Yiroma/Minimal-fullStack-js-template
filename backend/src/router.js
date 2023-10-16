const express = require("express");

const taskControllers = require("./controllers/taskControllers");

const router = express.Router();

router.get("/", taskControllers.getAllTasks);
router.get("/:id", taskControllers.getOneTask);
router.post("/", taskControllers.createTask);
router.put("/:id", taskControllers.updateTask);
router.delete("/:id", taskControllers.deleteTask);

module.exports = router;
