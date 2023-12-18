const { default: mongoose } = require("mongoose");

const {Schema} = mongoose

const patientSchema = new Schema({

    PatientID: String,

    Surname: String,

    Othernames: String,

    Gender: { type : String , enum: ['Male', 'Female'] },
    
    PhoneNumber: Number,

    ResidentialAddress: String,

    EmergencyName: String,

    Contact: Number,

    RelationshipWithPatient: String

})


const Patient = mongoose.model('Patient', patientSchema);

module.exports= Patient;