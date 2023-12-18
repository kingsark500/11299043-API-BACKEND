const Patient = mongoose.model('Patient', patientSchema);

const visitSchema = new mongoose.Schema({
    patientId: Number,
    dateAndTime: Date,
    typeOfEncounter: String
});

const Visit = mongoose.model('Visit', encounterSchema);
