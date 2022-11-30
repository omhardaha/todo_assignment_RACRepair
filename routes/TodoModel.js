const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default:"pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("ToDo", ToDoSchema);
