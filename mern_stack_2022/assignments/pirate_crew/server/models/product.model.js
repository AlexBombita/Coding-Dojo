// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "MUST HAVE A NAME"]
    },
    photo:{
        type:String,
        required:[true, "MUST HAVE A LINK"]
    },
    chest:{
        type:Number,
        required:[true, "MUST HAVE A NUMBER"],
        min:[0]
    },
    phrase:{
        type:String,
        required:[true, "MUST HAVE A PHRASE"],
        minLength:[1, "PHRASE MUST BE LONGER THAN 1 CHARACTER"]
    },
    position:{
        type:String,
        required:[true, "MUST HAVE A POSITION"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },

    eyePatch: {
        type: Boolean,
        default: true
    },

    hookHand: {
        type: Boolean,
        default: true
    },

}, {timestamps:true})

module.exports = mongoose.model("Product", ProductSchema)