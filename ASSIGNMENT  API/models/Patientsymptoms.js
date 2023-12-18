const doctorPatientSymptomSchema = new mongoose.Schema({
    patientId: Number,
    symptoms: String
});

const DoctorPatientSymptom = mongoose.model('DoctorPatientSymptom', doctorPatientSymptomSchema);
