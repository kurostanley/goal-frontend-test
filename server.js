const express = require('express');

const app = express();

app.set('view engine', 'ejs')  //使用 ejs 當作 node.js 的 view engine


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(5000)