const mongoose= require("mongoose");
const validator = require ("validator");

const Adopt =  mongoose.model("Adopt",{
    
    animalName:{
        type:String,
        required: true,
        trim: true,
    },
        nameOfAdopter:{
        type: String,
        required:true,
        trim: true,
    },
    phoneNumber:{
        type: Number,
        length: 10,
        validate(value){
            if(value >10){
                throw new Error("number must be 10 digits");
            }
        },
    },
    residence:{
        type: String,
        required: true, 
    },
    dateOfAdoption:{
        type: Date,
        required: true,
    },
});

module.exports = Adopt;