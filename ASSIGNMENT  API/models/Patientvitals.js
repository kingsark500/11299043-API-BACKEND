
const Encounter = mongoose.model('Encounter', encounterSchema);

const patientVitalSchema = new mongoose.Schema({
    patientId: Number,
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spo2: String
});

const PatientVital = mongoose.model('PatientVital', patientVitalSchema);

