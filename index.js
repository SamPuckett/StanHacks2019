const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;


//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));


app.get("/", (req, res) => {
	res.render("index");

});


app.listen(8080, () => {
	console.log("Listening on port " + port);
});