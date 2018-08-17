const express = require("express");
const app = express();
let port = 8000;
let version = 4;


app.get("/", (req, res) => {
	res.send("Up and runnning: " + version);
})

app.listen(port, () => {
	console.log("Test listening to port: ", port);
});
