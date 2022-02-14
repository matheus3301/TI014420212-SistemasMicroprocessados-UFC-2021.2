const express = require("express");
const cors = require("cors");
const SerialPort = require("serialport");
const port = process.env.PORT || 8080;

data = [];

const serial = new SerialPort("COM101", {
	baudRate: 9000
});

serial.on('data', (input) => {
	let sanitizedInput = input.toString();
	sanitizedInput = sanitizedInput.split(",");

	[temperature, led1, led2] = sanitizedInput;
	row = {
		timestamp: new Date().getTime(),
		temperature,
		led1,
		led2
	}

	data.push(row);

	console.log(sanitizedInput);
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("api/data", (req, res) => {
	return res.json(data);
})

// app.post("api/led/:id", (req, res) => {

// })

app.listen(port, () => {
	console.log(`App running on ${port}`);
})
