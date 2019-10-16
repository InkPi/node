const http = require("http");

const fs = require("fs");

//added express and app
const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

//did app.get
//doesn't seem to work, maybe got overwritten by http,fs?
app.get("/memes", function(req, res) {
  res.send("memes");
});

//had to add "src/" before it! Was not in tutorial
//maybe because I was using codesandbox default template
fs.readFile("src/index.html", (err, html) => {
  if (err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
  });
});
