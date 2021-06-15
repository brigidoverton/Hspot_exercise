var express = require("express");
var app = express();
var path = require("path");
var server = require("http").createServer(app);
const {createProxyMiddleware} = require('http-proxy-middleware')
 
const API_SERVICE_URL = "https://api.elderscrollslegends.io/v1";


app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});


app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/public", express.static(path.join(__dirname, "public")));

//create a proxy to talk to the Elder scrolls API, replaces pathRewrite with API_SERVICE_URL
app.use('/cardSearch', createProxyMiddleware({
	target: API_SERVICE_URL, 
	changeOrigin: true,
	pathRewrite: {
		[`^/cardSearch`]: ''
	}

}));
// reloads page on file change
if (process.env.NODE_ENV !== "production") {
	require("reload")(app);
}

//starts server
var port = process.env.PORT || 3000;
server.listen(port, function () {
	console.log("Listening on port ".concat(port));
});
