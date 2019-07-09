// const fs = require("fs");
// const https = require("https");

// let options = {
//     key:fs.readFileSync("./key/server.key"),
//     cert:fs.readFileSync("./key/server.crt"),
//     requestCert:false,
//     ca:[fs.readFileSync("./key/ca.crt")]
// };

// let httpsServer = https.createServer(options);

// httpsServer.on("request",(req,resp) => {
//     console.log("有一用户连接");
//     resp.setHeader("Content-Type","text/html");
//     resp.writeHead(200);
//     resp.end(fs.readFileSync("./webcam.html"));
// });

// httpsServer.listen(9999,"localhost",() => {
//     console.log("listening");
// })



const express = require('express')
const path = require('path')
const https = require('https')
const app = express()

app.use(express.static("./"))
app.use(express.static("public"))
// app.get('/', (req, res) => {
//   res.send('Hello HTTPS!')
// })

// https.createServer({}, app).listen(8800, () => {
//   console.log('Listening...')
// })

const fs = require('fs')

//...

https.createServer({
  key: fs.readFileSync('./key/server.key'),
  cert: fs.readFileSync('./key/server.crt')
}, app).listen(3900, () => {
  console.log('Listening...')
})