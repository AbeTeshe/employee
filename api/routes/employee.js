const router = require('express').Router();
const Employee = require("../model/employee");

//CREATE EMPLOYEEE
router.post("/", async(req, res) => {
    const employee = new Employee(req.body);
    try {
        const savedEmployee = await employee.save();
        res.status(200).json(savedEmployee);
    } catch (err) {
        res.status(500).json(err.message);
    }
});


//UPDATE EMPLOYEE
router.put("/:id", async(req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, {new: true});
            res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(500).json(err.message);
    }
});


//DELETE AN EMPLOYEE
router.delete("/:id", async(req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json("Employee has been deleted!");
    } catch (err) {
        res.status(500).json(err.message);
    }
})

//GET EMPLOYEES
router.get("/", async(req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;