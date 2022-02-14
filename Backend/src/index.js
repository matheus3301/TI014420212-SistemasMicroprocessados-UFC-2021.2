require("dotenv").config();

const express = require("express");
const cors = require("cors");
const SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const dataSchema = require("./models/data");
const Data = mongoose.model('Data', dataSchema);

const port = process.env.PORT || 8080;

const serial = new SerialPort("COM101", {
	baudRate: 9000
});

const parser = serial.pipe(new Readline({ delimiter: '\r\n' }))

parser.on('data', async (input) => {
	let sanitizedInput = input.toString();
	sanitizedInput = sanitizedInput.trim();
	sanitizedInput = sanitizedInput.split(",");


	[temperature, led1, led2] = sanitizedInput;

	await Data.create({
		temperature,
		led1,
		led2
	})

	console.log(sanitizedInput);
});

const app = express();
app.use(express.json());
app.use(cors());


app.get("/api/data", async (req, res) => {
	return res.json(await Data.find());
});

app.post("/api/led/:id", (req, res) => {
	let id = req.params.id;
	serial.write(`${id}`);

	return res.json();
});


app.listen(port, () => {
	console.log(`App running on ${port}`);
})
