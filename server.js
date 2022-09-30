const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');


const app = express();

app.set('view engine', 'ejs')  //使用 ejs 當作 node.js 的 view engine

app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', 'CHANGE THIS TO FRONTEND URL'); // * allows all, or you can limit by domain
    // res.setHeader('Access-Control-Allow-Methods', '*'); // Set which header methods you want to allow (GET,POST,PUT,DELETE,OPTIONS)
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // These 2 are recommended
    // res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie'); // Required to allow the returned cookie to be set
	// res.setHeader('Access-Control-Allow-Credentials', 'true'); // Required to allow auth credentials
    next();
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.render('index');
})

const PORT = process.env.PORT || 5000;

// Sets up the server as HTTPS using certificates
const httpsOptions = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
}

//xconst server = https.createServer(httpsOptions, app).listen(PORT);


app.listen(PORT)