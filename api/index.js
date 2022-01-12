const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const employeeRoutes = require("./routes/employee");

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(express.json());

app.use("/employee", employeeRoutes);

app.get("/", (req, res) => {
    res.send('Hello to EmployeeForm API');
})

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
.then(() => console.log("Database Connected Successfully!"))
.catch((err) => {
    console.log(err.message);
});

app.listen(PORT, () => {
    console.log(`Backend server is running on Port ${PORT}`)
});