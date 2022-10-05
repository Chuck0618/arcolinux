var ws = require("nodejs-websocket")
const PORT = 3000

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
		conn.sendText(str.toUpperCase()+"!!!")
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
});

server.listen(PORT, ()=>{
    console.log('websocket server start, listening '+PORT);
})