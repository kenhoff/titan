express = require('express')

app = express ()

app.use(express.static(__dirname))

app.get("/", function (req, res) {
	res.redirect("/begin")
})

app.get("/begin", function (req, res) {
	res.sendfile("begin.html")
})
	
app.get("/:user/Styx", function (req, res) {
	res.sendfile("ending.html")
})

app.get("*", function (req, res) {
	res.sendfile("game.html")
})

app.listen (process.env.PORT || 6293)
