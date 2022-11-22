const mongoose= require("mongoose");
const validator = require ("validator");

const Donate =  mongoose.model("Donate",{
    
        name:{
        type: String,
        required:true,
        trim: true,
    },
    TypeOfDonation:{
        type:String,
        required: true,
        trim: true,
    },
     phoneNumber:{
        type: Number,
        length: 10,
        validate(value){
            if(value<10 >10){
                throw new Error("Phone number must be 10 digits");
            }
        },
    },
});

module.exports = Donate;