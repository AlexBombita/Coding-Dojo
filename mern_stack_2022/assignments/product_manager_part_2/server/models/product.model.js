// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "MUST HAVE A TITLE"]
    },
    price:{
        type:Number,
        required:[true, "MUST HAVE A PRICE"],
        min:[1, "PRICE MUST BE MORE THAN 1"],
    },
    description:{
        type:String,
        required:[true, "MUST HAVE A DESCRIPTION"],
        minLength:[1, "DESCRIPTION MUST BE LONGER THAN 1 CHARACTER"]
    }
}, {timestamps:true})

module.exports = mongoose.model("Product", ProductSchema)