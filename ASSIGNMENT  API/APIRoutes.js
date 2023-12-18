// POST: Add a new patient
app.post('/patients', async (req, res) => {

    const patient = new Patient(req.body);

    await patient.save();
    res.status(201).send(patient);
});

// GET: Retrieve all patients
app.get('/patients', async (req, res) => {

    const patients = await Patient.find({});

    res.send(patients);
});


// GET: Retrieve a single patient by ID
app.get('/patients/:id', async (req, res) => {

    const patient = await Patient.findById(req.params.id);

    if (!patient) return res.status(404).send('Patient not found...');
    res.send(patient);
});



// PUT: Update a patient by ID
app.put('/patients/:id', async (req, res) => {

    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body);

    if (!patient) return res.status(404).send('Patient not found...');

    res.send(patient);
});



// DELETE: Delete a patient by ID
app.delete('/patients/:id', async (req, res) => {

    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) return res.status(404).send('Patient not found...');
    res.send(patient);

});

app.post('/visit', async (req, res) => {
    const visit = new Visit(req.body);

    await visit.save();

    res.status(201).send(visit);
});


app.get('/visit/:id', async (req, res) => {

    const visit = await Visit.findById(req.params.id);

    if (!visit) return res.status(404).send('No visit with the given ID was found.');

    res.send(visit);


});





app.post('/patient-vitals', async (req, res) => {

    const patientVital = new PatientVital(req.body);

    await patientVital.save();
    res.status(201).send(patientVital);

});

app.get('/patient-vitals/:id', async (req, res) => {

    const patientVital = await PatientVital.findById(req.params.id);

    if (!patientVital) return res.status(404).send('No patient vital with the given ID was found.');
    res.send(patientVital);

});


app.post('/doctor-patient-symptoms', async (req, res) => {
    // Checking if doctor is authorized to add symptom for this patient
    const doctorPatientSymptom = new DoctorPatientSymptom(req.body);

    await doctorPatientSymptom.save();

    res.status(201).send(doctorPatientSymptom);

});

app.get('/doctor-patient-symptoms/:id', async (req, res) => {

    const doctorPatientSymptom = await DoctorPatientSymptom.findById(req.params.id);

    if (!doctorPatientSymptom) return res.status(404).send('No doctor patient symptom with the given ID was found.');

    res.send(doctorPatientSymptom);
});









