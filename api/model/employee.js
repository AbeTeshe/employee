const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {type: String, required: true},
    dateOfBirth: String,
    gender: String,
    salary: Number,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;