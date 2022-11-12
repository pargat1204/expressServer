let bodyparser = require('body-parser');
let express = require("express");
let path = require('path');
let app = express();
let ejs = require('ejs');
let PORT = process.env.port || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
    res.render("index");
});

app.post('/agent', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, function (error) {
    if (error) { throw error; };
    console.log("Server created Successfully on PORT", PORT);
})

